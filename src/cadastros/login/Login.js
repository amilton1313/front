import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import bcrypt from 'bcryptjs'

import './Login.css'

import { ac_obterAutorizacao } from '../../actions/ac_auth'

// import aa from '../../img/logo-cota.jpg'

const Login = ({ history }) => {

    const [nome, xNome] = useState('')
    const [senha, xSenha] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(ac_obterAutorizacao(
            {
                nome,
                senha: bcrypt.hashSync(senha)
            }
        ))
    }

    const erro = useSelector(state => state.auth.erro)
    const auth = useSelector(state => state.auth.auth)

    const titulo = "Sistema COTA"    

    return (
        <main className="login-main">

            <div>
                <img className="login-logo" src="../../img/logo-cota.jpg" alt="logo" />
            </div>

            <div className="al-center">
                <h3 className="login-titulo">{titulo}</h3>
            </div>

            <div>
                <form onSubmit={onSubmit}>

                    {/* *** Nome *** */}

                    <div className="form-group">
                        <label className="labelForm">Nome:</label>
                        <input
                            type="text"
                            className="form-control minusculas"
                            value={nome}
                            onChange={e => xNome(e.target.value)}
                        />
                    </div>

                    {/* *** Senha *** */}

                    <div className="form-group">
                        <label className="labelForm">Senha:</label>
                        <input
                            type="password"
                            className="form-control"
                            value={senha}
                            onChange={e => xSenha(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Entrar</button>
                </form>
                {erro
                    ? <div className="font-weight-bold alert alert-danger text-center mt-4">Usuário não encontrado</div>
                    : null
                }
                </div>
                </main>
                )
          
          
          }
           
export default Login