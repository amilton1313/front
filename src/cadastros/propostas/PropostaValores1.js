import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button, Jumbotron, Table } from 'react-bootstrap'
import ReactList from 'react-list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import './propo.css'

const PropostaValores1 = () => {

    const [tipo, setTipo] = useState(1)
    const [valor, setValor] = useState(null)
    const [vencimento, setVencimento] = useState(null)
    const [qtde, setQtde] = useState(null)
    const [periodo, setPeriodo] = useState(null)
    const [total, setTotal] = useState(null)

    const handleTipo = (e) => {
        setTipo(e.target.value)
    }

    const handleValor = (e) => {
        setValor(e.target.value)
    }

    const handleVencimento = (e) => {
        setVencimento(e.target.value)
    }

    const handleQtde = (e) => {
        setQtde(e.target.value)
    }

    const handlePeriodo = (e) => {
        setPeriodo(e.target.value)
    }

    return (
        <>
        <Jumbotron
                fluid
                style={{ marginBottom: '10px', padding: '10px', borderRadius: '1%' }}
            >
                <Form>
                    {/* Tipo */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label column sm={2} className="lab">Tipo: </Form.Label>
                        <Col sm={2}>
                            <Form.Control as="select"
                                size="sm"
                                name="id_tabela"
                                className="cont"
                                value={tipo}
                                onChange={handleTipo}
                            >
                                <option value={1}>Ato</option>
                                <option value={2}>Mensais</option>
                                <option value={3}>Reforços</option>
                                <option value={4}>Chaves</option>
                                <option value={5}>Financiamento</option>
                            </Form.Control>
                        </Col>

                    </Form.Group>

                    {/* Valor da Parcela */}
                    <Form.Group as={Row} className="gr">
                        <Form.Label size="sm" column sm={2} className="lab">Valor da parcela : </Form.Label>
                        <Col sm={2}>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="numero"
                                className="cont"
                                value={valor}
                                onChange={handleValor}
                            />
                        </Col>
                    </Form.Group>

                        {/* Vencimento */}
                    <Form.Group as={Row} className="gr">
                        <Form.Label size="sm" column sm={2} className="lab">1º vencimento : </Form.Label>
                        <Col sm={2}>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="numero"
                                className="cont"
                                value={vencimento}
                                onChange={handleVencimento}
                            />
                        </Col>

                    </Form.Group>

                    {/* Qtde */}
                    <Form.Group as={Row} className="gr">
                        <Form.Label size="sm" column sm={2} className="lab">Qtde de parcelas : </Form.Label>
                        <Col sm={2}>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="numero"
                                className="cont"
                                value={qtde}
                                onChange={handleQtde}
                            />
                        </Col>
                    </Form.Group>

                    {/* Periodicidade */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label column sm={2} className="lab">Periodicidade: </Form.Label>
                        <Col sm={2}>
                            <Form.Control as="select"
                                size="sm"
                                name="id_tabela"
                                className="cont"
                                value={periodo}
                                onChange={handlePeriodo}
                            >
                                <option value={1}>Único</option>
                                <option value={2}>Bimestrais</option>
                                <option value={3}>Trimestrais</option>
                                <option value={4}>Quadrimestrais</option>
                                <option value={5}>Semestrais</option>
                                <option value={5}>Anuais</option>
                            </Form.Control>
                        </Col>

                    </Form.Group>

                    <Col sm={11} className="text-center">
                        <Button sm={2} className="btn col-2" onClick={() => {}}>Incluir</Button>
                    </Col>

                </Form>
                </Jumbotron>

        </>
    );
}

export default PropostaValores1;