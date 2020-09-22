import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'




import { ac_obterEmpreendimentos, ac_descargaEmpreendimentosFiltrado } from '../../actions/ac_empreendimento'

import ModalPadrao from '../modal/ModalPadrao'

import Spinner from '../../spinner/Spinner'

const EmpreendimentosLista = ({ history }) => {

    const [mostrarModal, xMostrarModal] = useState(true)
    const [show, setShow] = useState(false);
    const [linha, xLinha] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const mostrarSelecionado = (item) => {
        console.log(item)
    }

    const iii = [
        { id_empreendimento: 1, nome: 'AAAAAAAAAAA'},
        { id_empreendimento: 2, nome: 'BBBBBBBBBBB'},
        { id_empreendimento: 3, nome: 'CCCCCCCCCCC'},
    ]

    return (
        <React.Fragment>

            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalPadrao">
            <i class="far fa-folder-open"></i>
            </button>

            <div class="modal fade" id="modalPadrao" tabindex="-1" role="dialog">
                <ModalPadrao
                    itens={iii}
                    id='id_empreendimento'
                    descricao='nome'
                    titulo="Lista de Empreendimentos"
                    mostrarSelecionado={mostrarSelecionado} />
            </div>

            {error
                ? <div className="font-weight-bold alert alert-danger text-center">
                    Houve um erro...
                </div>
                : null}

            <div style={{ display: 'flex' }}>
                <div style={{ flex: '1' }}><h2 className="text-center my-2">Lista de empreendimentos</h2></div>
                <div style={{ display: '3' }}><Link to={"/empreendimento"} className="btn btn-danger nuevo-post d-block d-md-inline-block">
                    Cadastrar +
            </Link></div>

            </div>

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
                            // onClick={() => {
                            //     mostrarSelecionado(empreendimento.nome)
                            //     history.push(`/dados/editar/${empreendimento.id_empreendimento}`)
                            // }}
                        >

                            <td>{empreendimento.id_empreendimento}</td>
                            <td>{empreendimento.nome}</td>
                            <td><Link to={{
                                pathname: "/portal/poempreendimentodoctos",
                                state : {
                                    id_empreendimento: empreendimento.id_empreendimento,
                                    nomeEmpreendimento: empreendimento.nome 
                                }
                                }} 
                                className="btn btn-primary"
                                >Doctos</Link></td>
                            <td><Link to={"/"} className="btn btn-primary" >Unids</Link></td>
                        </tr>

                    ))}
                </tbody>
            </table>


            {loading ? <Spinner /> : null}
        </React.Fragment>
    )
}

export default EmpreendimentosLista