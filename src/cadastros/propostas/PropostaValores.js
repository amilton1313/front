import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button, Jumbotron, Table } from 'react-bootstrap'
import ReactList from 'react-list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import './propo.css'
import PropostaValores1 from './PropostaValores1'
import PropostaValores2 from './PropostaValores2'

const PropostaValores = () => {

    const [tipo, setTipo] = useState(1)
    const [valor, setValor] = useState(null)

    return (
        <>

        <div>
            <div>
        <PropostaValores1 />
            </div>
            <div>
        <PropostaValores2 />
            </div>

        </div>


        </>
    );
}

export default PropostaValores;