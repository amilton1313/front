import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import clienteAxios from '../../config/axios'

import { cepMask, cpfMask, cnpjMask, cpfFormat, cnpjFormat, clearFormat } from '../../util/util'
import '../../css/erp.css'

import { ac_addPessoasDados, ac_updPessoasDados, ac_obterPessoaDadosCnpj } from '../../actions/ac_pessoa'

const PessoaDados = ({ history, location }) => {

    const [id_pessoa, xId_pessoa] = useState('')
    const [tipo_pessoa, xTipo_pessoa] = useState('')
    const [cpf_cnpj, xCpf_cnpj] = useState('')
    const [nome, xNome] = useState('')
    const [endereco, xEndereco] = useState('')
    const [complemento, xComplemento] = useState('')
    const [bairro, xBairro] = useState('')
    const [municipio, xMunicipio] = useState('')
    const [uf, xUf] = useState('')
    const [cep, xCep] = useState('')
    const [num_creci, xNum_creci] = useState('')

    const [adm_financeiro, xAdm_financeiro] = useState('false')
    const [correspondencia, xCorrespondencia] = useState('1')

    const [adm_sistema, xadm_Sistema] = useState('false')
    const [cod_msm, xCod_msm] = useState('')
    const [codigo_contabilidade, xCodigo_contabilidade] = useState('')
    const [apelido, xApelido] = useState('')
    const [codigo_cobcaixa, xCodigo_cobcaixa] = useState('')
    const [bloqueio, xBloqueio] = useState('')
    const [edicao_bloqueada, xEdicao_bloqueada] = useState('')
    const [observacao, xObservacao] = useState('')
    const [ctb_conta, xCtb_conta] = useState('')
    const [ctb_enviado, xCtb_enviado] = useState('')
    const [dt_enviotabelas, xDt_enviotabelas] = useState('')
    const [senha, xSenha] = useState('')
    const [facebook, xFacebook] = useState('')
    const [pinterest, xPinterest] = useState('')
    const [instagram, xInstagram] = useState('')
    const [adm, xAdm] = useState('')
    const [admin, xAdmin] = useState('')
    const [onChangeCpf, xOnChangeCpf ] = useState('')
    const [metodoBD, xMetodoBD] = useState('I')

    useEffect(() => {
        document.getElementById("radioOne").checked = true
        xMetodoBD('I')
        document.getElementById("botaoSubmit").innerText  = 'Incluir'
    }, [])


    const onCheckCpf = () => {
        const cnpj = clearFormat(cpf_cnpj)
        xMetodoBD('I')
        document.getElementById("botaoSubmit").innerText  = 'Incluir'
        

        clienteAxios.get(`/pessoa/cnpj/${cnpj}`, {
            headers: { Authorization: token }
        })
            .then(resposta => {

                if (resposta.data.length > 0) {
                    atualizarPessoa(resposta.data[0])
                    xId_pessoa(resposta.data[0].id_pessoa)
    
                    document.getElementById("botaoSubmit").innerText  = 'Alterar'
                    xMetodoBD('A')
                    return
                }    

                limparPessoa()
            })
            .catch(err => {
                console.log(err)
                limparPessoa()
            })

        // if (tipo_pessoa === 'Física') {
        //     if (!validarCPF(cpf_cnpj)) xMensagemCPF('CPF inválido')
        // } else {
        //     if (!validarCNPJ(cpf_cnpj)) xMensagemCPF('CNPJ inválido')
        // }

        // dispatch(ac_obterPessoaDadosCnpj(token, clearFormat(cpf_cnpj), atualizarPessoa))


    }

    const limparPessoa = () => {

        xNome('')
        xEndereco('')
        xComplemento('')
        xBairro('')
        xMunicipio('')
        xUf('')
        xCep('')
        xNum_creci('')
        xCorrespondencia('')
        xCod_msm('')
        xCodigo_contabilidade('')
        xApelido('')
        xCodigo_cobcaixa('')
        xBloqueio('')
        xObservacao('')
        xCtb_conta('')
        xCtb_enviado('')
        xSenha('')
        xFacebook('')
        xPinterest('')
        xInstagram('')
        xAdm('')
        xAdmin('')
    }

    const atualizarPessoa = pessoa => {

        const p = pessoa || {}
        console.log('p', p)
        xTipo_pessoa(p.tipo_pessoa)
        xCpf_cnpj(p.cpf_cnpj)
        xNome(p.nome)
        xEndereco(p.endereco)
        xComplemento(p.complemento)
        xBairro(p.bairro)
        xMunicipio(p.municipio)
        xUf(p.uf)
        xCep(p.cep)
        xNum_creci(p.num_creci)
        xCorrespondencia(p.correspondencia)
        xCod_msm(p.cod_msm)
        xCodigo_contabilidade(p.codigo_contabilidade)
        xApelido(p.apelido)
        xCodigo_cobcaixa(p.codigo_cobcaixa)
        xBloqueio(p.bloqueio)
        xObservacao(p.observacao)
        xCtb_conta(p.ctb_conta)
        xCtb_enviado(p.ctb_enviado)
        xSenha(p.senha)
        xFacebook(p.xFacebook)
        xPinterest(p.pinterest)
        xInstagram(p.instagram)
        xAdm(p.adm)
        xAdmin(p.admin)
    }

    const dispatch = useDispatch()
    // const incluirPessoaDados = (pessoa) => dispatch(ac_incluirPessoasDados(pessoa))
    // const validarFormulario = () => dispatch(ac_validarFormulario())
    // const exitoValidacion = () => dispatch(validacionExito())
    // const errorValidacion = () => dispatch(validacionError())

    // const error = useSelector((state) => state.error.error)
    const error = ''

    const token = useSelector(state => state.auth.token)

    const onSubmit = e => {
        e.preventDefault()

        // validarFormulario()

        // if (nombre === '' || precio === '') {
        //     errorValidacion()
        //     return
        // }

        // exitoValidacion()

        let pessoa = {
            tipo_pessoa: tipo_pessoa === 'Física' ? 1 : 2,
            cpf_cnpj: clearFormat(cpf_cnpj),
            nome: nome.toUpperCase() || "",
            endereco: endereco.toUpperCase(),
            complemento: complemento.toUpperCase(),
            bairro: bairro.toUpperCase(),
            municipio: municipio.toUpperCase(),
            uf,
            cep,
            correspondencia: parseInt(correspondencia),
            cod_msm: parseInt(cod_msm),
            codigo_contabilidade: parseInt(codigo_contabilidade),
            apelido: apelido.toUpperCase(),
            codigo_cobcaixa: parseInt(codigo_cobcaixa),
            bloqueio: parseInt(bloqueio),
            edicao_bloqueada: parseInt(edicao_bloqueada),
            observacao,
            ctb_conta: parseInt(ctb_conta),
            ctb_enviado: parseInt(ctb_enviado),
            dt_enviotabelas: null,
            senha,
            facebook,
            pinterest,
            instagram,
            num_creci,
            adm: null,
            admin: parseInt(admin)
        }

        if (metodoBD === 'A') {
            pessoa = {
                id_pessoa,
                ...pessoa,
            }
            dispatch(ac_updPessoasDados(token, pessoa, retornoDoBanco))
            history.push('/pessoasLista')
            return
        }

        console.log('pessoa inclusao', pessoa)
        

        dispatch(ac_addPessoasDados(token, pessoa, retornoDoBanco))

        history.push('/pessoasLista')
    }

    const direcionaPessoaDados = (direcao, dados) => {

    }

    const retornoDoBanco = retorno => {

        if (retorno.status === 200) {
            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Cadastrado com sucesso !!!',
                showConfirmButton: false,
                timer: 3000
              })
        } else {
            Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Erro no Cadastramento.',
                showConfirmButton: false,
                timer: 3000
              })
        }
    }

    const onHandleTipoPessoa1 = e => {
        xTipo_pessoa(e.target.value)
            document.getElementById('labelCpf').innerHTML="CPF:"
            document.getElementById('labelNome').innerHTML="Nome:"
            xCpf_cnpj(cpfFormat(cpf_cnpj))
    }

    const onHandleTipoPessoa2 = e => {
        xTipo_pessoa(e.target.value)
            document.getElementById('labelCpf').innerHTML="CNPJ:"
            document.getElementById('labelNome').innerHTML="Razão Social:"
            xCpf_cnpj(cnpjFormat(cpf_cnpj))

    }

    const onHandleCPF = e => {
        if (tipo_pessoa === 'Física') {
            xCpf_cnpj(cpfMask(e.target.value))
        } else {
            xCpf_cnpj(cnpjMask(e.target.value))
        }
    }

    const onBuscarCep = cep => {

        if (!cep) {
            Swal.fire({
                position: 'center',
                type: 'erro',
                title: 'Por favor digite um CEP',
                showConfirmButton: false,
                timer: 3000
              })
            return
        }

        axios.get(`https://api.postmon.com.br/v1/cep/${cep}`)
        .then(resposta => {
            console.log(resposta.data)
            const { logradouro, bairro, cidade, estado } = resposta.data

            xEndereco(logradouro)
            xBairro(bairro)
            xMunicipio(cidade)
            xUf(estado)
        })
        .catch(err => {
            Swal.fire({
                position: 'center',
                type: 'erro',
                title: 'CEP não encontrado',
                showConfirmButton: false,
                timer: 3000
              })
        })

    }

    const atualizaPessoaDados = () => {
        history.push('/pessoasLista')
    }

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Cadastro de Pessoas</h2>
                        <form onSubmit={onSubmit}>

                            {/* *** Tipo de Pessoa *** */}

                            <label className="labelForm" >
                                Tipo de Pessoa:
                                    </label>
                            <div className="radioForm">

                                <div className="text-center" className="radioFormItens">
                                    <div className="form-check form-check-inline" style={{ padding: 8 }}>
                                        <input
                                            className="form-check-input erp-radio ml-2"
                                            id="radioOne"
                                            type="radio"
                                            // disabled
                                            name="tipo_pessoa"
                                            value="Física"
                                            onChange={e => onHandleTipoPessoa1(e)}
                                        />
                                        <label className="form-check-label radioLabel">
                                            Física
                                    </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input erp-radio ml-5"
                                            id="radioTwo"
                                            type="radio"
                                            // disabled
                                            name="tipo_pessoa"
                                            value="Jurídica"
                                            onChange={e => onHandleTipoPessoa2(e)}
                                        />
                                        <label className="form-check-label radioLabel">
                                            Jurídica
                                    </label>
                                    </div>

                                </div>
                            </div>

                            {/* *** CPF / CNPJ *** */}

                            <div className="form-group">
                                <label id="labelCpf" className="labelForm">CPF:</label>
                                <input
                                    id="inputCpf"
                                    type="tel"
                                    // disabled
                                    maxLength='18'
                                    className="form-control"
                                    value={cpf_cnpj}
                                    onChange={e => onHandleCPF(e)}
                                    onBlur={() => onCheckCpf()}
                                />
                            </div>

                            {/* *** Nome *** */}

                            <div className="form-group">
                                <label id="labelNome" className="labelForm">Nome:</label>
                                <input
                                    type="text"
                                    maxLength="50"
                                    className="form-control maiusculas"
                                    value={nome}
                                    onChange={e => xNome(e.target.value)}
                                />
                            </div>

                            {/* *** CEP *** */}

                            <div className="d-flex align-items-center">

                            <div className="form-group">
                                <label className="labelForm">CEP:</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    style={{width: '120px'}}
                                    value={cep}
                                    onChange={e => xCep(cepMask(e.target.value))}
                                    onClick={e => {
                                        if(e.keyCode == 13) onBuscarCep(cep)
                                        }
                                    }
                                />
                            </div>

                            <div>
                                <button 
                                    className="btn btn-primary mt-2 ml-3"
                                    onClick={() => onBuscarCep(cep)}
                                >Buscar</button>
                            </div>
                            </div>


                            {/* *** Endereço *** */}

                            <div className="form-group">
                                <label className="labelForm">Endereço:</label>
                                <input
                                    type="text"
                                    maxLength="50"
                                    className="form-control maiusculas"
                                    value={endereco}
                                    onChange={e => xEndereco(e.target.value)}
                                />
                            </div>

                            {/* *** Complemento *** */}

                            <div className="form-group">
                                <label className="labelForm">Complemento:</label>
                                <input
                                    type="text"
                                    maxLength="50"
                                    className="form-control maiusculas"
                                    value={complemento}
                                    onChange={e => xComplemento(e.target.value)}
                                />
                            </div>

                            {/* *** Bairro *** */}

                            <div className="form-group">
                                <label className="labelForm">Bairro:</label>
                                <input
                                    type="text"
                                    maxLength="20"
                                    className="form-control maiusculas"
                                    value={bairro}
                                    onChange={e => xBairro(e.target.value)}
                                />
                            </div>


                            {/* *** Município *** */}

                            <div className="form-group">
                                <label className="labelForm">Município:</label>
                                <input
                                    type="text"
                                    maxLength="30"
                                    className="form-control maiusculas"
                                    value={municipio}
                                    onChange={e => xMunicipio(e.target.value)}
                                />
                            </div>

                            {/* *** UF *** */}

                            <div className="form-group w">
                                <label className="labelForm">UF:</label>
                                <select class="form-control" id="exampleFormControlSelect1"
                                    value={uf}
                                    onChange={e => xUf(e.target.value)}
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
                                </select>
                            </div>

                            {/* *** Num CRECI *** */}

                            <div className="form-group">
                                <label className="labelForm">CRECI:</label>
                                <input
                                    type="text"
                                    maxLength="20"
                                    className="form-control"
                                    value={num_creci}
                                    onChange={e => xNum_creci(e.target.value)}
                                />
                            </div>

                            {/* *** Observações *** */}

                            <div className="form-group">
                                        <label className="labelForm">Observações:</label>
                                        <textarea
                                            className="form-control"
                                            value={observacao}
                                            rows="5" cols="33"
                                            onChange={e => xObservacao(e.target.value)}
                                        />
                                    </div>

                            {
                                adm_financeiro === 'true' || adm_sistema === 'true' 
                                ?
                                <div>

                                    {/* *** Correspondência *** */}

                                    <label className="labelForm">
                                        Forma de Correspondência:
                                            </label>
                                    <div className="radioForm">

                                        <div className="text-center" className="radioFormItens">
                                            <div className="form-check form-check-inline" style={{ padding: 8 }}>
                                                <input
                                                    className="form-check-input erp-radio"
                                                    type="radio"
                                                    name="correspondencia"
                                                    value="1"
                                                    onChange={e => xCorrespondencia(e.target.value)}
                                                />
                                                <label className="form-check-label radioLabel">
                                                    Residencial
                                            </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input erp-radio"
                                                    type="radio"
                                                    name="correspondencia"
                                                    value="2"
                                                    onChange={e => xCorrespondencia(e.target.value)}
                                                />
                                                <label className="form-check-label radioLabel">
                                                    Comercial
                                            </label>
                                            </div>

                                            <div className="form-check form-check-inline" style={{ padding: 8 }}>
                                                <input
                                                    className="form-check-input erp-radio"
                                                    type="radio"
                                                    name="correspondencia"
                                                    value="3"
                                                    onChange={e => xCorrespondencia(e.target.value)}
                                                />
                                                <label className="form-check-label radioLabel">
                                                    Alternativo
                                            </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input erp-radio"
                                                    type="radio"
                                                    name="correspondencia"
                                                    value="4"
                                                    onChange={e => xCorrespondencia(e.target.value)}
                                                />
                                                <label className="form-check-label radioLabel">
                                                    Sem Envio
                                            </label>
                                            </div>

                                        </div>
                                    </div>

                                    
                                    {/* *** Cadastro Bloqueado: *** */}

                                    <div className="form-group">
                                        <label className="labelForm">Cadastro Bloqueado:</label>
                                        <input
                                            type="checkbox"
                                            className="form-control checkItem"
                                            value={edicao_bloqueada}
                                            onChange={e => xEdicao_bloqueada(e.target.checked)}
                                        />
                                    </div>


                                </div>
                                : null
                            }

                            {
                                adm_sistema === 'true' 
                                ?
                                <div>

                                    {/* *** Código MSM *** */}

                                    <div className="form-group">
                                        <label className="labelForm">Código MSM:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={cod_msm}
                                            onChange={e => xCod_msm(e.target.value)}
                                        />
                                    </div>

                                    {/* *** Código Contabilidade *** */}

                                    <div className="form-group">
                                        <label className="labelForm">Código Contabilidade:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={codigo_contabilidade}
                                            onChange={e => xCodigo_contabilidade(e.target.value)}
                                        />
                                    </div>

                                    {/* *** Apelido *** */}

                                    <div className="form-group">
                                        <label className="labelForm">Apelido:</label>
                                        <input
                                            type="text"
                                            maxLength="20"
                                            className="form-control maiusculas"
                                            value={apelido}
                                            onChange={e => xApelido(e.target.value)}
                                        />
                                    </div>

                                    {/* *** CTB Conta *** */}

                                    <div className="form-group">
                                        <label className="labelForm">CTB Conta:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={ctb_conta}
                                            onChange={e => xCtb_conta(e.target.value)}
                                        />
                                    </div>

                                    {/* *** CTB enviado: *** */}

                                    <div className="form-group">
                                        <label className="labelForm">Cadastro Bloqueado:</label>
                                        <input
                                            type="checkbox"
                                            className="form-control checkItem"
                                            value={ctb_enviado}
                                            onChange={e => xCtb_enviado(e.target.checked)}
                                        />
                                    </div>

                                    {/* *** Senha *** */}

                                    <div className="form-group">
                                        <label className="labelForm">Senha:</label>
                                        <input
                                            type="text"
                                            maxLength="20"
                                            className="form-control"
                                            value={senha}
                                            onChange={e => xSenha(e.target.value)}
                                        />
                                    </div>

                                    {/* *** Facebook *** */}

                                    <div className="form-group">
                                        <label className="labelForm">Facebook:</label>
                                        <input
                                            type="text"
                                            maxLength="70"
                                            className="form-control"
                                            value={facebook}
                                            onChange={e => xFacebook(e.target.value)}
                                        />
                                    </div>

                                    {/* *** Pinterest *** */}

                                    <div className="form-group">
                                        <label className="labelForm">Pinterest:</label>
                                        <input
                                            type="text"
                                            maxLength="70"
                                            className="form-control"
                                            value={pinterest}
                                            onChange={e => xPinterest(e.target.value)}
                                        />
                                    </div>

                                    {/* *** Instagram *** */}

                                    <div className="form-group">
                                        <label className="labelForm">Instagram:</label>
                                        <input
                                            type="text"
                                            maxLength="70"
                                            className="form-control"
                                            value={instagram}
                                            onChange={e => xInstagram(e.target.value)}
                                        />
                                    </div>

                                </div>
                                : null
                            }               

                            <button id="botaoSubmit" type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Incluir</button>
                        </form>
                        {error
                            ? <div className="font-weight-bold alert alert-danger text-center mt-4">Todos os campos s]ao obrigatórios</div>
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PessoaDados