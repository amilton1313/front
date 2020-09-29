import React, { useState, useEffect, useContext } from 'react'
import clienteAxios from '../../config/axios'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Row, Col, Button, Jumbotron } from 'react-bootstrap'
import './propo.css'

import PropostaImobiliaria from './PropostaImobiliaria'
import PropostaCorretor from './PropostaCorretor'
import PropostaProponente from './PropostaProponente'
import PropostaInterveniente from './PropostaInterveniente'

import { ac_getPropostaById } from '../../actions/ac_proposta'
import { ac_getPessoaIdNome } from '../../actions/ac_pessoa'


import { PropostaContext } from './Proposta'

const PropostaDados = () => {

    const { id_proposta, setId_proposta, data, setData,
        idImobiliaria, setIdImobiliaria, nomeImobiliaria, setNomeImobiliaria,
        idCorretor, setIdCorretor, nomeCorretor, setNomeCorretor,
        idProponente, setIdProponente, nomeProponente, setNomeProponente,
        idInterveniente, setIdInterveniente, nomeInterveniente, setNomeInterveniente,
        idLocalCaptacao, setIdLocalCaptacao, nomeLocalCaptacao, setNomeLocalCaptacao,
        observacoes, setObservacoes
    } = useContext(PropostaContext)

    const dispatch = useDispatch()

    const unidades = [
        { id_unidade: 34, blocox: 'Aurora', numero: '404', garagensx: '25 e 36', depositosx: '65 e 21' },
        { id_unidade: 35, blocox: 'Aurora', numero: '502', garagensx: '25 e 40', depositosx: '70 e 75' },
    ]

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
        console.log('salvando dados...', prop)

        clienteAxios.put(`/proposta/${1545}`, prop)
            .then(resposta => {
                // setEmpreendimentos(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Jumbotron
                fluid
                style={{ paddingTop: '10px', borderRadius: '1%' }}
            >

                <Form noValidate style={{ margin: '10px' }}>


                    {/* Numero */}
                    <Form.Group as={Row} className="gr">
                        <Form.Label column sm={2} className="lab">Número : </Form.Label>
                        <Col sm={2}>
                            <Form.Control
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
                        <Form.Label column sm={2} className="lab">Data : </Form.Label>
                        <Col sm={2}>
                            <Form.Control
                                type="text"
                                name="data"
                                className="cont"
                                value={data}
                                readOnly
                            />
                        </Col>

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
                        <Form.Label column sm={2} className="lab">Local da Captação : </Form.Label>
                        <Col sm={7}>
                            <Form.Control as="select" 
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

                    {/* Observações */}
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
                        </Col>


                </Form>

            </Jumbotron>
        </>
    )
}

export default PropostaDados