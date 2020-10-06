import React, { useState, useEffect, useContext } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

import clienteAxios from '../../config/axios'

import './propo.css'

import { PropostaContext } from './Proposta'

const MostrarIntervenientes = ({ titulo, setExibirModalInterveniente, exibirModalInterveniente }) => {

    const { setIdInterveniente, setNomeInterveniente, nomeInterveniente } = useContext(PropostaContext)

    const [buscar, setBuscar] = useState('')
    const [intervenientes, setIntervenientes] = useState([])
    const [intervenientesFilter, setIntervenientesFilter] = useState([])

    useEffect(() => {
        setIntervenientesFilter(intervenientes)
    }, [intervenientes])

    const handleSelecionar = (imob) => {
        setIdInterveniente(imob.id_pessoa)
        setNomeInterveniente(imob.nome)
        setExibirModalInterveniente(false)
    }

    const classe = exibirModalInterveniente ? "left_sidebar left_sidebar-show" : "left_sidebar left_sidebar-hide"

    const imobs = intervenientesFilter ? intervenientesFilter : intervenientes

    const handleChange = event => {
        event.preventDefault()
        setBuscar(event.target.value)
    }

    useEffect(() => {
        if (exibirModalInterveniente) {
            getPessoas()
        } else {
            setIntervenientes([])
        }
    }, [exibirModalInterveniente])

    const getPessoas = () => {
        clienteAxios.get(`/pessoas`)
            .then(resposta => {
                setIntervenientes(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onBuscar = aa => {

        setBuscar(aa.toUpperCase())

        const busca = new Promise((resolve, reject) => {

            resolve(
                intervenientes.filter((imob) => {
                    const pp = imob.nome
                    if (pp) {
                        return pp.toUpperCase().search(
                            aa.toUpperCase()) !== -1
                    }
                })
            )
        }

        )

        busca
            .then(res => {
                setIntervenientesFilter(res)
            }
            )
    }

    return (
        <div className={classe}>
            <h4>{titulo}</h4>
            <div className="mostrar-div1">


                <Form.Group
                    as={Row}
                    className="gr"
                >
                    <Form.Label column sm={1} className="lab">Procurar : </Form.Label>
                    <Col sm={8}>
                        <Form.Control
                            type="text"
                            placeholder="Digite o nome a ser procurado"
                            name="buscar"
                            className="cont"
                            value={buscar}
                            onChange={e => {
                                onBuscar(e.target.value)
                            }}
                        />
                    </Col>
                </Form.Group>
            </div>

            <div className="mostrar-list">
                {imobs.map(
                    imob => <div className="linha" onClick={() => handleSelecionar(imob)}>{imob.nome}</div>
                )}
            </div>
            <div className="text-right">
                <Button sm={2} className="btn col-2" onClick={() => setExibirModalInterveniente(false)}>Fechar</Button>
            </div>

        </div>

    )
}

export default MostrarIntervenientes