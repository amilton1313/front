import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import ReactList from 'react-list';

import imobiliarias from './lista-de-imobiliarias'
import './propo.css'

const MostrarImobiliarias = ({ titulo, setIdImobiliaria, setNomeImobiliaria,
    setExibirModalImobiliaria, exibirModalImobiliaria }) => {

    const [buscar, setBuscar] = useState('')
    const [imobiliariasFilter, setImobiliariasFilter] = useState([])

    useEffect(() => {
        setImobiliariasFilter(imobiliarias)
    }, [])

    const handleSelecionar = (imob) => {
        setIdImobiliaria(imob.id)
        setNomeImobiliaria(imob.nome)
        setExibirModalImobiliaria(false)
    }

    const classe = exibirModalImobiliaria ? "left_sidebar left_sidebar-show" : "left_sidebar left_sidebar-hide"

    const imobs = imobiliariasFilter ? imobiliariasFilter : imobiliarias
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
                imobiliarias.filter((imob) => {
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
                setImobiliariasFilter(res)
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
                <ReactList
                    itemRenderer={renderItem}
                    length={imobs.length}
                    type='uniform'
                />
            </div>
            <div className="text-right">
            <Button sm={2} className="btn col-2" onClick={() => setExibirModalImobiliaria(false)}>Fechar</Button>

            </div>

        </div>

    )
}

export default MostrarImobiliarias