import React, { useState, useEffect, useContext, createContext } from 'react'
import { Form, Row, Col, Button, Jumbotron, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen, faTrash } from '@fortawesome/free-solid-svg-icons'
import clienteAxios from '../../config/axios'

import MostrarUndsDisponiveis from './MostrarUndsDisponiveis'

import PropostaEmpreendimento from './PropostaEmpreendimento'
// import tabelasVendas from './lista-de-tabelas-vendas'
import './propo.css'

import { PropostaContext } from './Proposta'

const PropostaUnidades = () => {

    const [exibirModalUndsDisponiveis, setExibirModalUndsDisponiveis] = useState(false)
    const [undsProposta, setUndsProposta] = useState([])

    const { id_proposta, idEmpreendimento, setIdEmpreendimento, nomeEmpreendimento, setNomeEmpreendimento,
        idTabelaVendas, setIdTabelaVendas, tabelasVendas, setTabelasVendas
    } = useContext(PropostaContext)


    // useEffect(() => {
    //     getUndsProposta(id_proposta)
    // }, [exibirModalUndsDisponiveis])

    const salvarDados = () => {
        const prop = {
            id_empreendimento: idEmpreendimento,
            id_tabela_vendas: idTabelaVendas
        }
        clienteAxios.put(`/proposta/${1545}`, prop)
            .then(resposta => {
                // setEmpreendimentos(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getUndsProposta = (id_proposta) => {
        clienteAxios.get(`/propostaunds/${id_proposta}`)
            .then(resposta => {
                setUndsProposta(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const addUndsProposta = (prop) => {
        console.log('add', prop)
        clienteAxios.post(`/propostaunidade`, {prop})
            .then(resposta => {
                getUndsProposta(id_proposta)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const delUndsProposta = (prop) => {
        clienteAxios.delete(`/propostaunidade/${prop.id_proposta}/${prop.id_unidade}`)
            .then(resposta => {
                setUndsProposta(resposta.data)
                getUndsProposta(id_proposta)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleTabelaVendas = event => {
        setIdTabelaVendas(event.target.value)
    }

    const handleSelectUnidade = event => {
        setIdTabelaVendas(event.target.value)
        console.log('item seleionado')
        setExibirModalUndsDisponiveis(!exibirModalUndsDisponiveis)
    }

    useEffect(() => {
        getUndsProposta(id_proposta)
    }, [id_proposta])

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
                <Col sm={12} className="text-center">

                    <Button sm={2} className="btn col-2" onClick={() => salvarDados()}>Salvar</Button>
                </Col>
                </Jumbotron>
                <Jumbotron style={{paddingTop: '20px', paddingLeft: 0}}>
                <div className="d-flex "  style={{marginTop: 0}}>
                <Col sm={2} className="lab gr">Unidades: </Col>
                <Col sm={9}>
                <Table borderless size="sm">
                    <thead>
                        <tr>
                            <th style={{width: "40%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>Bloco</th>
                            <th style={{backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>Unidades</th>
                            <th style={{backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>Garagens</th>
                            <th style={{backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>Depósitos</th>
                            <th><span 
                                    style={{backgroundColor: '#0069D9', color: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px"}}
                                    onClick={(event) => handleSelectUnidade(event)}
                                ><FontAwesomeIcon icon={faPlus} /></span></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        undsProposta.map(und => (
                            <tr>
                                <td style={{backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>{und.blocox}</td>
                                <td style={{backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>{und.unidadex}</td>
                                <td style={{backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>{und.garagensx}</td>
                                <td style={{backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white"}}>{und.depositosx}</td>
                                <td >
                                    <span 
                                        style={{backgroundColor: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px"}}
                                        onClick={() => delUndsProposta({id_proposta: id_proposta, id_unidade: und.id_unidade})}
                                    ><FontAwesomeIcon icon={faMinus} /></span>

                                </td>
                            </tr>
                        ))
                    }

                    </tbody>

                </Table>
                </Col>
                </div>
                
                

            </Jumbotron>
            {
                <MostrarUndsDisponiveis
                    titulo='Unidades disponíveis'
                    setExibirModalUndsDisponiveis={setExibirModalUndsDisponiveis}
                    exibirModalUndsDisponiveis={exibirModalUndsDisponiveis} 
                    addUndsProposta={addUndsProposta}
                    getUndsProposta={getUndsProposta}/>
            }

        </>
    );
}

export default PropostaUnidades;