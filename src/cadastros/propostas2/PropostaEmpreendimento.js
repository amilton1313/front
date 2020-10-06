import React, { useState, useContext } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

import MostrarEmpreendimentos from './MostrarEmpreendimentos'

import { PropostaContext } from './Proposta'

const PropostaEmpreendimento = () => {

    const { setIdEmpreendimento, nomeEmpreendimento, setNomeEmpreendimento } = useContext(PropostaContext)

    const [exibirModalEmpreendimento, setExibirModalEmpreendimento] = useState(false)

    const [classe, setClasse] = useState('gr')

    const onLimpar = (e) => {
        e.preventDefault()
        setIdEmpreendimento(null)
        setNomeEmpreendimento('')
    }

    return (
        <>
            <Form.Group
                as={Row}
                className="gr"
            >
                <Form.Label column sm={2} className="lab">Empreendimento : </Form.Label>
                <Col sm={7}>
                    <Form.Control
                        size="sm"
                        type="text"
                        placeholder="Clique para selecionar um Empreendimento."
                        name="id_Empreendimento"
                        className="cont"
                        value={nomeEmpreendimento}
                        autoComplete="off"
                        onClick={() => setExibirModalEmpreendimento(!exibirModalEmpreendimento)}
                        readOnly
                    />
                    <Form.Control.Feedback type="invalid">
                        Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
                </Col>
                <div className="d-flex" >
                    {
                        (nomeEmpreendimento !== '')
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
                <MostrarEmpreendimentos
                    titulo='Empreendimentos'
                    setExibirModalEmpreendimento={setExibirModalEmpreendimento}
                    exibirModalEmpreendimento={exibirModalEmpreendimento} />
            }
        </>
    );
}

export default PropostaEmpreendimento;