import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button, Jumbotron, Table } from 'react-bootstrap'
import ReactList from 'react-list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import './propo.css'

const PropostaValores2 = () => {

    const [tipo, setTipo] = useState(1)
    const [valor, setValor] = useState(null)

    const itensValores = [
        {id: 1, tipo: "Ato", valor: 123456.00, vcto: '01/01/2020', qtde: 10, periodo: 'Anual', total: 123456.00},
        {id: 1, tipo: "Mensais", valor: 123456.00, vcto: '01/01/2020', qtde: 10, periodo: 'Anual', total: 123456.00},
        {id: 1, tipo: "Reforços", valor: 123456.00, vcto: '01/01/2020', qtde: 10, periodo: 'Anual', total: 123456.00}
    ]

    return (
        <>
            <Jumbotron style={{ minHeight: '200px', paddingLeft: 0, paddingTop: '10px' }}>
            <Table borderless size="sm">
                <thead>
                    <tr>
                        <th style={{ width: "20%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white", paddingLeft: '10px' }}>Tipo</th>
                        <th style={{ width: "16%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Valor</th>
                        <th style={{ width: "16%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Vencimento</th>
                        <th style={{ width: "16%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Quantidade</th>
                        <th style={{ width: "16%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Periodicidade</th>
                        <th style={{ width: "16%", backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>Total</th>
                        <th><span
                            style={{ backgroundColor: '#0069D9', color: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px" }}
                            onClick={(event) => {}}
                        ><FontAwesomeIcon icon={faPlus} /></span></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itensValores.map(item => (
                            <tr>
                                <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white", paddingLeft: '10px' }}>{item.tipo}</td>
                                <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>{item.valor}</td>
                                <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>{item.vcto}</td>
                                <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>{item.qtde}</td>
                                <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>{item.periodo}</td>
                                <td style={{ backgroundColor: "lightgrey", color: 'grey', borderBottom: "1px solid white" }}>{item.total}</td>
                                <td >
                                    <span
                                        style={{ backgroundColor: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px" }}
                                        onClick={() => {}}
                                        ><FontAwesomeIcon icon={faMinus} /></span>

                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </Table>
            </Jumbotron>

        </>
    );
}

export default PropostaValores2;