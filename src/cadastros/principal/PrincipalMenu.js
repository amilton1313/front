import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './principal.css'

const PrincipalMenu = () => {

    const { id_pessoa } = useSelector(state => state.auth)
    console.log('id_pessoa', id_pessoa)

    return (
        <div className="pri-menu">
                <Link to={"/portal/poempreendimentoslista"}  className="btn btn-primary"  >
                    Imagens do Portal
                </Link>
                &nbsp;

                {
                    id_pessoa === 2
                    ?   <>
                            <Link to={"/empreendimento/empreendimentosLista"}  className="btn btn-primary"  >
                                Empreendimentos
                            </Link>
                            &nbsp;
                            
                            <Link to={"/pessoa/pessoasLista"}  className="btn btn-primary" >
                                Pessoas
                            </Link>
                            &nbsp;
                            <Link to={"/proposta"}  className="btn btn-primary" >
                                Propostas
                            </Link>
                            &nbsp;
                            <Link to={"/proposta2"}  className="btn btn-primary" >
                                Propostas2
                            </Link>
                            &nbsp;
                        </>
                    : null

                }

                
                


        </div>
    )
}

export default PrincipalMenu