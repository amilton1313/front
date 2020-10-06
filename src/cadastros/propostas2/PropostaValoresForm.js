import React, { useState, useEffect, useContext } from 'react'
import clienteAxios from '../../config/axios'
import { Form, Row, Col } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMinus, faPlus, faFolderOpen, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import { PropostaContext } from './Proposta'
import { PropostaValoresContext } from './PropostaValores'
import './propo.css'
// import ModelPropostaParcela from './models/ModelPropostaParcela'

const PropostaValoresForm = () => {

    const { id_proposta } = useContext(PropostaContext)
    const { getParcelas, addParcela, updParcela, delParcela,
        parcela, setParcela,
        idParcela, setIdParcela, idProposta, setIdProposta,
        id_tipo, setIdTipo, inicio, setInicio, valor, setValor,
        vcto_primeira, setVctoPrimeira, qtde, setQtde,
        reforco_tipo, setReforcoTipo, total, setTotal,
        novaProposta, setNovaProposta, salvar, setSalvar,
        mostrarModal, setMostrarModal

    } = useContext(PropostaValoresContext)

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


    const handleClose = () => {
        setMostrarModal(false)
    }


    // const handleLimpar = () => {
    //     setParcela(new ModelPropostaParcela('', '', '', '', '', '', '', '', ''))
    //     setMostrarModal(true)
    // }

    return (
        <>

            <Form>
                {/* Tipo */}
                <Form.Group
                    as={Row}
                    className="gr"
                >
                    <Form.Label column sm={2} className="lab">Tipo: </Form.Label>
                    <Col sm={8}>
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
                    <Col sm={8}>
                        <Form.Control
                            size="sm"
                            type="text"
                            id="inicio"
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
                    <Col sm={8}>
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
                    <Col sm={8}>
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
                    <Col sm={8}>
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
                    <Col sm={8}>
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



            </Form>



        </>
    );
}

export default PropostaValoresForm;