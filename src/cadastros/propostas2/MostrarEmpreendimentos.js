import React, { useState, useEffect, useContext } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

import clienteAxios from '../../config/axios'

import { PropostaContext } from './Proposta'

import './propo.css'

const MostrarEmpreendimentos = ({ titulo, setExibirModalEmpreendimento, exibirModalEmpreendimento }) => {

    const { setIdEmpreendimento, setNomeEmpreendimento } = useContext(PropostaContext)
    
    const [buscar, setBuscar] = useState('')
    const [empreendimentos, setEmpreendimentos] = useState([])
    const [empreendimentosFilter, setEmpreendimentosFilter] = useState([])

    useEffect(() => {
        setEmpreendimentosFilter(empreendimentos)
    }, [])

    const handleSelecionar = (imob) => {
        setIdEmpreendimento(imob.id_empreendimento)
        setNomeEmpreendimento(imob.nome)
        setExibirModalEmpreendimento(false)
    }

    useEffect(() => {
        if (exibirModalEmpreendimento) {
            getEmpreendimentos()
        } else {
            setEmpreendimentos([])
        }
    }, [exibirModalEmpreendimento])

    const getEmpreendimentos = () => {
        clienteAxios.get(`/empreendimentos`)
            .then(resposta => {
                setEmpreendimentos(resposta.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const classe = exibirModalEmpreendimento ? "left_sidebar left_sidebar-show" : "left_sidebar left_sidebar-hide"

    const imobs = empreendimentosFilter.length > 0 ? empreendimentosFilter : empreendimentos

    const handleChange = event => {
        event.preventDefault()
        setBuscar(event.target.value)
    }

    const onBuscar = aa => {

        setBuscar(aa.toUpperCase())

        const busca = new Promise((resolve, reject) => {

            resolve(
                empreendimentos.filter((imob) => {
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
                setEmpreendimentosFilter(res)
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
                imob => <div className="linha"  onClick={() => handleSelecionar(imob)}>{imob.nome}</div>
                )}
            </div>
            <div className="text-right">
            <Button sm={2} className="btn col-2" onClick={() => setExibirModalEmpreendimento(false)}>Fechar</Button>

            </div>

        </div>

    )
}

export default MostrarEmpreendimentos