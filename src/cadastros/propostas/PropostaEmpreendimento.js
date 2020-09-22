import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { faMinus, faPlus, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

import BotaoLinha from './BotaoLinha'
import MostrarEmpreendimentos from './MostrarEmpreendimentos'

const PropostaEmpreendimento =
    ({
        setIdEmpreendimento,
        setNomeEmpreendimento,
        nomeEmpreendimento,
        setMensagem
    }) => {

        const [exibirModalEmpreendimento, setExibirModalEmpreendimento] = useState(false)
        // const [exibirBotoesEmpreendimento, setExibirBotoesEmpreendimento] = useState(false)

        const [classe, setClasse] = useState('gr')

        return (
            <>
                <Form.Group
                    as={Row}
                    // onMouseOver={() => setExibirBotoesEmpreendimento(true)}
                    // onMouseLeave={() => setExibirBotoesEmpreendimento(false)}
                    className="gr"
                >
                    <Form.Label column sm={2} className="lab">Empreendimento : </Form.Label>
                    <Col sm={5}>
                        <Form.Control
                            type="text"
                            placeholder="Clique para selecionar um Empreendimento."
                            name="id_Empreendimento"
                            className="cont"
                            value={nomeEmpreendimento}
                            autocomplete="off"
                            onClick={() => setExibirModalEmpreendimento(!exibirModalEmpreendimento)}
                            readonly
                        />
                        <Form.Control.Feedback type="invalid">
                            Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
                    </Col>
                    <div className="d-flex" >
                        {
                            nomeEmpreendimento
                                ? <div className="d-flex">
                                    {/* <BotaoLinha
                                        disabled={false}
                                        classe="bot btn-primary"
                                        icone={faFolderOpen}
                                        onClick={() => setExibirModalEmpreendimento(!exibirModalEmpreendimento)}
                                        dica = 'Selecionar um Empreendimento'
                                    />
                                    <BotaoLinha
                                        disabled={false}
                                        classe="bot btn-success"
                                        icone={faPlus}
                                        onClick={() => setIdEmpreendimento(null)}
                                        dica = 'Cadastrar um Empreendimento'
                                    /> */}
                                    
                                    <BotaoLinha
                                        disabled={false}
                                        classe="bot btn-light"
                                        icone={faMinus}
                                        onClick={() => setIdEmpreendimento(null)}
                                        dica = 'Limpar campo Empreendimento'
                                        posicao = 'right'
                                    />


                                    
                                </div>
                                : null
                        }
                    </div>
                </Form.Group>
                {
                    <MostrarEmpreendimentos
                        titulo='Empreendimentos'
                        setIdEmpreendimento={setIdEmpreendimento}
                        setNomeEmpreendimento={setNomeEmpreendimento}
                        setExibirModalEmpreendimento={setExibirModalEmpreendimento}
                        exibirModalEmpreendimento={exibirModalEmpreendimento} />
                }
            </>
        );
    }

export default PropostaEmpreendimento;