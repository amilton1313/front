import React from 'react'
import { Link } from 'react-router-dom'
import { white } from 'ansi-colors'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <h1>
                <Link to={"/"} style={tituloStyle}>
                    COTA Empreendimentos Imobiliários Ltda
                </Link>
            </h1>
            <Link to={"/"} className="btn btn-danger nuevo-post d-block d-md-inline-block">
                Intranet
            </Link>
            <Link to={"/erp"} className="btn btn-danger nuevo-post d-block d-md-inline-block">
                ERP
            </Link>

            <button className="btn btn-primary" value="xxxx" />

        </nav>
    )
}

const tituloStyle = {
        color: 'white',
        fontSize: 25,
        textDecoration: 'none'
}

export default Header