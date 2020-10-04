import React, { useState, useEffect, useContext } from 'react'
import clienteAxios from '../../config/axios'
import { useDispatch, useSelector } from 'react-redux'
import { InputGroup, FormControl, Table, Form, Row, Col, Button, Jumbotron } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMinus, faPlus, faStepForward, faStepBackward, faFastForward, faFastBackward } from '@fortawesome/free-solid-svg-icons'
import './propo.css'

import PropostaImobiliaria from './PropostaImobiliaria'
import PropostaCorretor from './PropostaCorretor'
import PropostaProponente from './PropostaProponente'
import PropostaInterveniente from './PropostaInterveniente'
import PropostaEmpreendimento from './PropostaEmpreendimento'
import MostrarUndsDisponiveis from './MostrarUndsDisponiveis'

import { ac_getPropostaById } from '../../actions/ac_proposta'
import { ac_getPessoaIdNome } from '../../actions/ac_pessoa'


import { PropostaContext } from './Proposta'

const PropostaDados = () => {

    const [exibirModalUndsDisponiveis, setExibirModalUndsDisponiveis] = useState(false)
    const [undsProposta, setUndsProposta] = useState([])

    const { getProposta, id_proposta, setId_proposta, data, setData,
        idImobiliaria, setIdImobiliaria, nomeImobiliaria, setNomeImobiliaria,
        idCorretor, setIdCorretor, nomeCorretor, setNomeCorretor,
        idProponente, setIdProponente, nomeProponente, setNomeProponente,
        idInterveniente, setIdInterveniente, nomeInterveniente, setNomeInterveniente,
        idLocalCaptacao, setIdLocalCaptacao, nomeLocalCaptacao, setNomeLocalCaptacao,
        observacoes, setObservacoes,
        idTabelaVendas, setIdTabelaVendas, tabelasVendas,
    } = useContext(PropostaContext)

    const dispatch = useDispatch()


    const handleLocalCaptacao = event => {
        setIdLocalCaptacao(event.target.value)
    }

    const handleObservacoes = event => {
        setObservacoes(event.target.value)
    }

    // const handleEdNumero = event => {
    //     setEdNumero(event.target.value)
    // }

    const salvarDados = () => {
        const prop = {
            data: data,
            id_imobiliaria: idImobiliaria,
            id_corretor: idCorretor,
            id_proponente: idProponente,
            id_interveniente: idInterveniente,
            id_localcaptacao: idLocalCaptacao,
            observacoes: observacoes
        }

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

    const handleSelectUnidade = event => {
        setIdTabelaVendas(event.target.value)
        console.log('item seleionado')
        setExibirModalUndsDisponiveis(!exibirModalUndsDisponiveis)
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

    const getUndsProposta = (id_proposta) => {
        clienteAxios.get(`/propostaunds/${id_proposta}`)
            .then(resposta => {
                setUndsProposta(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    useEffect(() => {
        getUndsProposta(id_proposta)
    }, [id_proposta])

    const addUndsProposta = (prop) => {
        console.log('add', prop)
        clienteAxios.post(`/propostaunidade`, { prop })
            .then(resposta => {
                getUndsProposta(id_proposta)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <>
            <Jumbotron
                fluid
                style={{ marginBottom: '10px', paddingBottom: '10px', paddingTop: '10px', borderRadius: '1%' }}
            >

                <Form noValidate style={{ margin: '10px' }}>

                    <Form.Group as={Row} className="gr">
                        <Form.Label size="sm" column sm={2} className="lab">Número : </Form.Label>
                    {/* Numero */}
                        <Col sm={2}>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="numero"
                                className="cont"
                                value={id_proposta}
                                readOnly
                            />
                        </Col>
                        
                    </Form.Group>

                    {/* Data */}
                    <Form.Group as={Row} className="gr">
                        <Form.Label size="sm" column sm={2} className="lab">Data : </Form.Label>
                        <Col sm={2}>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="data"
                                className="cont"
                                value={data}
                                readOnly
                            />
                        </Col>
                        <Col sm={3}></Col>


                    </Form.Group>


                    {/* Imobiliaria */}
                    <PropostaImobiliaria />


                    {/* Corretor */}
                    <PropostaCorretor />

                    {/* Proponente */}
                    <PropostaProponente />


                    {/* Interveniente */}
                    <PropostaInterveniente />


                    {/* Local da Captacao */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label column sm={2} className="lab">Local da Captação: </Form.Label>
                        <Col sm={7}>
                            <Form.Control as="select"
                                size="sm"
                                name="id_tabela"
                                className="cont"
                                value={idLocalCaptacao}
                                onChange={handleLocalCaptacao}
                            >
                                <option value={1}>PLANTÃO / LOJA DE VENDAS</option>
                                <option value={2}>SALÃO DO IMÓVEL</option>
                                <option value={3}>IMOBILIÁRIA</option>
                                <option value={4}>ON LINE</option>
                                <option value={5}>MÍDIA IMPRESSSA</option>
                                <option value={6} selected>MÍDIA TV</option>
                                <option value={7}>MÍDIA RÁDIO</option>
                                <option value={8}>MÍDIA OUTDOOR</option>
                                <option value={9}>INDICAÇÃO</option>
                                <option value={10}>PROSPECÇÃO CORRETOR</option>
                                <option value={11}>ACM</option>
                            </Form.Control>
                        </Col>

                    </Form.Group>

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
                                size="sm"
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
                    <Col sm={11} className="text-center">
                        <Button sm={2} className="btn col-2" onClick={() => salvarDados()}>Salvar</Button>
                    </Col>





                    {/* Observações
                    <Form.Group
                        as={Row}

                        className="gr"
                    >
                        <Form.Label column sm={2} className="lab">Observações : </Form.Label>
                        <Col sm={7}>
                            <Form.Control 
                                as="textarea" 
                                name="id_tabela" 
                                className="cont" 
                                style={{ height: '150px' }}
                                value={observacoes}
                                onChange={handleObservacoes}
                            >

                            </Form.Control>
                        </Col>

                    </Form.Group>
                        <Col sm={11} className="text-center">
                            <Button sm={2} className="btn col-2" onClick={() => salvarDados() }>Salvar</Button>
                        </Col> */}


                </Form>

            </Jumbotron>

            <Jumbotron style={{ minHeight: '200px', paddingLeft: 0, paddingTop: '10px' }}>
                <div className="d-flex " style={{ marginTop: '10px' }}>
                    <Col sm={2} className="lab gr text-left" style={{ marginLeft: 0 }}>Unidades: </Col>
                    <Col sm={9}>
                        <Table borderless size="sm" style={{ marginLeft: 0 }}>
                            <thead>
                                <tr>
                                    <th style={{ width: "40%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Bloco</th>
                                    <th style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Unidades</th>
                                    <th style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Garagens</th>
                                    <th style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Depósitos</th>
                                    <th>
                                        <div className="d-flex">
                                            <button
                                                style={{ border: 'none', backgroundColor: 'transparent', color: 'blue', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px" }}
                                                onClick={(event) => handleSelectUnidade(event)}
                                            ><FontAwesomeIcon icon={faPlus} /></button>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    undsProposta.map(und => (
                                        <tr>
                                            <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>{und.blocox}</td>
                                            <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>{und.unidadex}</td>
                                            <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>{und.garagensx}</td>
                                            <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>{und.depositosx}</td>
                                            <td >
                                                <div className="d-flex">
                                                    <button
                                                        style={{ border: 'none', backgroundColor: 'transparent', color: 'blue', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px" }}
                                                        onClick={() => delUndsProposta({ id_proposta: id_proposta, id_unidade: und.id_unidade })}
                                                    ><FontAwesomeIcon icon={faMinus} /></button>
                                                </div>
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
                    getUndsProposta={getUndsProposta} />
            }
        </>
    )
}

export default PropostaDados