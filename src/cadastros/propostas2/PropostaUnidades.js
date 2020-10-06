import React, { useState, useEffect, useContext } from 'react'
import clienteAxios from '../../config/axios'
import { useDispatch } from 'react-redux'
import { Table, Col, Jumbotron } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import './propo.css'

import MostrarUndsDisponiveis from './MostrarUndsDisponiveis'

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

            <div className="d-flex fx-lateral" >
                <div className="fx-lateral-txt" ><span style={{ marginLeft: '10px' }}>Unidades</span></div>
                <div style={{ flex: 7 }} >

                    <Jumbotron
                        fluid
                        style={{ marginBottom: '10px', paddingBottom: '10px', paddingTop: '10px' }}
                    >
                        <div className="d-flex " style={{ marginTop: '10px' }}>
                            <Col sm={10}>
                                <Table borderless size="sm" style={{ marginLeft: 0 }}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: "40%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Bloco</th>
                                            <th style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Unidades</th>
                                            <th style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Garagens</th>
                                            <th style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Depósitos</th>
                                            <th>
                                                <div className="d-flex">
                                                    <span
                                                        className="botao-minus"
                                                        onClick={(event) => handleSelectUnidade(event)}
                                                    ><FontAwesomeIcon icon={faPlus} /></span>
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
                                                            <span
                                                                className="botao-minus"
                                                                onClick={() => delUndsProposta({ id_proposta: id_proposta, id_unidade: und.id_unidade })}
                                                            ><FontAwesomeIcon icon={faMinus} /></span>
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
                </div>
            </div>

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