import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../../config/axios'

import Empreend_TelefonesNome from './Empreend_TelefonesNome'

const Empreend_Telefones = ({ history }) => {

    const [telefones, xTelefones] = useState([])
    const [mostrar, xMostrar] = useState(false)
    const [nomeAbuscar, xNomeAbuscar] = useState('')
    const [mostrarTelefones, xMostrarTelefones] = useState(false)

    const onSubmit = (e) => {

        e.preventDefault()

        clienteAxios.get(`/agendatelefonica/${nomeAbuscar}`)
            .then(resposta => {
                xMostrar(true)
                const contatos = resposta.data[0]
                xTelefones(contatos.contatos)
                xMostrarTelefones(true)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const limparTelefones = () => (
        xNomeAbuscar(''),
        xMostrarTelefones(false)
    )

    return (
        <div>
            <div className="intra-card" style={{background: 'Aquamarine', marginBottom: 0}}>

                <form onSubmit={onSubmit}>
                        <div style={{display: 'flex', margin: 0, justifyContent: 'space-between', fontWeight: 'bold', color: 'black'}}>
                        <button type="submit" class="btn btn-transparent text-dark">Buscar Telefone <span style={{padding: '5px'}}><i class="fas fa-search"></i></span></button>
                        <button type="button" class="btn btn-transparent text-dark ml-3"
                            onClick={() => limparTelefones()}
                        >Fechar <span style={{fontWeight: 'bold', padding: '5px'}}>X</span></button>

                        </div>
                    <div class="form-group mt-3">
                        <input
                            type="text"
                            class="form-control"
                            value={nomeAbuscar}
                            onChange={e => xNomeAbuscar(e.target.value)}
                        />

                    </div>
                </form>



                {/* <button 
                    onClick={() => {getContatos('AMILTON')}}
                    className="btn btn-primary " 
                    style={{ width: '100%', 
                            padding: '7px', 
                            fontSize: '20px', 
                            marginBottom: '4px',
                            fontWeigt: 'bold', 
                            marginTop: '0', 
                            justifyContent: 'flex-start' 
                            }}>Telefones
            </button> */}

                {/* <Link to={"/telefone"} className="btn btn-primary "
                style={{
                    width: '100%',
                    padding: '6px',
                    fontSize: '20px',
                    fontWeigt: 'bold',
                    marginTop: '0',

                    justifyContent: 'flex-start'
                }}>
                Telefones
            </Link> */}

            </div>

            {
                mostrar
                    ? <div>
                        {
                            telefones
                                ? telefones.map(pessoa => (
                                    mostrarTelefones
                                    ? <Empreend_TelefonesNome contatos={pessoa} />
                                    : null
                                ))
                                : null
                        }
                    </div>
                    : null
            }

        </div>
    )
}
export default Empreend_Telefones