import React, { useState, useEffect, useContext } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

import clienteAxios from '../../config/axios'

import { PropostaContext } from './Proposta'

import './propo.css'

const MostrarUndsDisponiveis = ({ titulo, exibirModalUndsDisponiveis, setExibirModalUndsDisponiveis }) => {

    const { idEmpreendimento } = useContext(PropostaContext)

    console.log('idEmpreendimento ', idEmpreendimento)

    const [buscar, setBuscar] = useState('')
    const [undsDisponiveis, setUndsDisponiveis] = useState([])
    const [undsDisponiveisFilter, setUndsDisponiveisFilter] = useState([])

    useEffect(() => {
        setUndsDisponiveisFilter(undsDisponiveis)
    }, [undsDisponiveis])

    const handleSelecionar = (imob) => {
        // setIdImobiliaria(imob.id_pessoa)
        // setNomeImobiliaria(imob.nome)
        setExibirModalUndsDisponiveis(false)
    }

    useEffect(() => {
        if (exibirModalUndsDisponiveis) {
            getUndsDisponiveis(idEmpreendimento)
        } else {
            setUndsDisponiveis([])
        }
    }, [exibirModalUndsDisponiveis])

    const getPessoas = () => {
        clienteAxios.get(`/pessoas`)
            .then(resposta => {
                setUndsDisponiveis(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getUndsDisponiveis = (idEmpreendimento) => {
        clienteAxios.get(`/unidsdisponiveis/${idEmpreendimento}`)
            .then(resposta => {
                console.log('undsccc ')
                setUndsDisponiveis(resposta.data)
                console.log('unds ', undsDisponiveis)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const classe = exibirModalUndsDisponiveis ? "left_sidebar left_sidebar-show" : "left_sidebar left_sidebar-hide"

    const imobs = undsDisponiveisFilter ? undsDisponiveisFilter : undsDisponiveis

    const handleChange = event => {
        event.preventDefault()
        setBuscar(event.target.value)
    }

    const onBuscar = aa => {

        setBuscar(aa.toUpperCase())

        const busca = new Promise((resolve, reject) => {

            resolve(
                undsDisponiveis.filter((imob) => {
                    const pp = imob.numero
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
                setUndsDisponiveisFilter(res)
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
                    imob => <div className="linha" onClick={() => handleSelecionar(imob)}>{imob.numero}</div>
                )}

            </div>
            <div className="text-right">
                <Button sm={2} className="btn col-2" onClick={() => setExibirModalUndsDisponiveis(false)}>Fechar</Button>

            </div>

        </div>

    )
}

export default MostrarUndsDisponiveis