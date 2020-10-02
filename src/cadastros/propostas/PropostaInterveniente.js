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

    const onLimpar = (e) => {
        e.preventDefault()
        setIdInterveniente(null)
        setNomeInterveniente('')
    }

    return (
        <>
        <Form.Group
            as={Row}
            className="gr"
        >
            <Form.Label size="sm" column sm={2} className="lab">Interveniente : </Form.Label>
            <Col sm={7}>
                <Form.Control
                    size="sm"
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
                    <button
                        style={{ border: 'none', backgroundColor: 'transparent', color: 'blue', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px" }}
                        onClick={(e) => onLimpar(e)}
                    ><FontAwesomeIcon icon={faMinus} /></button>
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