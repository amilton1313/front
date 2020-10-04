import React, { useState, useEffect, createContext } from 'react'
import { Form, Button, FormControl, Navbar, NavDropdown, Tab, Row, Col, Nav } from 'react-bootstrap'
import clienteAxios from '../../config/axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMinus, faPlus, faStepForward, faStepBackward, faFastForward, faFastBackward } from '@fortawesome/free-solid-svg-icons'
import './propo.css'

import PropostaDados from './PropostaDados'
import PropostaObservacoes from './PropostaObservacoes'
import PropostaValores from './PropostaValores'
import PropostaNavegacao from './PropostaNavegacao'

export const PropostaContext = createContext()

const Proposta = () => {

    const [pessoas, setPessoas] = useState([])
    // const [imobiliarias, setImobiliarias] = useState([])

    const [proposta, SetProposta] = useState({})
    const [id_proposta, setId_proposta] = useState(1545)
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
    // const [empreendimentos, setEmpreendimentos] = useState([])
    const [idTabelaVendas, setIdTabelaVendas] = useState(null)
    const [tabelasVendas, setTabelasVendas] = useState([])
    const [unidsDisponiveis, setUnidsDisponiveis] = useState([])

    const getProposta = (id) => {
        clienteAxios.get(`/proposta/${id}`)
            .then(resposta => {
                if (resposta.data[0]) {
                    SetProposta(resposta.data[0])
                } else {
                    SetProposta({})
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getTabelasVendas = (idEmpreendimento) => {
        clienteAxios.get(`/tabelasvendas/${idEmpreendimento}`)
            .then(resposta => {
                setTabelasVendas(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getUndsDisponiveis = (idEmpreendimento) => {
        clienteAxios.get(`/unidsdisponiveis/${idEmpreendimento}`)
            .then(resposta => {
                setUnidsDisponiveis(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (id_proposta) { getProposta(id_proposta) }
    }, [id_proposta])

    useEffect(() => {
        getTabelasVendas(idEmpreendimento)
        getUndsDisponiveis(idEmpreendimento)
    }, [idEmpreendimento])

    useEffect(() => {
        setId_proposta(proposta.id_proposta)
        setData(proposta.data)
        setIdImobiliaria(proposta.id_imobiliaria)
        setNomeImobiliaria(proposta.nomeimobiliaria)
        setIdCorretor(proposta.id_corretor)
        setNomeCorretor(proposta.nomecorretor)
        setIdProponente(proposta.id_proponente)
        setNomeProponente(proposta.nomeproponente)
        setIdInterveniente(proposta.id_interveniente)
        setNomeInterveniente(proposta.nomeinterveniente)
        setIdLocalCaptacao(proposta.id_localcaptacao)
        setObservacoes(proposta.observacoes)

        setIdEmpreendimento(proposta.id_empreendimento)
        setNomeEmpreendimento(proposta.nomeempreendimento)
        setIdTabelaVendas(proposta.id_tabela_vendas)
    }, [proposta])

    return (
        <>
            <PropostaContext.Provider value={{
                proposta,
                SetProposta,

                id_proposta, setId_proposta, getProposta,
                data, setData,
                idImobiliaria, setIdImobiliaria, nomeImobiliaria, setNomeImobiliaria,
                idCorretor, setIdCorretor, nomeCorretor, setNomeCorretor,
                idProponente, setIdProponente, nomeProponente, setNomeProponente,
                idInterveniente, setIdInterveniente, nomeInterveniente, setNomeInterveniente,
                idLocalCaptacao, setIdLocalCaptacao, nomeLocalCaptacao, setNomeLocalCaptacao,
                observacoes, setObservacoes,

                idEmpreendimento, setIdEmpreendimento, nomeEmpreendimento, setNomeEmpreendimento,
                idTabelaVendas, setIdTabelaVendas, tabelasVendas, setTabelasVendas
            }}>

                <div style={{ backgroundColor: 'steelblue', height: '60px' }}>
                    <Navbar collapseOnSelect expand="lg" bg="steelblue" variant="dark" >
                        <Navbar.Brand href="#home">Cadastro da Proposta</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#features">Consultas</Nav.Link>
                                <Nav.Link href="#pricing">Proponente</Nav.Link>
                                <NavDropdown title="Propostas" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Nova Proposta</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">aaaaaaa</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">bbbbbbb</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Outro assunto</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">
                                    <PropostaNavegacao />
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">

                                    {/* <Form inline>
                                        <FormControl size="sm" type="text" placeholder="Digite o núm. da proposta" className="mr-sm-2" />
                                        <button className="btn btn-success" size="sm" variant="outline-success">Procurar</button>
                                    </Form> */}

                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                </div>

                <div style={{ marginTop: '5px' }}>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="dados">
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="dados">Dados</Nav.Link>
                                    </Nav.Item>
                                    {
                                        proposta.id_proposta
                                            ?
                                            <div>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="valores">Valores</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="observacoes">Observações</Nav.Link>
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
                                    <Tab.Pane eventKey="valores">
                                        <PropostaValores />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="observacoes">
                                        <PropostaObservacoes />
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