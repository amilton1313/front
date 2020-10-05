import React, { useState, useEffect, useContext } from 'react'
import { Form, Row, Col, Button, Jumbotron, Table } from 'react-bootstrap'
import clienteAxios from '../../config/axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { PropostaContext } from './Proposta'
import './propo.css'
import PropostaValores1 from './PropostaValores1'
import PropostaValores2 from './PropostaValores2'

const PropostaValores = () => {

    const { id_proposta, parcelas, setParcelas } = useContext(PropostaContext)

    const [tipo, setTipo] = useState(1)
    const [valor, setValor] = useState(null)
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

    return (
        <>

        <div>
            <div>
        <PropostaValores1 getParcelas={getParcelas} parcela={parcela} setParcela={setParcela}/>
            </div>
            <div>
        <PropostaValores2 getParcelas={getParcelas} parcela={parcela} setParcela={setParcela}/>
            </div>

        </div>


        </>
    );
}

export default PropostaValores;