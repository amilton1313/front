import React, { useState, useEffect, useContext } from 'react'
import clienteAxios from '../../config/axios'
import { Form, Row, Col, Button, Jumbotron, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import { PropostaContext } from './Proposta'
import './propo.css'
import ModelPropostaParcela from './models/ModelPropostaParcela'

const PropostaValores1 = ({ getParcelas, parcela, setParcela }) => {

    const { id_proposta, parcelas, setParcelas } = useContext(PropostaContext)

    const [idParcela, setIdParcela] = useState(null)
    const [idProposta, setIdProposta] = useState(null)
    const [id_tipo, setIdTipo] = useState(1)
    const [inicio, setInicio] = useState(0)
    const [valor, setValor] = useState(null)
    const [vcto_primeira, setVctoPrimeira] = useState(null)
    const [qtde, setQtde] = useState(null)
    const [reforco_tipo, setReforcoTipo] = useState(null)
    const [total, setTotal] = useState(null)

    const handleTipo = (e) => {
        setIdTipo(e.target.value)
    }

    const handleInicio = (e) => {
        setInicio(e.target.value)
    }

    const handleValor = (e) => {
        setValor(e.target.value)
    }

    const handleVctoPrimeira = (e) => {
        setVctoPrimeira(e.target.value)
    }

    const handleQtde = (e) => {
        setQtde(e.target.value)
    }

    const handlePeriodo = (e) => {
        setReforcoTipo(e.target.value)
    }

    useEffect(() => {
        setIdParcela(parcela.id_parcela)
        setIdTipo(parcela.id_tipo)
        setInicio(parcela.inicio)
        setValor(parcela.valor)
        setVctoPrimeira(parcela.vcto_primeira)
        setQtde(parcela.qtde)
        setReforcoTipo(parcela.reforco_tipo)
    }, [parcela])

    const addParcela = (id_proposta) => {
        const parc = {inicio, qtde, valor, id_proposta, id_tipo, valorsem: null,
             vcto_primeira, reforco_tipo}
        clienteAxios.post(`/propostaproposto`, parc)
            .then(resposta => {
                getParcelas(id_proposta)
                console.log('resposta', resposta)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const updParcela = (id_parcela) => {
        clienteAxios.put(`/propostaproposto/${id_parcela}`, {
            id_tipo, inicio, valor,
            qtde, vcto_primeira, reforco_tipo
        })
            .then(resposta => {
                getParcelas(id_proposta)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleLimpar = () => {
        setParcela(new ModelPropostaParcela('','','','','','','','','') )
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
                                // name="id_tabela"
                                className="cont"
                                value={id_tipo}
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

                    {/* Inicio */}
                    <Form.Group as={Row} className="gr">
                        <Form.Label size="sm" column sm={2} className="lab">Mês de Início : </Form.Label>
                        <Col sm={2}>
                            <Form.Control
                                size="sm"
                                type="text"
                                // name="inicio"
                                className="cont"
                                value={inicio}
                                onChange={handleInicio}
                            />
                        </Col>
                    </Form.Group>

                    {/* Valor da Parcela */}
                    <Form.Group as={Row} className="gr">
                        <Form.Label size="sm" column sm={2} className="lab">Valor da parcela : </Form.Label>
                        <Col sm={2}>
                            <Form.Control
                                size="sm"
                                type="text"
                                // name="numero"
                                className="cont"
                                value={valor}
                                onChange={handleValor}
                            />
                        </Col>
                    </Form.Group>

                    {/* VctoPrimeira */}
                    <Form.Group as={Row} className="gr">
                        <Form.Label size="sm" column sm={2} className="lab">1º vencimento : </Form.Label>
                        <Col sm={2}>
                            <Form.Control
                                size="sm"
                                type="text"
                                // name="numero"
                                className="cont"
                                value={vcto_primeira}
                                onChange={handleVctoPrimeira}
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
                                // name="numero"
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
                                // name="id_tabela"
                                className="cont"
                                value={reforco_tipo}
                                onChange={handlePeriodo}
                            >
                                <option value={1}>Único</option>
                                <option value={2}>Bimestrais</option>
                                <option value={3}>Trimestrais</option>
                                <option value={4}>Quadrimestrais</option>
                                <option value={5}>Semestrais</option>
                                <option value={6}>Anuais</option>
                            </Form.Control>
                        </Col>

                    </Form.Group>

                    <Col sm={11} className="text-center">
                        <Button sm={2} className="btn col-2" onClick={() => handleLimpar()}>Nova Proposta</Button>
                        <Button sm={2} className="btn col-2" onClick={() => addParcela(id_proposta)}>Salvar Nova Proposta</Button>
                        <Button sm={2} className="btn col-2" onClick={() => updParcela(idParcela, parcela)}>Salvar</Button>
                    </Col>

                </Form>
            </Jumbotron>

        </>
    );
}

export default PropostaValores1;