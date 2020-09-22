import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


import { ac_obterEmpreendimentos, ac_descargaEmpreendimentosFiltrado } from '../../actions/ac_empreendimento'

import Spinner from '../../spinner/Spinner'

const EmpreendimentosLista = ({ history }) => {

    const dispatch = useDispatch()

    const token = useSelector(state => state.auth.token)

    useEffect(() => {
        dispatch(ac_obterEmpreendimentos(token))
    }, [])


    const loading = useSelector(state => state.empreendimentos.loading)
    const error = useSelector(state => state.empreendimentos.error)
    let empreendimentos = useSelector(state => state.empreendimentos.empreendimentos)
    const empreendimentosFull = useSelector(state => state.empreendimentos.empreendimentosFull)


    const onBuscar = aa => {

        const busca = new Promise((resolve, reject) => {

            resolve(
                empreendimentosFull.filter(function (pessoa) {
                    const pp = pessoa.nome
                    if (pp) {
                        return pp.toLowerCase().search(
                            aa.toLowerCase()) !== -1
                    }
                })
            )
        }

        )

        busca
            .then(res => {
                empreendimentos = res
                dispatch(ac_descargaEmpreendimentosFiltrado(empreendimentos))
            }
            )
    }
    

    return (
        <React.Fragment>
            {error
                ? <div className="font-weight-bold alert alert-danger text-center">
                    Houve um erro...
                </div>
                : null}

                <div style={{display: 'flex'}}>
                    <div style={{flex: '1'}}><h2 className="text-center my-2">Lista de empreendimentos</h2></div>
                    <div style={{display: '3'}}><Link to={"/empreendimento"} className="btn btn-danger nuevo-post d-block d-md-inline-block">
                Cadastrar +
            </Link></div>

                </div>

            {/* <h2 className="text-center my-5">Lista de empreendimentos</h2> */}

            <div>
                <input type="text" name="busca"
                    onChange={e => {
                        onBuscar(e.target.value)
                    }
                    }
                />
            </div>

            <table className="table table-sm table-striped table-hover">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {empreendimentos.map(empreendimento => (

                        <tr
                            onClick={() => {
                                history.push(`/dados/editar/${empreendimento.id_empreendimento}`)
                            }}
                        >

                            <td>{empreendimento.id_empreendimento}</td>
                            <td>{empreendimento.nome}</td>
                        </tr>

                    ))}
                </tbody>
            </table>


            {loading ? <Spinner /> : null}

            {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


        </React.Fragment>
    )
}

export default EmpreendimentosLista