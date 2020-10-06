import React, { useState, useEffect, useContext, createContext } from 'react'
import { Jumbotron } from 'react-bootstrap'
import clienteAxios from '../../config/axios'
import { PropostaContext } from './Proposta'
import './propo.css'
import PropostaValoresLista from './PropostaValoresLista'
import PropostaValoresModal from './PropostaValoresModal'

export const PropostaValoresContext = createContext()

const PropostaValores = () => {

    const [idParcela, setIdParcela] = useState(null)
    const [idProposta, setIdProposta] = useState(null)
    const [id_tipo, setIdTipo] = useState(1)
    const [inicio, setInicio] = useState(0)
    const [valor, setValor] = useState(null)
    const [vcto_primeira, setVctoPrimeira] = useState(null)
    const [qtde, setQtde] = useState(null)
    const [reforco_tipo, setReforcoTipo] = useState(null)
    const [total, setTotal] = useState(null)
    const [novaProposta, setNovaProposta] = useState(false)
    const [mostrarModal, setMostrarModal] = useState(false)

    const { id_proposta, parcelas, setParcelas } = useContext(PropostaContext)

    const [parcela, setParcela] = useState({})

    const getParcelas = (id_proposta) => {
        clienteAxios.get(`/propostaparcelas/${id_proposta}`)
            .then(resposta => {
                setParcelas(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const addParcela = (id_proposta) => {
        const parc = {
            inicio, qtde, valor, id_proposta, id_tipo, valorsem: null,
            vcto_primeira, reforco_tipo
        }
        console.log('parc', parc)
        clienteAxios.post(`/propostaproposto`, parc)
            .then(resposta => {
                getParcelas(id_proposta)
                setMostrarModal(false)
                setNovaProposta(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const updParcela = (id_parcela) => {
        clienteAxios.put(`/propostaproposto/${id_parcela}`, {
            inicio, qtde, valor, id_proposta, id_tipo,
            vcto_primeira, reforco_tipo
        })
            .then(resposta => {
                getParcelas(id_proposta)
                setMostrarModal(false)
                setNovaProposta(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const delParcela = (id_parcela) => {
        clienteAxios.delete(`/propostaproposto/${id_parcela}`)
            .then(resposta => {
                getParcelas(id_proposta)
                setNovaProposta(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <PropostaValoresContext.Provider value={{
                getParcelas, addParcela, updParcela, delParcela,
                parcela, setParcela,
                idParcela, setIdParcela, idProposta, setIdProposta,
                id_tipo, setIdTipo, inicio, setInicio, valor, setValor,
                vcto_primeira, setVctoPrimeira, qtde, setQtde,
                reforco_tipo, setReforcoTipo, total, setTotal,
                novaProposta, setNovaProposta,
                mostrarModal, setMostrarModal
            }}>
                <div className="d-flex fx-lateral" >
                <div className="fx-lateral-txt" >
                    <span style={{marginLeft: '10px'}}>Valores</span>
                    <br />
                    <span style={{marginLeft: '10px'}}>Propostos</span>
                    </div>
                    <div style={{ flex: 7 }} >
                        <Jumbotron
                            fluid
                            style={{ marginBottom: '10px', paddingTop: '10px' }}
                        >
                            <PropostaValoresModal />
                            <PropostaValoresLista />

                        </Jumbotron>
                    </div>
                </div>

            </PropostaValoresContext.Provider>
        </>
    );
}

export default PropostaValores;