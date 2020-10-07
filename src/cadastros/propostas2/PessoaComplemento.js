import React, { useState, useEffect, useContext, useRef } from 'react'
import clienteAxios from '../../config/axios'
import { useDispatch, useSelector } from 'react-redux'
import { InputGroup, FormControl, Table, Form, Row, Col, Button, Jumbotron } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMinus, faPlus, faStepForward, faStepBackward, faFastForward, faFastBackward } from '@fortawesome/free-solid-svg-icons'
import './propo.css'

const PessoaDados = ({ titulo1, titulo2, tipo_pessoa }) => {

    const [data_nascimento, setDataNascimento] = useState('')
    const [nacionalidade, setNacionalidade] = useState('')
    const [sexo, setSexo] = useState(1)
    const [estado_civil, setEstadoCivil] = useState(1)
    const [uniao_estavel, setUniaoEstavel] = useState(1)
    const [conjuge_nome, setConjugeNome] = useState('')
    const [conjuge_cpf, setConjugeCpf] = useState('')
    const [regime_casamento, setRegimeCasamento] = useState('')
    const [data_casamento, setDataCasamento] = useState('')
    const [pacto_nupcial, setPactoNupcial] = useState('')
    const [profissao, setProfissao] = useState('')
    const [rg, setRG] = useState('')
    const [data_expedicao, setDataExpedicao] = useState('')
    const [orgao_emissor_uf, setOrgaoEmissor] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [tempo_empresa, setTempoEmpresa] = useState('')
    const [cargo, setCargo] = useState('')
    const [remuneracao, setRemuneracao] = useState('')


    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [uf, setUF] = useState('')
    const [banco, setBanco] = useState('')
    const [agencia, setAgencia] = useState('')
    const [conta, setConta] = useState('')

    const cpfRef = useRef()


    useEffect(() => {
        document.getElementById('sexo1').checked = sexo === 1
        document.getElementById('sexo2').checked = sexo === 2
    }, [])

    return (
        <>
            <div className="d-flex fx-lateral" style={{ padding: 0 }}>
                <div style={{ flex: 7, marginTop: 0, paddingTop: 0 }} >

                    <Jumbotron
                        fluid
                        style={{ marginTop: 0, paddingTop: 0, paddingLeft: '15px' }}
                    >

                        {/* Data de Nascimento */}
                        <Form.Group
                            as={Row}
                            className="gr"
                        >
                            <Form.Label size="sm" column sm={2} className="lab">Data de Nascimento : </Form.Label>
                            <Col sm={3}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Digite o CPF/CNPJ da pessoa"
                                    name="data_nascimento"
                                    className="cont"
                                    value={data_nascimento}
                                    autoComplete="off"
                                    onChange={e => setDataNascimento(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        {/* Nacionalidade */}
                        <Form.Group
                            as={Row}
                            className="gr"
                        >
                            <Form.Label size="sm" column sm={2} className="lab">Nacionalidade : </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Digite a nacionalidade da pessoa"
                                    name="nacionalidade"
                                    id="nacionalidade"
                                    className="cont"
                                    value={nacionalidade}
                                    autoComplete="off"
                                    onChange={e => setNacionalidade(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        {/* Sexo */}
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label size="sm" column sm={2} className="lab">Sexo : </Form.Label>
                                <Col sm={6}>
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Masculino"
                                        name="sexo"
                                        id="sexo1"
                                        onChange={e => setSexo(e.target.value)}
                                        value={1}
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Feminino"
                                        name="sexo"
                                        id="sexo2"
                                        onChange={e => setSexo(e.target.value)}
                                        value={2}
                                    />

                                </Col>
                            </Form.Group>
                        </fieldset>

                        {/* Estado Civil */}
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label size="sm" column sm={2} className="lab">Estado Civil : </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Solteiro(a)"
                                        name="estado_civil"
                                        id="estado_civil1"
                                        onChange={e => setEstadoCivil(e.target.value)}
                                        value={1}
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Casado(a)"
                                        name="estado_civil"
                                        id="estado_civil2"
                                        onChange={e => setEstadoCivil(e.target.value)}
                                        value={2}
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Separado(a)"
                                        name="estado_civil"
                                        id="estado_civil3"
                                        onChange={e => setEstadoCivil(e.target.value)}
                                        value={1}
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Divorciado(a)"
                                        name="estado_civil"
                                        id="estado_civil4"
                                        onChange={e => setEstadoCivil(e.target.value)}
                                        value={2}
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Viúvo(a)"
                                        name="estado_civil"
                                        id="estado_civil5"
                                        onChange={e => setEstadoCivil(e.target.value)}
                                        value={1}
                                    />

                                </Col>
                            </Form.Group>
                        </fieldset>

                        {/* União estável */}
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label size="sm" column sm={2} className="lab">União estável : </Form.Label>
                                <Col sm={6}>
                                    <Form.Check
                                        inline
                                        type="checkbox"
                                        label="uniao_estavel"
                                        name="uniao_estavel"
                                        id="uniao_estavel"
                                        onChange={e => setUniaoEstavel(e.target.value)}
                                        value={1}
                                    />

                                </Col>
                            </Form.Group>
                        </fieldset>

                        {/* Nome do Cônjuge */}
                        <Form.Group
                            as={Row}
                            className="gr"
                        >
                            <Form.Label size="sm" column sm={2} className="lab">Nome do Cônjuge : </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Digite o nome do Cônjuge"
                                    name="conjuge_nome"
                                    className="cont"
                                    value={conjuge_nome}
                                    autoComplete="off"
                                    onChange={e => setConjugeNome(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        {/* CPF do Cônjuge */}
                        <Form.Group
                            as={Row}
                            className="gr"
                        >
                            <Form.Label size="sm" column sm={2} className="lab">CPF do Cônjuge : </Form.Label>
                            <Col sm={4}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Digite o cpf do Cônjuge"
                                    name="conjuge_cpf"
                                    className="cont"
                                    value={conjuge_cpf}
                                    autoComplete="off"
                                    onChange={e => setConjugeCpf(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        {/* Regime de Casamento */}
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label size="sm" column sm={2} className="lab">Regime de Casamento : </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Comunhão Universal de Bens"
                                        name="regime_casamento"
                                        id="regime_casamento1"
                                        onChange={e => setEstadoCivil(e.target.value)}
                                        value={1}
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Comunhão Parcial de Bens"
                                        name="regime_casamento"
                                        id="regime_casamento2"
                                        onChange={e => setEstadoCivil(e.target.value)}
                                        value={2}
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Separação de Bens"
                                        name="regime_casamento"
                                        id="regime_casamento3"
                                        onChange={e => setEstadoCivil(e.target.value)}
                                        value={1}
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Outros"
                                        name="regime_casamento"
                                        id="regime_casamento4"
                                        onChange={e => setEstadoCivil(e.target.value)}
                                        value={2}
                                    />

                                </Col>
                            </Form.Group>
                        </fieldset>

                        {/* Data de Casamento */}
                        <Form.Group
                            as={Row}
                            className="gr"
                        >
                            <Form.Label size="sm" column sm={2} className="lab">Data de Casamento : </Form.Label>
                            <Col sm={3}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Digite o CPF/CNPJ da pessoa"
                                    name="data_casamento"
                                    className="cont"
                                    value={data_casamento}
                                    autoComplete="off"
                                    onChange={e => setDataCasamento(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        {/* Pacto Nupcial */}
                        <Form.Group
                            as={Row}

                            className="gr"
                        >
                            <Form.Label column sm={2} className="lab">Pacto Nupcial : </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    as="textarea"
                                    name="pacto_nupcial"
                                    className="cont"
                                    style={{ height: '120px' }}
                                    value={pacto_nupcial}
                                    onChange={e => setPactoNupcial(e.target.value)}
                                >

                                </Form.Control>
                            </Col>

                        </Form.Group>

                        {/* Profissão */}
                        <Form.Group
                            as={Row}
                            className="gr"
                        >
                            <Form.Label size="sm" column sm={2} className="lab">Profissão : </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Digite a profissão da pessoa"
                                    name="profissao"
                                    id="profissao"
                                    className="cont"
                                    value={profissao}
                                    autoComplete="off"
                                    onChange={e => setProfissao(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        

                        {/* Número do RG */}
                        <Form.Group
                            as={Row}
                            className="gr"
                        >
                            <Form.Label size="sm" column sm={2} className="lab">Número do RG : </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Digite o número do RG"
                                    name="rg"
                                    id="rg"
                                    className="cont"
                                    value={rg}
                                    autoComplete="off"
                                    onChange={e => setRG(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        {/* Data da Expediçao */}
                        <Form.Group
                            as={Row}
                            className="gr"
                        >
                            <Form.Label size="sm" column sm={2} className="lab">Data da Expediçao : </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Digite a data da expedição"
                                    name="data_expedicao"
                                    id="data_expedicao"
                                    className="cont"
                                    value={data_expedicao}
                                    autoComplete="off"
                                    onChange={e => setDataExpedicao(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        {/* Órgão Emissor */}
                        <Form.Group
                            as={Row}
                            className="gr"
                        >
                            <Form.Label size="sm" column sm={2} className="lab">Órgão Emissor : </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Digite o órgao emissor"
                                    name="orgao_emissor_uf"
                                    id="orgao_emissor_uf"
                                    className="cont"
                                    value={orgao_emissor_uf}
                                    autoComplete="off"
                                    onChange={e => setOrgaoEmissor(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        {/* Empresa */}
                        <Form.Group
                            as={Row}
                            className="gr"
                        >
                            <Form.Label size="sm" column sm={2} className="lab">Empresa onde trabalha : </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Digite o nome da empresa onde trabalha"
                                    name="empresa"
                                    className="cont"
                                    value={empresa}
                                    autoComplete="off"
                                    onChange={e => setEmpresa(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        {/* Tempo na Empresa */}
                        <Form.Group
                            as={Row}
                            className="gr"
                        >
                            <Form.Label size="sm" column sm={2} className="lab">Tempo na Empresa : </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Digite o tempo na empresa"
                                    name="tempo_empresa"
                                    className="cont"
                                    value={tempo_empresa}
                                    autoComplete="off"
                                    onChange={e => setTempoEmpresa(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        {/* Cargo */}
                        <Form.Group
                            as={Row}
                            className="gr"
                        >
                            <Form.Label size="sm" column sm={2} className="lab">Cargo : </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Digite o cargo"
                                    name="cargo"
                                    className="cont"
                                    value={cargo}
                                    autoComplete="off"
                                    onChange={e => setCargo(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        {/* Renda Familiar */}
                        <Form.Group
                            as={Row}
                            className="gr"
                        >
                            <Form.Label size="sm" column sm={2} className="lab">Renda Familiar : </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Digite a renda familiar"
                                    name="remuneracao"
                                    className="cont"
                                    value={remuneracao}
                                    autoComplete="off"
                                    onChange={e => setRemuneracao(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        <div>
                            Comprometimento da Renda Familiar
                        </div>

                        {/* Percentual */}
                        <Form.Group
                            as={Row}
                            className="gr"
                        >
                            <Form.Label column sm={2} className="lab">Percentual : </Form.Label>
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