import React, { useState, useEffect, useContext, useRef } from 'react'
import clienteAxios from '../../config/axios'
import { useDispatch, useSelector } from 'react-redux'
import { InputGroup, FormControl, Table, Form, Row, Col, Button, Jumbotron } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMinus, faPlus, faStepForward, faStepBackward, faFastForward, faFastBackward } from '@fortawesome/free-solid-svg-icons'
import './propo.css'

import PessoaDados from './PessoaDados'
import PessoaComplemento from './PessoaComplemento'



const Pessoa = () => {

    const [tipo_pessoa, setTipoPessoa] = useState(2)

    useEffect(() => {
        document.getElementById('tipoPessoa1').checked=tipo_pessoa === 1
        document.getElementById('tipoPessoa2').checked=tipo_pessoa === 2
    }, [])


    return (
        <>
            <div className="d-flex fx-lateral" style={{ marginTop: '50px' }}>
                <div className="fx-lateral-txt" ><span style={{ marginLeft: '10px' }}>Dados</span></div>
                <div style={{ flex: 7 }} >


                    <Jumbotron
                        fluid
                        style={{ marginBottom: 0, paddingBottom: 0, paddingTop: '10px' }}
                    >

                        <Form>

                            {/* Tipo de Pessoa */}
                            <fieldset>
                                <Form.Group as={Row}>
                                    <Form.Label size="sm" column sm={2} className="lab" style={{marginLeft: '15px'}}>Tipo de Pessoa : </Form.Label>
                                    <Col sm={6}>
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Física"
                                            name="tipoPessoa"
                                            id="tipoPessoa1"
                                            onChange={e => setTipoPessoa(e.target.value)}
                                            value={1}
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Jurídica"
                                            name="tipoPessoa"
                                            id="tipoPessoa2"
                                            onChange={e => setTipoPessoa(e.target.value)}
                                            value={2}
                                        />

                                    </Col>
                                </Form.Group>
                            </fieldset>
                            <PessoaDados />
                            <PessoaComplemento />

                        </Form>
                    </Jumbotron>
                </div>
            </div>




        </>
    )
}


export default Pessoa