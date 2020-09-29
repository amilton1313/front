import React, { useState, useEffect, useContext } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

import clienteAxios from '../../config/axios'

import { PropostaContext } from './Proposta'

import './propo.css'

const MostrarCorretores = ({ titulo,
    setExibirModalCorretor, exibirModalCorretor }) => {

    const { setIdCorretor, setNomeCorretor, nomeCorretor } = useContext(PropostaContext)

    const [buscar, setBuscar] = useState('')
    const [corretores, setCorretores] = useState([])
    const [corretoresFilter, setCorretoresFilter] = useState([])

    useEffect(() => {
        setCorretoresFilter(corretores)
    }, [corretores])

    const handleSelecionar = (imob) => {
        setIdCorretor(imob.id_pessoa)
        setNomeCorretor(imob.nome)
        setExibirModalCorretor(false)
    }

    useEffect(() => {
        if (exibirModalCorretor) {
            getPessoas()
        } else {
            setCorretores([])
        }
    }, [exibirModalCorretor])

    const getPessoas = () => {
        clienteAxios.get(`/pessoas`)
            .then(resposta => {
                setCorretores(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const classe = exibirModalCorretor ? "left_sidebar left_sidebar-show" : "left_sidebar left_sidebar-hide"

    const imobs = corretoresFilter ? corretoresFilter : corretores

    const handleChange = event => {
        event.preventDefault()
        setBuscar(event.target.value)
    }

    const onBuscar = aa => {

        setBuscar(aa.toUpperCase())

        const busca = new Promise((resolve, reject) => {

            resolve(
                corretores.filter((imob) => {
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
                setCorretoresFilter(res)
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
                <Button sm={2} className="btn col-2" onClick={() => setExibirModalCorretor(false)}>Fechar</Button>

            </div>

        </div>

    )
}

export default MostrarCorretores