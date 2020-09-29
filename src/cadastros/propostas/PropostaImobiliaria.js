import React, { useState, useContext } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

import MostrarImobiliarias from './MostrarImobiliarias'

import { PropostaContext } from './Proposta'

const PropostaImobiliaria = () => {

    const { setIdImobiliaria, setNomeImobiliaria, nomeImobiliaria } = useContext(PropostaContext)

    const [exibirModalImobiliaria, setExibirModalImobiliaria] = useState(false)

    const [classe, setClasse] = useState('gr')

    const onLimpar = () => {
        setIdImobiliaria(null)
        setNomeImobiliaria('')
    }

    return (
        <>
            <Form.Group
                as={Row}
                className="gr"
            >
                <Form.Label column sm={2} className="lab">Imobiliária : </Form.Label>
                <Col sm={7}>
                    <Form.Control
                        type="text"
                        placeholder="Clique para selecionar uma Imobiliária"
                        name="id_Imobiliaria"
                        className="cont"
                        value={nomeImobiliaria}
                        readOnly
                        onClick={() => setExibirModalImobiliaria(!exibirModalImobiliaria)}
                        autoComplete="off"
                    />
                    <Form.Control.Feedback type="invalid">
                        Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
                </Col>
                <div className="d-flex" >
                    {
                        (nomeImobiliaria !== '')
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
                <MostrarImobiliarias
                    titulo='Imobiliárias'
                    setExibirModalImobiliaria={setExibirModalImobiliaria}
                    exibirModalImobiliaria={exibirModalImobiliaria} />
            }
        </>
    );
}

export default PropostaImobiliaria;