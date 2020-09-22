import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { faMinus, faPlus, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

import BotaoLinha from './BotaoLinha'
import MostrarCorretores from './MostrarCorretores'

const PropostaCorretor =
    ({
        setIdCorretor,
        setNomeCorretor,
        nomeCorretor
    }) => {

    const [exibirModalCorretor, setExibirModalCorretor] = useState(false)
    // const [exibirBotoesCorretor, setExibirBotoesCorretor] = useState(false)

    return (
        <>
        <Form.Group
            as={Row}
            // onMouseOver={() => setExibirBotoesCorretor(true)}
            // onMouseLeave={() => setExibirBotoesCorretor(false)}
            className="gr"
        >
            <Form.Label column sm={2} className="lab">Corretor : </Form.Label>
            <Col sm={5}>
                <Form.Control
                    type="text"
                    placeholder="Clique para selecionar um Corretor."
                    name="id_Corretor"
                    className="cont"
                    value={nomeCorretor}
                    autocomplete="off"
                    onClick={() => setExibirModalCorretor(!exibirModalCorretor)}
                    readonly
                />
                <Form.Control.Feedback type="invalid">
                    Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
            </Col>
            <div className="d-flex" >
                {
                    nomeCorretor
                        ? <div className="d-flex">
                                {/* <BotaoLinha
                                    disabled={false}
                                    classe="bot btn-primary"
                                    icone={faFolderOpen}
                                    onClick={() => setExibirModalCorretor(!exibirModalCorretor)}
                                    dica = 'Selecionar um Corretor'
                                />
                                <BotaoLinha
                                    disabled={false}
                                    classe="bot btn-success"
                                    icone={faPlus}
                                    onClick={() => setIdCorretor(null)}
                                    dica = 'Cadastrar um Corretor'
                                /> */}
                                <BotaoLinha
                                    disabled={false}
                                    classe="bot btn-light"
                                    icone={faMinus}
                                    onClick={() => setIdCorretor(null)}
                                    dica = 'Limpar campo Corretor'
                                    posicao = 'right'
                                />
                            </div>
                        : null
                }
            </div>
        </Form.Group>
        {
            <MostrarCorretores 
                titulo='Corretores'
                setIdCorretor={setIdCorretor}
                setNomeCorretor={setNomeCorretor}
                setExibirModalCorretor={setExibirModalCorretor}
                exibirModalCorretor={exibirModalCorretor} />
        }
        </>
    );
    }

export default PropostaCorretor;