import React, { useState, useEffect, useContext } from 'react'
import { InputGroup, FormControl, Form, Row, Col, Button, Jumbotron, Table } from 'react-bootstrap'
import clienteAxios from '../../config/axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMinus, faPlus, faStepForward, faStepBackward, faFastForward, faFastBackward } from '@fortawesome/free-solid-svg-icons'
import './propo.css'

import { PropostaContext } from './Proposta'

const PropostaNavegacao = () => {

    const [edNumero, setEdNumero] = useState('')

    const { getProposta, id_proposta, setId_proposta } = useContext(PropostaContext)

    const handleEdNumero = event => {
        setEdNumero(event.target.value)
    }

    const onBuscarProposta = () => {
        getProposta(edNumero)
        setEdNumero('')
    }

    const firstProposta = (e) => {
        console.log('entrou no first')
        e.preventDefault()
        clienteAxios.get(`/firstindice/propostas/id_proposta`)
            .then(resposta => {
                const { min } = resposta.data[0]
                setId_proposta(min)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const prevProposta = (e) => {
        e.preventDefault()
        clienteAxios.get(`/previndice/propostas/id_proposta/${id_proposta}`)
            .then(resposta => {
                const { id_proposta } = resposta.data[0]
                setId_proposta(id_proposta)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const nextProposta = (e) => {
        e.preventDefault()
        clienteAxios.get(`/nextindice/propostas/id_proposta/${id_proposta}`)
            .then(resposta => {
                const { id_proposta } = resposta.data[0]
                setId_proposta(id_proposta)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const lastProposta = (e) => {
        e.preventDefault()
        clienteAxios.get(`/lastindice/propostas/id_proposta`)
            .then(resposta => {
                const { max } = resposta.data[0]
                setId_proposta(max)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
        <div className="d-flex">
            <div>

                <button
                    style={{ border: 'none', backgroundColor: 'transparent', color: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px" }}  
                    onClick={(e) => firstProposta(e)}
                ><FontAwesomeIcon icon={faFastBackward} /></button>

                <button
                    style={{ border: 'none', backgroundColor: 'transparent', color: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px" }}                   
                    onClick={(e) => prevProposta(e)}
                ><FontAwesomeIcon icon={faStepBackward} /></button>

                <button
                     style={{ border: 'none', backgroundColor: 'transparent', color: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px" }}                                       
                     onClick={(e) => nextProposta(e)}
                ><FontAwesomeIcon icon={faStepForward} /></button>

                <button
                    style={{ border: 'none', backgroundColor: 'transparent', color: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px" }}
                    onClick={(e) => lastProposta(e)}
                ><FontAwesomeIcon icon={faFastForward} /></button>
            


                                    </div>
                                    <div style={{marginLeft: '30px'}}>
                            <InputGroup className="mb-2">
                                <FormControl 
                                    size="sm"
                                    id="inlineFormInputGroup" 
                                    placeholder="Digite o número da proposta"
                                    value={edNumero}
                                    onChange={handleEdNumero}
                                    />
                                <InputGroup.Prepend>
                                    <InputGroup.Text 
                                    style={{borderTopRightRadius: '10%', borderBottomRightRadius: '10%', marginLeft: 0}}
                                    onClick={() => onBuscarProposta()}><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>

                                    </div>
                                    </div>

        </>
    );
}

export default PropostaNavegacao;