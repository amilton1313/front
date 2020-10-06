import React, { useState, useContext } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { faMinus, faPlus, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MostrarCorretores from './MostrarCorretores'

import { PropostaContext } from './Proposta'

const PropostaCorretor = () => {

    const [exibirModalCorretor, setExibirModalCorretor] = useState(false)

    const { setIdCorretor, setNomeCorretor, nomeCorretor } = useContext(PropostaContext)

    const onLimpar = (e) => {
        e.preventDefault()
        setIdCorretor(null)
        setNomeCorretor('')
    }

    return (
        <>
            <Form.Group
                as={Row}
                className="gr"
            >
                <Form.Label size="sm" column sm={2} className="lab">Corretor : </Form.Label>
                <Col sm={7}>
                    <Form.Control
                        size="sm"
                        type="text"
                        placeholder="Clique para selecionar um Corretor."
                        name="id_Corretor"
                        className="cont"
                        value={nomeCorretor}
                        autoComplete="off"
                        onClick={() => setExibirModalCorretor(!exibirModalCorretor)}
                        readOnly
                    />
                    <Form.Control.Feedback type="invalid">
                        Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
                </Col>
                <div className="d-flex" >
                    {
                        (nomeCorretor !== '')
                            ? <div className="d-flex">
                                <span
                                    className="botao-minus"
                                    onClick={(e) => onLimpar(e)}
                                ><FontAwesomeIcon icon={faMinus} /></span>
                            </div>
                            : null
                    }
                </div>
            </Form.Group>
            {
                <MostrarCorretores
                    titulo='Corretores'
                    setExibirModalCorretor={setExibirModalCorretor}
                    exibirModalCorretor={exibirModalCorretor} />
            }
        </>
    );
}

export default PropostaCorretor;