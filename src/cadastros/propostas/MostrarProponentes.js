import React, { useState, useEffect, useContext } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

import clienteAxios from '../../config/axios'

import './propo.css'

import { PropostaContext } from './Proposta'

const MostrarProponentes = ({ titulo, setExibirModalProponente, exibirModalProponente }) => {

    const { setIdProponente, setNomeProponente, nomeProponente } = useContext(PropostaContext)

    const [buscar, setBuscar] = useState('')
    const [proponentes, setProponentes] = useState([])
    const [proponentesFilter, setProponentesFilter] = useState([])

    useEffect(() => {
        setProponentesFilter(proponentes)
    }, [proponentes])

    const handleSelecionar = (imob) => {
        setIdProponente(imob.id_pessoa)
        setNomeProponente(imob.nome)
        setExibirModalProponente(false)
    }

    useEffect(() => {
        if (exibirModalProponente) {
            getPessoas()
        } else {
            setProponentes([])
        }
    }, [exibirModalProponente])

    const getPessoas = () => {
        clienteAxios.get(`/pessoas`)
            .then(resposta => {
                setProponentes(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const classe = exibirModalProponente ? "left_sidebar left_sidebar-show" : "left_sidebar left_sidebar-hide"

    const imobs = proponentesFilter ? proponentesFilter : proponentes

    const handleChange = event => {
        event.preventDefault()
        setBuscar(event.target.value)
    }

    const onBuscar = aa => {

        setBuscar(aa.toUpperCase())

        const busca = new Promise((resolve, reject) => {

            resolve(
                proponentes.filter((imob) => {
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
                setProponentesFilter(res)
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
                <Button sm={2} className="btn col-2" onClick={() => setExibirModalProponente(false)}>Fechar</Button>

            </div>

        </div>

    )
}

export default MostrarProponentes