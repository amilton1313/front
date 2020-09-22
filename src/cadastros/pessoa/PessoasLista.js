import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


import { ac_obterPessoasDados, ac_descargaPessoasFiltrado } from '../../actions/ac_pessoa'

import Spinner from '../../spinner/Spinner'

const PessoasLista = ({ history }) => {

    const dispatch = useDispatch()

    const token = useSelector(state => state.auth.token)

    useEffect(() => {
        dispatch(ac_obterPessoasDados(token))
    }, [])


    const loading = useSelector(state => state.pessoas.loading)
    const error = useSelector(state => state.pessoas.error)
    let pessoas = useSelector(state => state.pessoas.pessoas)
    const pessoasFull = useSelector(state => state.pessoas.pessoasFull)


    const onBuscar = aa => {

        const busca = new Promise((resolve, reject) => {

            resolve(
                pessoasFull.filter(function (pessoa) {
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
                pessoas = res
                dispatch(ac_descargaPessoasFiltrado(pessoas))
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
                    <div style={{flex: '1'}}><h2 className="text-center my-2">Lista de Pessoas</h2></div>
                    <div style={{display: '3'}}><Link to={"/pessoa/pessoadados"} className="btn btn-danger nuevo-post d-block d-md-inline-block">
                Cadastrar +
            </Link></div>

                </div>

            {/* <h2 className="text-center my-5">Lista de Pessoas</h2> */}

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
                    {pessoas.map(pessoa => (

                        <tr
                            onClick={() => {
                                history.push({
                                    pathname: '/pessoa/mostrar/2',
                                    state: { id: pessoa.id_pessoa }
                                  }
                                    
                                    )
                            }}
                        >



                            <td>{pessoa.id_pessoa}</td>
                            <td>{pessoa.nome}</td>
                        </tr>

                    ))}
                </tbody>
            </table>


            {loading ? <Spinner /> : null}
        </React.Fragment>
    )
}

export default PessoasLista