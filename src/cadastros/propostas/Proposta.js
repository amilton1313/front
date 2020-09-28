import React, { useState, useEffect, createContext } from 'react'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import clienteAxios from '../../config/axios'

import PropostaDados from './PropostaDados'
import PropostaUnidades from './PropostaUnidades'
import PropostaValores from './PropostaValores'

export const PropostaContext = createContext()

const Proposta = () => {

    const [pessoas, setPessoas] = useState([])
    const [imobiliarias, setImobiliarias] = useState([])

    const [proposta, SetProposta] = useState({})
    const [id_proposta, setId_proposta] = useState(null)
    const [data, setData] = useState(null)
    const [idImobiliaria, setIdImobiliaria] = useState(null)
    const [nomeImobiliaria, setNomeImobiliaria] = useState('')
    const [idCorretor, setIdCorretor] = useState(null)
    const [nomeCorretor, setNomeCorretor] = useState('')
    const [idProponente, setIdProponente] = useState(null)
    const [nomeProponente, setNomeProponente] = useState('')
    const [idInterveniente, setIdInterveniente] = useState(null)
    const [nomeInterveniente, setNomeInterveniente] = useState('')
    const [idLocalCaptacao, setIdLocalCaptacao] = useState(null)
    const [nomeLocalCaptacao, setNomeLocalCaptacao] = useState('')
    const [observacoes, setObservacoes] = useState('')

    const [idEmpreendimento, setIdEmpreendimento] = useState(null)
    const [nomeEmpreendimento, setNomeEmpreendimento] = useState('')
    const [empreendimentos, setEmpreendimentos] = useState([])

    const getProposta = (id) => {
        clienteAxios.get(`/proposta/${id}`)
            .then(resposta => {
                SetProposta(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }



    const getPessoas = () => {
        // setPessoas([])
        clienteAxios.get(`/pessoas`)
            .then(resposta => {
                setPessoas(resposta.data)
                setImobiliarias(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getEmpreendimentos = () => {
        clienteAxios.get(`/empreendimentos`)
            .then(resposta => {
                setEmpreendimentos(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getProposta(1545)
        getPessoas()
        getEmpreendimentos()
    }, [])

    
    // useEffect(() => {
        //     const id=idEmpreendimento
        //     const no=getNome(id)
        //     setNomeEmpreendimento(no)
        // }, [idEmpreendimento])
        
        useEffect(() => {
            setId_proposta(proposta.id)
            setData(proposta.data)
            setIdImobiliaria(proposta.id_imobiliaria)
            setIdCorretor(proposta.id_corretor)
            setIdProponente(proposta.id_proponente)
            setIdInterveniente(proposta.id_interveniente)
            setIdLocalCaptacao(proposta.id_localcaptacao)
            setObservacoes(proposta.observacoes)
        }, [pessoas])
        
    const getNome = (id) => {
        if (id === null) return ''
        const pessoa = pessoas.filter(pes => pes.id_pessoa === id)
        const nom = pessoa[0] ? pessoa[0] : {}
        return nom.nome
    }

    return (
        <>
            <PropostaContext.Provider value={{
                proposta,
                SetProposta,

                pessoas,
                imobiliarias,
                getPessoas,

                id_proposta, setId_proposta,
                data, setData,
                idImobiliaria, setIdImobiliaria, nomeImobiliaria, setNomeImobiliaria,
                idCorretor, setIdCorretor, nomeCorretor, setNomeCorretor,
                idProponente, setIdProponente, nomeProponente, setNomeProponente,
                idInterveniente, setIdInterveniente, nomeInterveniente, setNomeInterveniente,
                idLocalCaptacao, setIdLocalCaptacao, nomeLocalCaptacao, setNomeLocalCaptacao,
                observacoes, setObservacoes,

                empreendimentos, idEmpreendimento, setIdEmpreendimento, nomeEmpreendimento, setNomeEmpreendimento
            }}>
                <h3>Cadastro da Proposta</h3>
                <div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="dados">
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="dados">Dados</Nav.Link>
                                    </Nav.Item>
                                    {
                                        proposta.id
                                            ?
                                            <div>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="unidades">Unidades</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="valores">Valores</Nav.Link>
                                                </Nav.Item>
                                            </div>
                                            : null
                                    }


                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="dados">
                                        <PropostaDados />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="unidades">
                                        <PropostaUnidades />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="valores">
                                        <PropostaValores />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </PropostaContext.Provider>
        </>
    )
}

export default Proposta