import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'

import { cepMask, cpfMask, cnpjMask, cpfFormat, cnpjFormat, clearFormat } from '../../util/util'
import '../../css/erp.css'

import { ac_addPessoasDados, ac_obterPessoaDadosCnpj, ac_updPessoasDados } from '../../actions/ac_pessoa'

const PessoaDados_A = ({ history, location }) => {

    // const pessoa = useSelector( state => state.pessoas.pessoa )

    const pessoaDados = location.state.dados || {}

    const tipo_pessoaRef = useRef('')
    const cpf_cnpjRef = useRef('')
    const nomeRef = useRef('')
    const enderecoRef = useRef('')
    const complementoRef = useRef('')
    const bairroRef = useRef('')
    const municipioRef = useRef('')
    const ufRef = useRef('')
    const cepRef = useRef('')
    const num_creciRef = useRef('')

    const [tipo_pessoa, xTipo_pessoa] = useState('')
    const [cpf_cnpj, xCpf_cnpj] = useState('')
    const [endereco, xEndereco] = useState('')
    const [complemento, xComplemento] = useState('')
    const [bairro, xBairro] = useState('')
    const [municipio, xMunicipio] = useState('')
    const [uf, xUf] = useState('')
    const [cep, xCep] = useState('')

    // const Ref = useRef('')

    const adm_financeiroRef = useRef('')
    const correspondenciaRef = useRef('')

    const [adm_financeiro, xAdm_financeiro] = useState('false')
    const [correspondencia, xCorrespondencia] = useState('1')

    const adm_sistemaRef = useRef('')
    const cod_msmRef = useRef('')
    const codigo_contabilidadeRef = useRef('')
    const apelidoRef = useRef('')
    const codigo_cobcaixaRef = useRef('')
    const bloqueioRef = useRef('')
    const edicao_bloqueadaRef = useRef('')
    const observacaoRef = useRef('')
    const ctb_contaRef = useRef('')
    const ctb_enviadoRef = useRef('')
    const dt_enviotabelasRef = useRef('')
    const senhaRef = useRef('')
    const facebookRef = useRef('')
    const pinterestRef = useRef('')
    const instagramRef = useRef('')
    const admRef = useRef('')
    const adminRef = useRef('')
    const onChangeCpfRef = useRef('')

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

    const getTipo_pessoa = location.state.tipo_pessoa
    console.log('tp', getTipo_pessoa)
    const getCpf_cnpj = location.state.cpf_cnpj

    console.log(1,nomeRef.current.value)
    console.log(2,bairroRef.current.value)
    console.log(3,apelidoRef.current.value)
    console.log(4,pessoaDados.apelido)

    useEffect(() => {
        xTipo_pessoa(getTipo_pessoa)
        xCpf_cnpj(getCpf_cnpj)
        if (getTipo_pessoa === 'Física') {
            document.getElementById("radioOne").checked = true
        } else {
            document.getElementById("radioTwo").checked = true
        }
    }, [])

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

        console.log('passou submit')

        // validarFormulario()

        // if (nombre === '' || precio === '') {
        //     errorValidacion()
        //     return
        // }

        // exitoValidacion()


        let pessoa = {
            id_pessoa: pessoaDados.id_pessoa,
            tipo_pessoa: tipo_pessoaRef.current.value === 'Física' ? 1 : 2,
            cpf_cnpj: clearFormat(cpf_cnpj),
            nome: nomeRef.current.value !== '' ? nomeRef.current.value.toUpperCase() : '',
            endereco: enderecoRef.current.value !== '' ? enderecoRef.current.value.toUpperCase() : '',
            complemento: complementoRef.current.value !== '' ? complementoRef.current.value.toUpperCase() : '',
            bairro: bairroRef.current.value !== '' ? bairroRef.current.value.toUpperCase() : '',
            municipio: municipioRef.current.value !== '' ? municipioRef.current.value.toUpperCase() : '',
            uf: ufRef.current.value !== '' ? ufRef.current.value : '',
            cep: cepRef.current.value,
        }

        if (adm_financeiro === true || adm_sistema === true) {
            pessoa = {
                ...pessoa,
                correspondencia: parseInt(correspondenciaRef.current.value)
            }
        } else {
            pessoa = {
                ...pessoa,
                correspondencia: 1
            } 
        }

        if (adm_sistema === true) {
            pessoa = {
                ...pessoa,
                cod_msm: parseInt(cod_msmRef.current.value),
                codigo_contabilidade: parseInt(codigo_contabilidadeRef.current.value),
                apelido: apelidoRef.current.value !== '' ? apelidoRef.current.value.toUpperCase() : '',
                codigo_cobcaixa: parseInt(codigo_cobcaixaRef.current.value),
                bloqueio: parseInt(bloqueioRef.current.value),
                edicao_bloqueada: parseInt(edicao_bloqueadaRef.current.value),
                observavao: observacaoRef.current.value,
                ctb_conta: parseInt(ctb_contaRef.current.value),
                ctb_enviado: parseInt(ctb_enviadoRef.current.value),
                dt_enviotabelas: null,
                senha: senhaRef.current.value,
                facebook: facebookRef.current.value,
                pinterest: pinterestRef.current.value,
                instagram: instagramRef.current.value,
                num_creci: num_creciRef.current.value,
                adm: null,
                admin: parseInt(adminRef.current.value)
            }
        } 


        console.log('pessoa', pessoa)
        
        dispatch(ac_updPessoasDados(token, pessoa, retornoDoBanco))

        history.push('/pessoasLista')
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
            xCpf_cnpj(cpfFormat(cpf_cnpj))
    }

    const onHandleTipoPessoa2 = e => {
        xTipo_pessoa(e.target.value)
            document.getElementById('labelCpf').innerHTML="CNPJ:"
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



        if (!cepRef.current.value) {
            Swal.fire({
                position: 'center',
                type: 'erro',
                title: 'Por favor digite um CEP',
                showConfirmButton: false,
                timer: 3000
              })
            return
        }

        axios.get(`https://api.postmon.com.br/v1/cep/${cepRef.current.value}`)
        .then(resposta => {
            console.log(resposta.data)
            const { logradouro, bairro, cidade, estado } = resposta.data

            pessoaDados.endereco = logradouro
            pessoaDados.bairro = bairro
            pessoaDados.municipio = cidade
            pessoaDados.uf = estado

            // xEndereco(logradouro)
            // xBairro(bairro)
            // xMunicipio(cidade)
            // xUf(estado)
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

    const onCheckCpf = () => {
        console.log(clearFormat(cpf_cnpj))

        dispatch(ac_obterPessoaDadosCnpj(token, clearFormat(cpf_cnpj), atualizaPessoaDados))
        
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
                                            disabled
                                            name="tipo_pessoa"
                                            defaultValue={pessoaDados.tipo_pessoa}
                                            ref={tipo_pessoaRef}
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
                                            disabled
                                            name="tipo_pessoa"
                                            defaultValue={pessoaDados.tipo_pessoa}
                                            ref={tipo_pessoaRef}
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
                                <label id="labelCpf" className="labelForm">CPF/CNPJ:</label>
                                <input
                                    id="inputCpf"
                                    type="tel"
                                    disabled
                                    maxLength='18'
                                    className="form-control"
                                    defaultValue={pessoaDados.cpf_cnpj}
                                    ref={cpf_cnpjRef}
                                    onChange={e => onHandleCPF(e)}
                                    onBlur={() => onCheckCpf()}
                                />
                            </div>

                            {/* *** Nome *** */}

                            <div className="form-group">
                                <label className="labelForm">Nome:</label>
                                <input
                                    type="text"
                                    maxLength="50"
                                    className="form-control maiusculas"
                                    defaultValue={pessoaDados.nome}
                                    ref={nomeRef}
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
                                    defaultValue={pessoaDados.cep}
                                    ref={cepRef}
                                    onChange={e => xCep(cepMask(e.target.value))}
                                    onClick={e => {
                                        if(e.keyCode == 13) onBuscarCep(cepRef.current.value)
                                        }
                                    }
                                />
                            </div>

                            <div>
                                <button 
                                    className="btn btn-primary mt-2 ml-3"
                                    type="button"
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
                                    defaultValue={pessoaDados.endereco}
                                    ref={enderecoRef}
                                />
                            </div>

                            {/* *** Complemento *** */}

                            <div className="form-group">
                                <label className="labelForm">Complemento:</label>
                                <input
                                    type="text"
                                    maxLength="50"
                                    className="form-control maiusculas"
                                    defaultValue={pessoaDados.complemento}
                                    ref={complementoRef}
                                />
                            </div>

                            {/* *** Bairro *** */}

                            <div className="form-group">
                                <label className="labelForm">Bairro:</label>
                                <input
                                    type="text"
                                    maxLength="20"
                                    className="form-control maiusculas"
                                    defaultValue={pessoaDados.bairro}
                                    ref={bairroRef}
                                />
                            </div>


                            {/* *** Município *** */}

                            <div className="form-group">
                                <label className="labelForm">Município:</label>
                                <input
                                    type="text"
                                    maxLength="30"
                                    className="form-control maiusculas"
                                    defaultValue={pessoaDados.municipio}
                                    ref={municipioRef}
                                />
                            </div>

                            {/* *** UF *** */}

                            <div className="form-group w">
                                <label className="labelForm">UF:</label>
                                <select class="form-control" id="exampleFormControlSelect1"
                                    defaultValue={pessoaDados.uf}
                                    ref={ufRef}
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
                                <label className="labelForm">Número do CRECI:</label>
                                <input
                                    type="text"
                                    maxLength="20"
                                    className="form-control"
                                    defaultValue={pessoaDados.num_creci}
                                    ref={num_creciRef}
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
                                                    defaultValue={pessoaDados.correspondencia}
                                                    ref={correspondenciaRef}
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
                                                    // value="2"
                                                    defaultValue={pessoaDados.correspondencia}
                                                    ref={correspondenciaRef}
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
                                                    // value="3"
                                                    defaultValue={pessoaDados.correspondencia}
                                                    ref={correspondenciaRef}
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
                                                    // value="4"
                                                    defaultValue={pessoaDados.correspondencia}
                                                    ref={correspondenciaRef}
                                                    onChange={e => xCorrespondencia(e.target.value)}
                                                />
                                                <label className="form-check-label radioLabel">
                                                    Sem Envio
                                            </label>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                : null
                            }

                            {
                                adm_financeiro === 'true' || adm_sistema === 'true' 
                                ?
                                <div>

                                    {/* *** Código MSM *** */}

                                    <div className="form-group">
                                        <label className="labelForm">Código MSM:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={pessoaDados.cod_msm}
                                            ref={cod_msmRef}
                                            onChange={e => xCod_msm(e.target.value)}
                                        />
                                    </div>

                                    {/* *** Código Contabilidade *** */}

                                    <div className="form-group">
                                        <label className="labelForm">Código Contabilidade:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={pessoaDados.codigo_contabilidade}
                                            ref={codigo_contabilidadeRef}
                                            onChange={e => xCodigo_contabilidade(e.target.value)}
                                        />
                                    </div>

                                    {/* *** Apelido *** */}

                                    <div className="form-group">
                                        <label className="labelForm">Apelido:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={pessoaDados.apelido}
                                            ref={apelidoRef}
                                            onChange={e => xApelido(e.target.value)}
                                        />
                                    </div>

                                    {/* *** Cadastro Bloqueado: *** */}

                                    <div className="form-group">
                                        <label className="labelForm">Cadastro Bloqueado:</label>
                                        <input
                                            type="checkbox"
                                            className="form-control checkItem"
                                            defaultValue={pessoaDados.edicao_bloqueada}
                                            ref={edicao_bloqueadaRef}
                                            onChange={e => xEdicao_bloqueada(e.target.checked)}
                                        />
                                    </div>

                                    {/* *** Observações *** */}

                                    <div className="form-group">
                                        <label className="labelForm">Observações:</label>
                                        <textarea
                                            className="form-control"
                                            defaultValue={pessoaDados.observacao}
                                            ref={observacaoRef}
                                            rows="5" cols="33"
                                            onChange={e => xObservacao(e.target.value)}
                                        />
                                    </div>

                                    {/* *** CTB Conta *** */}

                                    <div className="form-group">
                                        <label className="labelForm">CTB Conta:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={pessoaDados.ctb_conta}
                                            ref={ctb_contaRef}
                                            onChange={e => xCtb_conta(e.target.value)}
                                        />
                                    </div>

                                    {/* *** CTB enviado: *** */}

                                    <div className="form-group">
                                        <label className="labelForm">Cadastro Bloqueado:</label>
                                        <input
                                            type="checkbox"
                                            className="form-control checkItem"
                                            defaultValue={pessoaDados.ctb_enviado}
                                            ref={ctb_enviadoRef}
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
                                            defaultValue={pessoaDados.senha}
                                            ref={senhaRef}
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
                                            defaultValue={pessoaDados.facebook}
                                            ref={facebookRef}
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
                                            defaultValue={pessoaDados.pinterest}
                                            ref={pinterestRef}
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
                                            defaultValue={pessoaDados.instagram}
                                            ref={instagramRef}
                                            onChange={e => xInstagram(e.target.value)}
                                        />
                                    </div>

                                </div>
                                : null
                            }               

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Alterar</button>
                        </form>
                        {error
                            ? <div className="font-weight-bold alert alert-danger text-center mt-4">Todos os campos são obrigatórios</div>
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PessoaDados_A