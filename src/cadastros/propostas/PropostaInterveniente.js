import React, { useState, useContext } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

import MostrarIntervenientes from './MostrarIntervenientes'

import { PropostaContext } from './Proposta'

const PropostaInterveniente = () => {

    const { setNomeInterveniente, nomeInterveniente, setIdInterveniente } = useContext(PropostaContext)

    const [exibirModalInterveniente, setExibirModalInterveniente] = useState(false)

    const [classe, setClasse] = useState('gr')

    const onLimpar = () => {
        setIdInterveniente(null)
        setNomeInterveniente('')
    }

    return (
        <>
        <Form.Group
            as={Row}
            className="gr"
        >
            <Form.Label column sm={2} className="lab">Interveniente : </Form.Label>
            <Col sm={7}>
                <Form.Control
                    type="text"
                    placeholder="Clique para selecionar um Interveniente."
                    name="id_Interveniente"
                    className="cont"
                    value={nomeInterveniente}
                    autoComplete="off"
                    onClick={() => setExibirModalInterveniente(!exibirModalInterveniente)}
                    readOnly
                />
                <Form.Control.Feedback type="invalid">
                    Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
            </Col>
            <div className="d-flex" >
                {
                    (nomeInterveniente !== '')
                        ? <div className="d-flex">
                        <Button
                            disabled={false}
                            className="bot btn-light"
                            onClick={() => onLimpar()}
                        ><FontAwesomeIcon icon={faMinus} /></Button>
                    </div>
                    : null
                }
            </div>
        </Form.Group>
        {
            <MostrarIntervenientes 
            titulo='Intervenientes'
            setExibirModalInterveniente={setExibirModalInterveniente}
            exibirModalInterveniente={exibirModalInterveniente} />
        }
    </>
    );
    }

export default PropostaInterveniente;