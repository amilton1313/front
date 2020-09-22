import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'

import { cepMask, cpfMask, cnpjMask, cpfFormat,
         cnpjFormat, clearFormat, validarCPF, validarCNPJ } from '../../util/util'
import '../../css/erp.css'

import { ac_incluirPessoasDados, ac_obterPessoaDadosCnpj } from '../../actions/ac_pessoa'
// import { ac_validarFormulario, validacionExito, validacionError } from '../actions/ac_validacion'

// import PessoasDados_I from './PessoaDados'
// import PessoasDados_A from './PessoaDados_A'

const PessoaDados = ({ history }) => {

    const [tipo_pessoa, xTipo_pessoa] = useState('Física')
    const [cpf_cnpj, xCpf_cnpj] = useState('')
    const [nome, xNome] = useState('')
    const [cpfValido, xCpfValido] = useState(true)
    const [mensagemCPF, xMensagemCPF] = useState('')
  
    const dispatch = useDispatch()

    useEffect(() => {
        document.getElementById("radioOne").checked = true
      }, [])

    const onHandleTipoPessoa1 = e => {
        xTipo_pessoa(e.target.value)
        document.getElementById('labelCpf').innerHTML = "CPF:"
        xCpf_cnpj(cpfFormat(cpf_cnpj))
        console.log('tipo ', tipo_pessoa)
    }

    const onHandleTipoPessoa2 = e => {
        xTipo_pessoa(e.target.value)
        document.getElementById('labelCpf').innerHTML = "CNPJ:"
        xCpf_cnpj(cnpjFormat(cpf_cnpj))
        console.log('tipo ', tipo_pessoa)
    }

    const onHandleCPF = e => {
        if (tipo_pessoa === 'Física') {
            xCpf_cnpj(cpfMask(e.target.value))
        } else {
            xCpf_cnpj(cnpjMask(e.target.value))
        }
    }

    const direcionaPessoaDados = (direcao, dados) => {
        if (direcao === 'A') {
            history.push({
                pathname: '/pessoaDados_I',
                state: { dados, tipo_pessoa, cpf_cnpj }
                })
        } else {
            history.push({
                pathname: '/pessoaDados_I',
                state: { tipo_pessoa, cpf_cnpj }
                })
        }
    }

    const token = useSelector(state => state.auth.token)

    const onCheckCpf = () => {

        if (tipo_pessoa === 'Física') {
            if (!validarCPF(cpf_cnpj)) xMensagemCPF('CPF inválido')
        } else {
            if (!validarCNPJ(cpf_cnpj)) xMensagemCPF('CNPJ inválido')
        }

        dispatch(ac_obterPessoaDadosCnpj(token, clearFormat(cpf_cnpj), direcionaPessoaDados))

    }

    const onSubmit = e => {
        e.preventDefault()
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
                                    maxLength='18'
                                    className="form-control"
                                    value={cpf_cnpj}
                                    onChange={e => onHandleCPF(e)}
                                    onBlur={() => onCheckCpf()}
                                />
                                <p className="mensagemCPF">{mensagemCPF}</p>
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


                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PessoaDados