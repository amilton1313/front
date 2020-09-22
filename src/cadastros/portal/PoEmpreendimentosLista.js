import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './portal.css'

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

    return (
        <React.Fragment>

        <div className="tab-container">

            {error
                ? <div className="font-weight-bold alert alert-danger text-center">
                    Houve um erro...
                </div>
                : null}

            <div style={{ flex: '1' }}><h2 className="text-center my-2">Empreendimentos</h2></div>

            <div>
                <label className="loc-label">Localizar: </label>
                <input type="text" name="busca"  className="loc-input"
                    onChange={e => {
                        onBuscar(e.target.value)
                    }
                    }
                />
            </div>

            <div className="tab-linha-cab">
                <div className="cel01">#</div>
                <div className="cel02">NOME</div>
            </div>
            {empreendimentos.map(empreendimento => (

                <div className="tab-linha">
                <div className="cel01">{empreendimento.id_empreendimento}</div>
                <div className="cel02">{empreendimento.nome}</div>
                <div className="tab-linha-botao">
                <Link to={{
                    pathname: "/portal/poempreendimentodoctos",
                    state : {
                        id_empreendimento: empreendimento.id_empreendimento,
                        nomeEmpreendimento: empreendimento.nome 
                    }
                    }} 
                    className=""
                    >Doctos</Link>
                </div>
                <div className="tab-linha-botao">
                <Link to={{
                    pathname: "/portal/poempreendimentoblocos",
                    state : {
                        id_empreendimento: empreendimento.id_empreendimento,
                        nomeEmpreendimento: empreendimento.nome 
                    }
                    }} 
                    >Unids</Link>
                </div>
            </div>

            ))}

            <div>

            </div>

            {loading ? <Spinner /> : null}

            </div>
        </React.Fragment>
    )
}

export default EmpreendimentosLista