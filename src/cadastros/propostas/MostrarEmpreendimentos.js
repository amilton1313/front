import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import ReactList from 'react-list'

import empreendimentos from './lista-de-empreendimentos'
import './propo.css'

const MostrarEmpreendimentos = ({ titulo, setIdEmpreendimento, setNomeEmpreendimento,
    setExibirModalEmpreendimento, exibirModalEmpreendimento }) => {

    const [buscar, setBuscar] = useState('')
    const [empreendimentosFilter, setEmpreendimentosFilter] = useState([])

    useEffect(() => {
        setEmpreendimentosFilter(empreendimentos)
    }, [])

    const handleSelecionar = (imob) => {
        setIdEmpreendimento(imob.id)
        setNomeEmpreendimento(imob.nome)
        setExibirModalEmpreendimento(false)
    }

    const classe = exibirModalEmpreendimento ? "left_sidebar left_sidebar-show" : "left_sidebar left_sidebar-hide"

    const imobs = empreendimentosFilter ? empreendimentosFilter : empreendimentos
    const renderItem = () => imobs.map(
            imob => <div className="linha"  onClick={() => handleSelecionar(imob)}>{imob.nome}</div>
            )

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

    console.log('Empreendimentos chegou',classe, {exibirModalEmpreendimento})

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
                <ReactList
                    itemRenderer={renderItem}
                    length={imobs.length}
                    type='uniform'
                />
            </div>
            <div className="text-right">
            <Button sm={2} className="btn col-2" onClick={() => setExibirModalEmpreendimento(false)}>Fechar</Button>

            </div>

        </div>

    )
}

export default MostrarEmpreendimentos