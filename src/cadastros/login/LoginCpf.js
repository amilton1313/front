import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import bcrypt from 'bcryptjs'

import { ac_obterAutorizacaoCpf } from '../../actions/ac_auth'

const Login = ({ history }) => {

    const [usuario, xCpf] = useState('')
    const [senha, xSenha] = useState('')
    
    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(ac_obterAutorizacaoCpf(
            {
                usuario,
                senha: bcrypt.hashSync(senha)
            }
        ))
    }



    const erro = useSelector(state => state.auth.erro)
    const auth = useSelector(state => state.auth.auth) 


    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Login</h2>
                        <form onSubmit={onSubmit}>

                            {/* *** cpf *** */}

                            <div className="form-group">
                                <label className="labelForm">cpf:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={usuario}
                                    onChange={e => xCpf(e.target.value)}
                                />
                            </div>

                            {/* *** Senha *** */}

                            <div className="form-group">
                                <label className="labelForm">Senha:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={senha}
                                    onChange={e => xSenha(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Incluir</button>
                        </form>
                        {erro
                            ? <div className="font-weight-bold alert alert-danger text-center mt-4">Usuário não encontrado</div>
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
      )


}
 
export default Login