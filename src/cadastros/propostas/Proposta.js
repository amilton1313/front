import React, { useState } from 'react'
import { Tabs, Tab, Row, Col, Nav } from 'react-bootstrap'

import PropostaDados from './PropostaDados'
import PropostaUnidades from './PropostaUnidades'
import PropostaValores from './PropostaValores'

const Proposta = () => {

    const [id, SetId] = useState(1)

    return (
        <>
            <h3>Cadastro da Proposta</h3>
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="dados">
                    <Row>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="dados">Dados</Nav.Link>
                                </Nav.Item>
                                {
                                    id 
                                    ? 
                                    <div>
                                <Nav.Item>
                                    <Nav.Link eventKey="unidades">Unidades</Nav.Link>
                                </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link  eventKey="valores">Valores</Nav.Link>
                                </Nav.Item>
                                </div>
                                    : null
                                }

                                
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="dados">
                                <PropostaDados />
                                </Tab.Pane>
                                <Tab.Pane eventKey="unidades">
                                <PropostaUnidades />
                                </Tab.Pane>
                                <Tab.Pane eventKey="valores">
                                <PropostaValores />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                {/* <Tabs defaultActiveKey="proposta" id="uncontrolled-tab-example">
                    <Tab eventKey="proposta" title="Proposta">
                        <PropostaDados />
                    </Tab>
                    <Tab eventKey="unidades" title="Unidades">
                        <PropostaUnidades />
                    </Tab>
                    <Tab eventKey="valores" title="Valores">
                        <div>Valores</div>
                    </Tab>
                </Tabs> */}
            </div>
        </>
    )
}

export default Proposta