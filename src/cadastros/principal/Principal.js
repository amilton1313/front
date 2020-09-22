import React from 'react'
import { useSelector } from 'react-redux'

import Login from "../login/Login"
import LoginCpf from "../login/LoginCpf"
import PessoasLista from "../pessoa/PessoasLista"
import PrincipalMenu from "../principal/PrincipalMenu"
import PoEmpreendimentosLista from '../../cadastros/portal/PoEmpreendimentosLista'

import './principal.css'

const Principal = () => {

    const auth = useSelector(state => state.auth.auth)

    return (
        <div>
            <PrincipalMenu />
            {/* <PoEmpreendimentosLista /> */}
        </div>
    )
}

export default Principal


