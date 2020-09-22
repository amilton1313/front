import React, { Component } from 'react'
import { login } from '../auth/authActions'


import logo from '../common/img/logo-cota.jpg'
import '../common/common.css'
import './Login.css'
import '../../css/erp.css'

class Login extends Component {

  state = {
      usuario: "fabio",
      senha: "1111"
  }

  handleChange = event => {
    if (event.target.name === "usuario") {
      this.setState({
          ...this.state,
          [event.target.name]: event.target.value.toLowerCase()
      })
    } else {
      this.setState({
          ...this.state,
          [event.target.name]: event.target.value
      })
    }
  }


  onSubmit = () => {
    
  }

  render() {
    return (
      <main className="login-main">

        <div>
          <img className="login-logo" src={logo} alt="logo" />
        </div>

        <div className="al-center">
          <h3 className="login-titulo">Propostas Comerciais</h3>
        </div>

        <div>
          <form className="login-form" onSubmit={this.onSubmit}>

            <div className="login-grupo">
              <label className="login-label">Usuário</label>
              <input autoComplete="off"
                className="login-input minusculas" type="text"
                value={this.state.usuario}
                onChange={this.handleChange}
                name="usuario"
              />
            </div>

            <div className="login-grupo">
              <label className="login-label">Senha</label>
              <input autoComplete="nope"
                className="login-input"
                type="password"
                value={this.state.senha}
                onChange={this.handleChange}
                name="senha"
              />
            </div >

            <div className="login-grupo-botao">
              <button type="button"  className="btn btn-primary login-botao">Entrar</button>
            </div>

          </form>
        </div>
      </main>
    )

  }
}

export default Login;
