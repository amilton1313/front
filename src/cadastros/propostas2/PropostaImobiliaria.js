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

    const onLimpar = (e) => {
        e.preventDefault()
        setIdImobiliaria(null)
        setNomeImobiliaria('')
    }

    return (
        <>
            <Form.Group
                as={Row}
                className="gr"
            >
                <Form.Label size="sm" column sm={2} className="lab">Imobiliária : </Form.Label>
                <Col sm={7}>
                    <Form.Control
                        size="sm"
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
                                <span
                                    className="botao-minus"
                                    onClick={(e) => onLimpar(e)}
                                ><FontAwesomeIcon icon={faMinus} /></span>

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