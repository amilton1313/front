import React, { useState, useContext } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

import MostrarProponentes from './MostrarProponentes'

import { PropostaContext } from './Proposta'

const PropostaProponente = () => {

    const { setNomeProponente, nomeProponente, setIdProponente } = useContext(PropostaContext)

    const [exibirModalProponente, setExibirModalProponente] = useState(false)

    const [classe, setClasse] = useState('gr')

    const onLimpar = () => {
        setIdProponente(null)
        setNomeProponente('')
    }

    return (
        <>
        <Form.Group
            as={Row}
            className="gr"
        >
            <Form.Label column sm={2} className="lab">Proponente : </Form.Label>
            <Col sm={7}>
                <Form.Control
                    type="text"
                    placeholder="Clique para selecionar um Proponente."
                    name="id_Proponente"
                    className="cont"
                    value={nomeProponente}
                    autoComplete="off"
                    onClick={() => setExibirModalProponente(!exibirModalProponente)}
                    readOnly
                />
                <Form.Control.Feedback type="invalid">
                    Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
            </Col>
            <div className="d-flex" >
                    {
                        (nomeProponente !== '')
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
            <MostrarProponentes 
            titulo='Proponentes'
            setExibirModalProponente={setExibirModalProponente}
            exibirModalProponente={exibirModalProponente}/>
        }
    </>
    );
    }

export default PropostaProponente;