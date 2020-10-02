import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button, Jumbotron, Table } from 'react-bootstrap'
import ReactList from 'react-list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMinus, faPlus, faStepForward, faStepBackward, faFastForward, faFastBackward } from '@fortawesome/free-solid-svg-icons'
import './propo.css'

const PropostaNavegacao = () => {

    return (
        <>
            <div>
                <button
                    style={{ border: 'none', backgroundColor: 'transparent', color: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px" }}  
                ><FontAwesomeIcon icon={faFastBackward} /></button>

                <button
                    style={{ border: 'none', backgroundColor: 'transparent', color: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px" }}                   
                ><FontAwesomeIcon icon={faStepBackward} /></button>

                <button
                     style={{ border: 'none', backgroundColor: 'transparent', color: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px" }}                                       
                ><FontAwesomeIcon icon={faStepForward} /></button>

                <button
                    style={{ border: 'none', backgroundColor: 'transparent', color: 'white', padding: '6px 9px', borderRadius: '3px', marginLeft: "5px" }}
                ><FontAwesomeIcon icon={faFastForward} /></button>
            </div>

        </>
    );
}

export default PropostaNavegacao;