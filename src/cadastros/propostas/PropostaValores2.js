import React, { useState, useEffect, useContext } from 'react'
import clienteAxios from '../../config/axios'
import { Jumbotron, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import './propo.css'

import { PropostaContext } from './Proposta'

import ModelPropostaParcela from './models/ModelPropostaParcela'

const PropostaValores2 = ({ getParcelas, parcela, setParcela }) => {

    const { id_proposta, parcelas, setParcelas } = useContext(PropostaContext)

    const [tipo, setTipo] = useState(1)
    const [valor, setValor] = useState(null)
    const [moParcela, setMoParcela] = useState({})



    const delParcela = (id_parcela) => {
        clienteAxios.delete(`/propostaproposto/${id_parcela}`)
            .then(resposta => {
                getParcelas(id_proposta)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (id_proposta) { 
            getParcelas(id_proposta)
        }
    }, [id_proposta])

    const handleSelecionar = (item) => {
        setParcela(new ModelPropostaParcela(
            item.id_parcela, item.id_proposta, item.id_tipo, item.inicio, item.valor, 
            item.qtde, item.vcto_primeira, item.reforco_tipo, item.valorsem))
    }


    return (
        <>
            <Jumbotron style={{ minHeight: '200px', paddingLeft: 0, paddingTop: '10px' }}>
            <Table borderless size="sm">
                <thead>
                    <tr>
                        <th style={{ width: "20%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white", paddingLeft: '10px' }}>Tipo</th>
                        <th style={{ width: "16%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Valor</th>
                        <th style={{ width: "16%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Vencimento</th>
                        <th style={{ width: "16%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Quantidade</th>
                        <th style={{ width: "16%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Periodicidade</th>
                        <th style={{ width: "16%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Total</th>
                        <th><span
                            style={{ backgroundColor: '#0069D9', color: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px" }}
                            onClick={(event) => {}}
                        ><FontAwesomeIcon icon={faPlus} /></span></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parcelas.map(item => (
                            <tr onClick={() => handleSelecionar(item)}>
                                <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white", paddingLeft: '10px' }}>{item.descricaotipo}</td>
                                <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>{item.valor}</td>
                                <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>{item.vcto_primeira}</td>
                                <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>{item.qtde}</td>
                                <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>{item.descricaoreforco}</td>
                                <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>{item.total}</td>
                                <td >
                                    <span
                                        style={{ backgroundColor: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px" }}
                                            onClick={() => delParcela(item.id_parcela)}
                                        ><FontAwesomeIcon icon={faMinus} /></span>

                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </Table>
            </Jumbotron>

        </>
    );
}

export default PropostaValores2;