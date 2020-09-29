import React, { useState, useEffect, useContext, createContext } from 'react'
import { Form, Row, Col, Button, Jumbotron, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen, faTrash } from '@fortawesome/free-solid-svg-icons'
import clienteAxios from '../../config/axios'

import BotaoLinha from './BotaoLinha'

import PropostaEmpreendimento from './PropostaEmpreendimento'
// import tabelasVendas from './lista-de-tabelas-vendas'
import './propo.css'

import { PropostaContext } from './Proposta'

const PropostaUnidades = () => {

    const { idEmpreendimento, setIdEmpreendimento, nomeEmpreendimento, setNomeEmpreendimento,
        idTabelaVendas, setIdTabelaVendas, tabelasVendas, setTabelasVendas
    } = useContext(PropostaContext)


    const unidades = [
        { id_unidade: 34, blocox: 'Aurora', numero: '404', garagensx: '25 e 36', depositosx: '65 e 21' },
        { id_unidade: 35, blocox: 'Aurora', numero: '502', garagensx: '25 e 40', depositosx: '70 e 75' },
    ]

    const salvarDados = () => {
        const prop = {
            id_empreendimento: idEmpreendimento,
            id_tabela_vendas: idTabelaVendas
        }
        console.log('salvando dados...', prop)

        clienteAxios.put(`/proposta/${1545}`, prop)
            .then(resposta => {
                // setEmpreendimentos(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleTabelaVendas = event => {
        setIdTabelaVendas(event.target.value)
    }

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
                        <Col sm={7}>
                            <Form.Control
                                as="select"
                                name="id_tabela"
                                className="cont"
                                value={idTabelaVendas}
                                onChange={handleTabelaVendas}
                            >
                                {
                                    tabelasVendas.map(tab => <option value={tab.id_tabela_vendas}>{tab.descricao}</option>)
                                }
                            </Form.Control>
                        </Col>

                    </Form.Group>

                </Form>
                <div className="d-flex">
                <Col sm={2}></Col>
                <Col sm={9}>
                <Table borderless size="sm">
                    <thead>
                        <tr>
                            <th style={{width: "40%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>Bloco</th>
                            <th style={{backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>Unidades</th>
                            <th style={{backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>Garagens</th>
                            <th style={{backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>Depósitos</th>
                            <th><span style={{backgroundColor: '#0069D9', color: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px"}}><FontAwesomeIcon icon={faPlus} /></span></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        unidades.map(und => (
                            <tr>
                                <td style={{backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>{und.blocox}</td>
                                <td style={{backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>{und.numero}</td>
                                <td style={{backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>{und.garagensx}</td>
                                <td style={{backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>{und.depositosx}</td>
                                <td >
                                    {/* <BotaoLinha
                                        disabled={false}
                                        classe="bot btn-sm btn-light"
                                        icone={faMinus}
                                        onClick={() => setIdEmpreendimento(null)}
                                        dica='Excluir esta unidade'
                                        posicao='right'
                                    /> */}
                                    <span style={{backgroundColor: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px"}}><FontAwesomeIcon icon={faMinus} /></span>

                                </td>
                            </tr>
                        ))
                    }

                    </tbody>

                </Table>
                </Col>
                </div>

                
                <Col sm={12} className="text-center">

                    <Button sm={2} className="btn col-2" onClick={() => salvarDados()}>Salvar</Button>
                </Col>

            </Jumbotron>

        </>
    );
}

export default PropostaUnidades;