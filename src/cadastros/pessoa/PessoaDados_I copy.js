import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'

import { cepMask, cpfMask, cnpjMask, cpfFormat, cnpjFormat, clearFormat } from '../../util/util'
import '../../css/erp.css'

import { ac_incluirPessoasDados, ac_obterPessoaDadosCnpj } from '../../actions/ac_pessoa'
// import { ac_validarFormulario, validacionExito, validacionError } from '../actions/ac_validacion'

const PessoaDados = ({ history }) => {

    const [tipo_pessoa, xTipo_pessoa] = useState('')
    const [cpf_cnpj, xCpf_cnpj] = useState('111')
    const [nome, xNome] = useState('')
    const [endereco, xEndereco] = useState('')
    const [complemento, xComplemento] = useState('')
    const [bairro, xBairro] = useState('')
    const [municipio, xMunicipio] = useState('')
    const [uf, xUf] = useState('')
    const [cep, xCep] = useState('')
    const [correspondencia, xCorrespondencia] = useState('')
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
    const [num_creci, xNum_creci] = useState('')
    const [adm, xAdm] = useState('')
    const [admin, xAdmin] = useState('')
    const [onChangeCpf, xOnChangeCpf ] = useState('')

    
    useEffect(() => {
        
    }, [])



    const dispatch = useDispatch()
    // const incluirPessoaDados = (pessoa) => dispatch(ac_incluirPessoasDados(pessoa))
    // const validarFormulario = () => dispatch(ac_validarFormulario())
    // const exitoValidacion = () => dispatch(validacionExito())
    // const errorValidacion = () => dispatch(validacionError())

    // const error = useSelector((state) => state.error.error)
    const error = ''

    const onSubmit = e => {
        e.preventDefault()

        console.log('submit')

        // validarFormulario()

        // if (nombre === '' || precio === '') {
        //     errorValidacion()
        //     return
        // }

        // exitoValidacion()

        const pessoa = {
            tipo_pessoa: parseInt(tipo_pessoa),
            cpf_cnpj,
            nome,
            endereco,
            complemento,
            bairro,
            municipio,
            uf,
            cep,
            correspondencia: parseInt(correspondencia),
            cod_msm: parseInt(cod_msm),
            codigo_contabilidade: parseInt(codigo_contabilidade),
            apelido,
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
        console.log('antes')
        // ac_incluirPessoasDados(pessoa)
        dispatch(ac_incluirPessoasDados(pessoa))

        // agregarProducto({
        //     nombre,
        //     precio
        // })

        // history.push('/')
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

    // const _nome = useSelector(state => state.pessoas.pessoa.nome)
    const atualizaPessoaDados = () => {
        history.push('/pessoasLista')
    }

    const token = useSelector(state => state.auth.token)

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
                                            type="radio"
                                            disabled
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
                                            type="radio"
                                            disabled
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
                                <label id="labelCpf" className="labelForm">CPF/CNPJ:</label>
                                <input
                                    id="inputCpf"
                                    type="tel"
                                    disabled
                                    maxLength='18'
                                    className="form-control"
                                    value={cpf_cnpj}
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

                            <div className="form-group">
                                <label className="labelForm">UF:</label>
                                <select>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                {/* <input
                                    type="text"
                                    maxLength="2"
                                    className="form-control maiusculas"
                                    value={uf}
                                    onChange={e => xUf(e.target.value)}
                                /> */}
                            </div>

                            {/* *** Num CRECI *** */}

                            <div className="form-group">
                                <label className="labelForm">Num CRECI:</label>
                                <input
                                    type="text"
                                    maxLength="20"
                                    className="form-control"
                                    value={num_creci}
                                    onChange={e => xNum_creci(e.target.value)}
                                />
                            </div>

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

                            


                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Incluir</button>
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