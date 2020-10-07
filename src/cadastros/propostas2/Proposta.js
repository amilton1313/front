import React, { useState, useEffect, createContext } from 'react'
import { Navbar, NavDropdown, Tab, Row, Col, Nav } from 'react-bootstrap'
import clienteAxios from '../../config/axios'
import { Link } from 'react-router-dom'

import './propo.css'

import PropostaDados from './PropostaDados'
import PropostaUnidades from './PropostaUnidades'
import PropostaObservacoes from './PropostaObservacoes'
import PropostaValores from './PropostaValores'
import PropostaNavegacao from './PropostaNavegacao'

export const PropostaContext = createContext()

const Proposta = () => {

    const [pessoas, setPessoas] = useState([])

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
    const [idTabelaVendas, setIdTabelaVendas] = useState(null)
    const [tabelasVendas, setTabelasVendas] = useState([])
    const [unidsDisponiveis, setUnidsDisponiveis] = useState([])

    const [parcelas, setParcelas] = useState([])

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
        if (id_proposta) {
            getProposta(id_proposta)
            // getParcelas(id_proposta)
        }
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
                idTabelaVendas, setIdTabelaVendas, tabelasVendas, setTabelasVendas,
                parcelas, setParcelas
            }}>
                <div style={{ backgroundColor: 'grey' }}>
                    <PropostaNavegacao />
                    <div className="conteudo">
                        <PropostaDados />
                        <PropostaUnidades />
                        <PropostaValores />
                    </div>
                    <div>
                    <Link to={"/pessoanew"}  className="btn btn-primary" >
                                Pessoa
                            </Link>
                    </div>
                </div>
            </PropostaContext.Provider>
        </>
    )
}

export default Proposta