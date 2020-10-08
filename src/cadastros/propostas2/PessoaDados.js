import React, { useState, useEffect, useContext, useRef } from 'react'
import clienteAxios from '../../config/axios'
import { useDispatch, useSelector } from 'react-redux'
import { InputGroup, FormControl, Table, Form, Row, Col, Button, Jumbotron } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMinus, faPlus, faStepForward, faStepBackward, faFastForward, faFastBackward } from '@fortawesome/free-solid-svg-icons'
import './propo.css'

const PessoaDados = ({ tipo_pessoa }) => {

    const [nome, setNome] = useState('')
    const [cpf_cnpj, setCpfCnpj] = useState('')
    const [cep, setCEP] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [uf, setUF] = useState('')
    const [num_creci, setNumCreci] = useState('')
    const [banco, setBanco] = useState('')
    const [agencia, setAgencia] = useState('')
    const [conta, setConta] = useState('')

    const cpfRef = useRef()


    const handleNome = (e) => {
        setNome(e.target.value)
    }

    useEffect(() => {
        document.getElementById("cpf_cnpj").placeholder = tipo_pessoa == 1
        ? "Digite o CPF" : "Digite o CNPJ"

        document.getElementById("nome").placeholder = tipo_pessoa == 1
        ? "Digite o nome da pessoa" : "Digite a razão social da empresa"
    })

    return (
        <>
            <div className="d-flex fx-lateral" style={{padding: 0 }}>
                <div style={{ flex: 7, marginTop: 0, paddingTop: 0 }} >

                    <Jumbotron
                        fluid
                        style={{marginTop: 0, marginBottom: 0, paddingTop: 0, paddingLeft: '15px'}}
                    >

                    {/* CPF/CNPJ */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label size="sm" column sm={2} className="lab">{tipo_pessoa == 1 ? 'CPF : ' : 'CNPJ : '}</Form.Label>
                        <Col sm={7}>
                            <Form.Control
                                ref = {cpfRef}
                                size="sm"
                                type="text"
                                placeholder="Digite o CPF/CNPJ da pessoa"
                                name="cpf_cnpj"
                                id="cpf_cnpj"
                                className="cont"
                                value={cpf_cnpj}
                                autoComplete="off"
                                onChange={e => setCpfCnpj(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    {/* Nome */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label size="sm" column sm={2} className="lab">{tipo_pessoa == 1 ? 'Nome : ' : 'Razão Social : '}</Form.Label>
                        <Col sm={7}>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Digite o nome/razão social da pessoa"
                                name="nome"
                                id="nome"
                                className="cont"
                                value={nome}
                                autoComplete="off"
                                onChange={e => setNome(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    {/* CEP */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label size="sm" column sm={2} className="lab">CEP : </Form.Label>
                        <Col sm={2}>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Digite o CEP"
                                name="cep"
                                className="cont"
                                value={cep}
                                autoComplete="off"
                                onChange={e => setCEP(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    {/* Endereço */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label size="sm" column sm={2} className="lab">Endereço : </Form.Label>
                        <Col sm={7}>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Digite o endereço"
                                name="endereco"
                                className="cont"
                                value={endereco}
                                autoComplete="off"
                                onChange={e => setEndereco(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    {/* Complemento */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label size="sm" column sm={2} className="lab">Complemento : </Form.Label>
                        <Col sm={7}>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Digite o complemento do endereço"
                                name="complemento"
                                className="cont"
                                value={complemento}
                                autoComplete="off"
                                onChange={e => setComplemento(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    {/* Bairro */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label size="sm" column sm={2} className="lab">Bairro : </Form.Label>
                        <Col sm={7}>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Digite o bairro"
                                name="bairro"
                                className="cont"
                                value={bairro}
                                autoComplete="off"
                                onChange={e => setBairro(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    {/* Município */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label size="sm" column sm={2} className="lab">Município : </Form.Label>
                        <Col sm={7}>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Digite o complemento do endereço"
                                name="municipio"
                                className="cont"
                                value={municipio}
                                autoComplete="off"
                                onChange={e => setMunicipio(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    {/* UF */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label column sm={2} className="lab">UF : </Form.Label>
                        <Col sm={7}>
                            <Form.Control as="select"
                                size="sm"
                                name="uf"
                                className="cont"
                                value={uf}
                                onChange={e => setUF(e.target.value)}
                            >
                                <option value="SC">Santa Catarina</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </Form.Control>
                        </Col>

                    </Form.Group>

                    {/* Numero do CRECI */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label size="sm" column sm={2} className="lab">Número do CRECI : </Form.Label>
                        <Col sm={3}>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Digite o número da CRECI"
                                name="num_creci"
                                className="cont"
                                value={num_creci}
                                autoComplete="off"
                                onChange={e => setNumCreci(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    {/* Banco */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label size="sm" column sm={2} className="lab">Banco : </Form.Label>
                        <Col sm={3}>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Digite o nome do banco"
                                name="banco"
                                className="cont"
                                value={banco}
                                autoComplete="off"
                                onChange={e => setBanco(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    {/* Agência */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label size="sm" column sm={2} className="lab">Agência : </Form.Label>
                        <Col sm={3}>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Digite o número da agência"
                                name="agencia"
                                className="cont"
                                value={agencia}
                                autoComplete="off"
                                onChange={e => setAgencia(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    {/* Conta Corrente */}
                    <Form.Group
                        as={Row}
                        className="gr"
                    >
                        <Form.Label size="sm" column sm={2} className="lab">Conta Corrente : </Form.Label>
                        <Col sm={3}>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Digite o número da conta corrente"
                                name="conta"
                                className="cont"
                                value={conta}
                                autoComplete="off"
                                onChange={e => setConta(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

 
                    </Jumbotron>

                </div>
            </div>




        </>
    )
}


export default PessoaDados