import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { faMinus, faPlus, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

import BotaoLinha from './BotaoLinha'
import MostrarImobiliarias from './MostrarImobiliarias'

const PropostaImobiliaria =
    ({
        setIdImobiliaria,
        setNomeImobiliaria,
        nomeImobiliaria,
        setMensagem
    }) => {

        const [exibirModalImobiliaria, setExibirModalImobiliaria] = useState(false)
        // const [exibirBotoesImobiliaria, setExibirBotoesImobiliaria] = useState(false)

        const [classe, setClasse] = useState('gr')

        return (
            <>
                <Form.Group
                    as={Row}
                    // onMouseOver={() => setExibirBotoesImobiliaria(true)}
                    // onMouseLeave={() => setExibirBotoesImobiliaria(false)}
                    className="gr"
                >
                    <Form.Label column sm={2} className="lab">Imobiliária : </Form.Label>
                    <Col sm={5}>
                        <Form.Control
                            type="text"
                            placeholder="Clique para selecionar uma Imobiliária"
                            name="id_Imobiliaria"
                            className="cont"
                            value={nomeImobiliaria}
                            readonly
                            onClick={() => setExibirModalImobiliaria(!exibirModalImobiliaria)}
                            autocomplete="off"
                        />
                        <Form.Control.Feedback type="invalid">
                            Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
                    </Col>
                    <div className="d-flex" >
                        {
                            nomeImobiliaria
                                ? <div className="d-flex">
                                    {/* <BotaoLinha
                                        disabled={false}
                                        classe="bot btn-primary"
                                        icone={faFolderOpen}
                                        onClick={() => setExibirModalImobiliaria(!exibirModalImobiliaria)}
                                        dica = 'Selecionar uma Imobiliária'
                                    />
                                    <BotaoLinha
                                        disabled={false}
                                        classe="bot btn-success"
                                        icone={faPlus}
                                        onClick={() => setIdImobiliaria(null)}
                                        dica = 'Cadastrar uma Imobiliária'
                                    /> */}
                                    
                                    <BotaoLinha
                                        disabled={false}
                                        classe="bot btn-light"
                                        icone={faMinus}
                                        onClick={() => setIdImobiliaria(null)}
                                        dica = 'Limpar campo Imobiliária'
                                        posicao = 'right'
                                    />


                                    
                                </div>
                                : null
                        }
                    </div>
                </Form.Group>
                {
                    <MostrarImobiliarias
                        titulo='Imobiliárias'
                        setIdImobiliaria={setIdImobiliaria}
                        setNomeImobiliaria={setNomeImobiliaria}
                        setExibirModalImobiliaria={setExibirModalImobiliaria}
                        exibirModalImobiliaria={exibirModalImobiliaria} />
                }
            </>
        );
    }

export default PropostaImobiliaria;