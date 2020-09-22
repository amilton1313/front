import React from 'react'
import { Link } from 'react-router-dom'

import './principal.css'

const PrincipalMenu = () => {
    return (
        <div className="pri-menu">
                <Link to={"/portal/poempreendimentoslista"}  className="pri-card"  >
                    Imagens do Portal
                </Link>

                <Link to={"/empreendimento/empreendimentosLista"}  className="pri-card"  >
                    Empreendimentos
                </Link>


                <Link to={"/pessoa/pessoasLista"}  className="pri-card" >
                    Pessoas
                </Link>
        </div>
    )
}

export default PrincipalMenu