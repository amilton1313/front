import React, { useState, useEffect, useContext, createContext } from 'react'
import { Form, Row, Col, Button, Jumbotron, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen, faTrash } from '@fortawesome/free-solid-svg-icons'
import clienteAxios from '../../config/axios'

import BotaoLinha from './BotaoLinha'

import PropostaEmpreendimento from './PropostaEmpreendimento'
import tabelasVendas from './lista-de-tabelas-vendas'
import './propo.css'

import { PropostaContext } from './Proposta'

const PropostaUnidades = () => {

    const { empreendimentos, idEmpreendimento, setIdEmpreendimento,
        nomeEmpreendimento, setNomeEmpreendimento
    } = useContext(PropostaContext)

    useEffect(() => {
        const id = idEmpreendimento
        const no = getNome(id)
        setNomeEmpreendimento(no)
    }, [idEmpreendimento])

    const getNome = (id) => {
        if (id === null) return ''
        const empreendimento = empreendimentos.filter(pes => pes.id_empreendimento === id)
        const nom = empreendimento[0] ? empreendimento[0] : {}
        return nom.nome
    }

    const unidades = [
        { id_unidade: 34, blocox: 'Aurora', numero: '404', garagensx: '25 e 36', depositosx: '65 e 21' },
        { id_unidade: 35, blocox: 'Aurora', numero: '502', garagensx: '25 e 40', depositosx: '70 e 75' },
    ]

    useEffect(() => {
        if (!idEmpreendimento) { setNomeEmpreendimento('') }

    }, [idEmpreendimento])

    return (
        <>
            <Jumbotron
                fluid
                style={{ paddingTop: '10px', borderRadius: '1%' }}
            >
                <Form noValidate style={{ margin: '10px' }}>

                    {/* Empreedimento */}
                    <PropostaEmpreendimento />

                    {/* Tabela de Vendas */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label column sm={2} className="lab">Tabela de Vendas : </Form.Label>
                        <Col sm={5}>
                            <Form.Control as="select" name="id_tabela" className="cont">
                                {
                                    tabelasVendas.map(tab => <option value={tab.id_tabela_vendas}>{tab.descricao}</option>)
                                }
                            </Form.Control>
                        </Col>

                    </Form.Group>

                </Form>

                <div style={{ marginLeft: '18%' }}>
                    <div className="d-flex ">
                        <div className="div-unidades-1">Bloco</div>
                        <div className="div-unidades-2">Unidade</div>
                        <div className="div-unidades-2">Garagens</div>
                        <div className="div-unidades-2">Depósitos</div>
                        <div style={{ marginLeft: '5px' }}>
                            <BotaoLinha
                                disabled={false}
                                classe="bot btn-sm btn-primary"
                                icone={faPlus}
                                onClick={() => setIdEmpreendimento(null)}
                                dica='Incluir uma unidade'
                                posicao='right'
                                style={{ lineHeight: '2rem' }}
                            />

                        </div>
                    </div>
                    {
                        unidades.map(und => (

                            <div className="d-flex bg-white">
                                <div className="div-unidades-3">{und.blocox}</div>
                                <div className="div-unidades-4">{und.numero}</div>
                                <div className="div-unidades-4">{und.garagensx}</div>
                                <div className="div-unidades-4">{und.depositosx}</div>
                                <div style={{ marginLeft: '5px' }}>
                                    <BotaoLinha
                                        disabled={false}
                                        classe="bot btn-sm btn-light"
                                        icone={faMinus}
                                        onClick={() => setIdEmpreendimento(null)}
                                        dica='Excluir esta unidade'
                                        posicao='right'
                                    />

                                </div>
                            </div>
                        ))
                    }
                </div>

            </Jumbotron>

        </>
    );
}

export default PropostaUnidades;