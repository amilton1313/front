import React, { Fragment } from 'react'

import '../css/headerIntranet.css'
import logo from '../img/logo-intra.png'
import botaoMenu from '../img/botao-menu.png'
import predios from '../img/predios.png'
import { Link } from 'react-router-dom'

const IntranetHeader = () => {
    const meuToggle = (elemento) => { }

    return (
        <Fragment>

            <div style={{ background: 'LightGray' }}>
                {/* <div style={{backgroundImage: 'url({predios})'}}> */}
                <nav class="navbar navbar-custom navbar-expand-lg  text-dark"
                    style={{ borderRadius: '5px' }}>
                    <a className="navbar-brand text-dark" href="#">
                        <img src={logo} alt="" className="logo-intra" />
                    </a>
                    <button className="navbar-toggler" style={{ outline: 'none' }} type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                        {/* <span ><span className="navbar-toggler-icon container-botao-menu" style={{ display: 'flex', justifyContent: 'center' }}><img className="botao-menu" src={botaoMenu} /></span></span> */}
                        <span ><span className="navbar-toggler-icon container-botao-menu d-flex justify-content-center"><i className="fas fa-bars" style={{ fontSize: '1.5rem' }}></i></span></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                            <li class="nav-item dropdown">
                                <a class="nav-link text-dark dropdown-toggle" data-toggle="dropdown" href="#" role="button">Empreendimentos</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">America Officenter</a>
                                    <a class="dropdown-item" href="#">City Office Square</a>
                                    <a class="dropdown-item" href="#">Green Village Residence</a>
                                    <a class="dropdown-item" href="#">Horizonte Novo Estreito</a>
                                    <a class="dropdown-item" href="#">Horizonte Novo Estreito</a>
                                    <a class="dropdown-item" href="#">Max & Flora Center</a>
                                    <a class="dropdown-item" href="#">Paço Imperial</a>
                                    <a class="dropdown-item" href="#">Porto Atlântico</a>
                                    <a class="dropdown-item" href="#">Porto Mare Residence</a>
                                    <a class="dropdown-item" href="#">Punta Blu Mall Boutique</a>
                                    <a class="dropdown-item" href="#">Punta Blu Residence</a>
                                    <a class="dropdown-item" href="#">Solar de Gaia</a>
                                    <a class="dropdown-item" href="#">Sun Village Residence</a>
                                    <a class="dropdown-item" href="#">The Office Avenida</a>
                                    <a class="dropdown-item" href="#">The Office Business Center</a>
                                    <a class="dropdown-item" href="#">Urban Classic</a>
                                    <a class="dropdown-item" href="#">Vivaz Condomínio Jardim</a>
                                    {/* <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a> */}
                                </div>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link text-dark dropdown-toggle" data-toggle="dropdown" href="#" role="button">Administrativo</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#" target="_blank">Organograma</a>
                                    <a class="dropdown-item" href="#" target="_blank">Manual de Funções</a>
                                    <a class="dropdown-item" href="#" target="_blank">Normas Internas</a>
                                </div>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link text-dark dropdown-toggle" data-toggle="dropdown" href="#" role="button">Notícias</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="https://www.globo.com" target="_blank">Globo</a>
                                    <a class="dropdown-item" href="https://oglobo.globo.com" target="_blank">Jornal O Globo</a>
                                    <a class="dropdown-item" href="https://www.folha.uol.com.br" target="_blank">Folha de São Paulo</a>
                                    <a class="dropdown-item" href="http://www.estadao.com.br" target="_blank">Jornal Estado de São Paulo</a>
                                    <a class="dropdown-item" href="https://veja.abril.com.br" target="_blank">Revista Veja</a>
                                    <a class="dropdown-item" href="https://epoca.globo.com" target="_blank">Revista Época</a>
                                    <a class="dropdown-item" href="https://istoe.com.br" target="_blank">Revisa Isto É</a>
                                    <a class="dropdown-item" href="https://www.nsctotal.com.br/dc" target="_blank">NSC Total</a>
                                    <a class="dropdown-item" href="https://ndmais.com.br" target="_blank">Notícias do Dia</a>
                                    <a class="dropdown-item" href="http://www.valor.com.br" target="_blank">Valor Econômico</a>
                                    <a class="dropdown-item" href="https://epocanegocios.globo.com" target="_blank">Época Negócios</a>
                                    <a class="dropdown-item" href="https://exame.abril.com.br" target="_blank">Revista Exame</a>
                                    <a class="dropdown-item" href="https://www.terra.com.br" target="_blank">Terra</a>
                                    <a class="dropdown-item" href="https://www.uol.com.br" target="_blank">UOL</a>
                                </div>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link text-dark dropdown-toggle" data-toggle="dropdown" href="#" role="button">Bancos</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="http://www.bradesco.com.br" target="_blank">Bradesco</a>
                                    <a class="dropdown-item" href="http://www.bb.com.br" target="_blank">Banco do Brasil</a>
                                    <a class="dropdown-item" href="file:///C:/BancoBrasil/officeIE/index.html" target="_blank">Brasil - Office</a>
                                    <a class="dropdown-item" href="http://www.caixa.gov.br" target="_blank">CEF</a>
                                    <a class="dropdown-item" href="https://www.secureweb.com.br" target="_blank">Real</a>
                                    <a class="dropdown-item" href="http://www.safraempresas.com.br" target="_blank">Safra</a>
                                    <a class="dropdown-item" href="http://www.santander.com.br" target="_blank">Santander</a>
                                    <a class="dropdown-item" href="http://www.credicard.com.br/home/default.htm" target="_blank">Credicard</a>
                                    <a class="dropdown-item" href="http://www.itau.com.br/empresas" target="_blank">Itau</a>
                                    <a class="dropdown-item" href="http://www.bancointer.com.br" target="_blank">Inter</a>
                                    <a class="dropdown-item" href="https://www.sicredi.com.br" target="_blank">Sicredi</a>
                                </div>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link text-dark dropdown-toggle" data-toggle="dropdown" href="#" role="button">Órgãos Públicos</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="http://www.presidencia.gov.br" target="_blank">Presidência - Planalto</a>
                                    <a class="dropdown-item" href="http://www.jfsc.gov.br" target="_blank">Tribunal de Justiça Federal - SC</a>
                                    <a class="dropdown-item" href="http://www.tj.sc.gov.br" target="_blank">Tribunal de Justiça - SC</a>
                                    <a class="dropdown-item" href="http://www.receita.fazenda.gov.br" target="_blank">Receita Federal</a>
                                    <a class="dropdown-item" href="http://www.previdenciasocial.gov.br" target="_blank">Previdência Social</a>
                                    <a class="dropdown-item" href="http://www.sef.sc.gov.br" target="_blank">Fazenda Estadual</a>
                                    <a class="dropdown-item" href="http://www.jucesc.sc.gov.br" target="_blank">Junta Comercial de SC</a>
                                    <a class="dropdown-item" href="http://www.pmf.sc.gov.br" target="_blank">Prefeitura Mun. Florianópolis</a>
                                    <a class="dropdown-item" href="http://sefinnet.pmf.sc.gov.br" target="_blank">Fazenda Municipal</a>
                                    <a class="dropdown-item" href="http://www.sinduscon-fpolis.org.br" target="_blank">Sinduscon - Fpolis</a>
                                    <a class="dropdown-item" href="http://www.connectsa.com.br" target="_blank">SPC</a>
                                </div>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link text-dark dropdown-toggle" data-toggle="dropdown" href="#" role="button">Sites Úteis</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="http://www.financiamento.com.br/simulador/" target="_blank">Simulador de Financiamento</a>
                                    <a class="dropdown-item" href="http://www.buscacep.correios.com.br" target="_blank">CEP</a>
                                    <a class="dropdown-item" href="http://www.cota.com.br" target="_blank">COTA</a>
                                    <a class="dropdown-item" href="http://www.crea-sc.org.br" target="_blank">CREA</a>
                                    <a class="dropdown-item" href="http://www.google.com.br" target="_blank">Google</a>
                                    <a class="dropdown-item" href="http://www.horariodebrasilia.org" target="_blank">Horário Oficial do Brasil</a>
                                    <a class="dropdown-item" href="https://www.codigobanco.com" target="_blank">Código do Banco</a>
                                </div>
                            </li>

                            <li class="nav-item">


                                <Link to={"/erp"} class="nav-link text-dark" >
                                    Sistema
            </Link>
                            </li>


                        </ul>


                    </div>
                </nav>

                {/* <div className="navbar-rodape">
                     </div>            */}
            </div>



        </Fragment>
    )
}

export default IntranetHeader

        //https://www.youtube.com/watch?v=TLEwZZlB6Bs recovery senha
//https://www.youtube.com/watch?v=TLEwZZlB6Bs menu accordion

/**
 *
 *             <div class="accordion" id="accordionExample">

                <div>
                    <button class="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne">
                        aaaaaa
                </button>

                    <div id="collapseOne"
                        class="collapse show"
                        data-parent="#accordionExample">

                        <ul>
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" >Dropdown</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
 */