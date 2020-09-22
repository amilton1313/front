import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button, Jumbotron, Table } from 'react-bootstrap'
import ReactList from 'react-list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import './propo.css'

const PropostaValores = () => {

    const unidades = [
        { id_unidade: 34, blocox: 'Aurora', numero: '404', garagensx: '25 e 36', depositosx: '65 e 21' },
        { id_unidade: 35, blocox: 'Aurora', numero: '502', garagensx: '25 e 40', depositosx: '70 e 75' },
    ]

    return (
        <>
            <Jumbotron>
                <h1>
                  valores  
                </h1>

            </Jumbotron>

        </>
    );
}

export default PropostaValores;