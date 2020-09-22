import React, { useState } from 'react'

import MensagemCub from './MensagemCub'
import MensagemText from './MensagemText'
import MensagemNiver from './MensagemNiver'
import MensagemNiver2 from './MensagemNiver2'
import MensagemImg from './MensagemImg'
import Empreend_Telefones from '../telefones/Empreend_Telefones'

const MensagensLista = () => {

    const [tamanhoTela, xTamanhoTela] = useState(window.innerWidth)

    window.addEventListener('resize', function () {
        xTamanhoTela(window.innerWidth)
    });

    return (
        <div>
            <MensagemCub />
            {
                tamanhoTela < 700
                    ? <div style={{ marginLeft: '8px', width: '100%' }}>
                        <Empreend_Telefones style={{ marginLeft: '10px' }} />
                    </div>
                    : null
            }

            {/* ************************  niver cota */}
            <MensagemText
                titulo="Aniversário"
                data="13/08/2020"
                cor="red"
                texto={
                    <p class="card-text" style={{ fontSize: '1.1em', textAlign: 'justify' }}>
                        <br />
                    Bom dia colaboradores !
                    <br />
                        <br />
                        46 anos de vida. Parabéns por fazer parte
                        da história de Santa Catarina.
                    <br />
                        <br />
                    A Diretoria
                </p>
                } />

            {/* ************************ niver Tania */}
            <MensagemNiver
                titulo="Aniversário"
                data="12/08/2020"
                cor="#28A745"
                img="img/aniv04.png"
                nome="TANIA"
                local="(Financeiro)"
                dataExt="12/agosto - Quarta-feira"
            />

            {/* ************************ niver Fábio */}
            <MensagemNiver
                titulo="Aniversário"
                data="01/07/2020"
                cor="steelblue"
                img="img/aniv11.png"
                nome="FÁBIO"
                local="(Diretoria)"
                dataExt="01/julho - Quarta-feira"
            />

            {/* ************************ niver Amilton */}
            <MensagemNiver
                titulo="Aniversário"
                data="15/06/2020"
                cor="#28A745"
                img="img/aniv01.png"
                nome="AMILTON"
                local="(TI)"
                dataExt="13/junho - Sábado"
            />

            {/* ************************ niver Liliane */}
            <MensagemNiver
                titulo="Aniversário"
                data="20/05/2020"
                cor="steelblue"
                img="img/aniv04.png"
                nome="LILIANE"
                local="(Diretoria)"
                dataExt="20/maio - Quarta-feira"
            />

            {/* ************************ niver Aline */}
            <MensagemNiver
                titulo="Aniversário"
                data="04/05/2020"
                cor="#28A745"
                img="img/aniv12.png"
                nome="ALINE"
                local="(Engenharia)"
                dataExt="04/maio - Segunda-feira"
            />

            {/* ************************ niver Heliane */}
            <MensagemNiver
                titulo="Aniversário"
                data="27/04/2020"
                cor="steelblue"
                img="img/aniv11.png"
                nome="HELIANE"
                local="(Financeiro)"
                dataExt="26/abril - Domingo"
            />

            {/* ************************ niver Marco */}
            <MensagemNiver
                titulo="Aniversário"
                data="24/04/2020"
                cor="#28A745"
                img="img/aniv01.png"
                nome="MARCO"
                local="(Engenharia)"
                dataExt="24/abril - Sexta-feira"
            />


            {/* ************************ Expediente - Recesso COVID-19 */}
            <MensagemText
                titulo="Recesso COVID-19"
                data="18/03/2020"
                cor="red"
                texto={
                    <p class="card-text" style={{ fontSize: '1.5rem' }}>
                        <br />
                        <span style={{ fontWeight: 'bold' }}>Encerramento:</span>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue' }}>Admin/Assist. Técnica : </span></div>
                            <div><span>Dia 18/MAR/2020, quarta-feira, às 15:30 </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green' }}>Obras (BLISS) : </span></div>
                            <div><span>Dia 18/MAR/2020, quarta-feira, às 15:30 </span></div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Retorno:</span>

                        </div>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue' }}>Admin/Assist. Técnica : </span></div>
                            <div><span>Dia 25/MAR/2020, quarta-feira, no horário normal </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green' }}>Obras (BLISS) : </span></div>
                            <div><span>Dia 30/MAR/2020, segunda-feira, no horário normal </span></div>
                        </div>
                        <br />

                    </p>

                } />

            {/* ************************ Expediente - Carnaval 2020 */}
            <MensagemText
                titulo="Expediente - Carnaval"
                data="18/02/2020"
                cor="red"
                texto={
                    <p class="card-text" style={{ fontSize: '1.5rem' }}>
                        <br />
                        <span style={{ fontWeight: 'bold' }}>Encerramento:</span>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue' }}>Administração : </span></div>
                            <div><span>Dia 21/FEV/2020, sexta-feira, no horário normal </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green' }}>Obras : </span></div>
                            <div><span>Dia 21/FEV/2020, sexta-feira, no horário normal </span></div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Retorno:</span>

                        </div>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue' }}>Administração : </span></div>
                            <div><span>Dia 26/FEV/2020, quarta-feira, às 13:30 </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green' }}>Obras : </span></div>
                            <div><span>Dia 26/FEV/2020, quarta-feira, no horário normal </span></div>
                        </div>
                        <br />

                    </p>

                } />

            {/* ************************ niver Sueli */}
            <MensagemNiver
                titulo="Aniversário"
                data="05/02/2020"
                cor="#steelblue"
                img="img/aniv03.png"
                nome="SUELI"
                local="(Recursos Humanos)"
                dataExt="05/fevereiro - Quarta-feira"
            />

            {/* ************************ niver Luize */}
            <MensagemNiver
                titulo="Aniversário"
                data="20/01/2020"
                cor="#28A745"
                img="img/aniv01.png"
                nome="LUIZE"
                local="(Secretária)"
                dataExt="19/janeiro - Domingo"
            />

            {/* ************************ bolinho vanessa */}
            <MensagemText
                titulo="Aniversário"
                data="14/11/2019"
                cor="steelblue"
                texto={<p class="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span style={{ color: 'blue' }}>Cinira</span>, comemorando seu aniversário, convida a
                todos para aquele tradicional
                <span style={{ color: 'green' }}>
                        <strong>
                            <em> bolinho</em>
                        </strong>
                    </span>, hoje, às 16:30, no 11º andar (copa).
            </p>} />

            {/* ************************ niver Cinira */}
            <MensagemNiver
                titulo="Aniversário"
                data="14/11/2019"
                cor="steelblue"
                img="img/aniv06.png"
                nome="CINIRA"
                local="(Contabilidade)"
                dataExt="15/novembro - Sexta-feira"
            />

            {/* ************************ niver David */}
            <MensagemNiver
                titulo="Aniversário"
                data="11/11/2019"
                cor="#28A745"
                img="img/aniv03.png"
                nome="DAVID"
                local="(Compras)"
                dataExt="11/novembro - Segunda-feira"
            />

            {/* ************************ Expediente - Fim de Ano 2019 */}
            <MensagemText
                titulo="Expediente - Fim de Ano"
                data="07/11/2019"
                cor="red"
                texto={
                    <p class="card-text" style={{ fontSize: '1.5rem' }}>
                        <br />
                        <span style={{ fontWeight: 'bold' }}>Encerramento:</span>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue' }}>Administração : </span></div>
                            <div><span>Dia 18/DEZ/2019, quarta-feira, no horário normal </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green' }}>Obras : </span></div>
                            <div><span>Dia 20/DEZ/2019, sexta-feira, no horário normal </span></div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Retorno:</span>

                        </div>

                        <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'blue' }}>Administração : </span></div>
                            <div><span>Dia 06/JAN/2020, segunda-feira, no horário normal </span></div>
                        </div>

                        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'start' }}>
                            <div style={{ width: '200px' }}><span style={{ color: 'green' }}>Obras : </span></div>
                            <div><span>Dia 06/JAN/2020, segunda-feira, no horário normal </span></div>
                        </div>
                        <br />

                    </p>

                } />

            {/* ************************ niver Grasy */}
            <MensagemNiver
                titulo="Aniversário"
                data="31/10/2019"
                cor="steelblue"
                img="img/aniv04.png"
                nome="GRASY"
                local="(Engenharia)"
                dataExt="31/outubro - Quinta-feira"
            />

            {/* ************************ niver Rudmar */}
            <MensagemNiver
                titulo="Aniversário"
                data="29/09/2019"
                cor="steelblue"
                img="img/aniv01.png"
                nome="RUDMAR"
                local="(Assistência Técnica)"
                dataExt="29/setembro - Domingo"
            />

            {/* ************************ niver eugenio cida */}
            <MensagemNiver2
                titulo="Aniversários"
                data="24/09/2019"
                cor="#28A745"
                img="img/aniv12.png"
                nome="EUGÊNIO"
                local="(Engenharia)"
                nome2="MARIA APARECIDA"
                local2="(Copa)"
                dataExt="24/setembro - Terça-feira"
            />

            {/* ************************ bolinho vanessa */}
            <MensagemText
                titulo="Aniversário"
                data="27/08/2019"
                cor="steelblue"
                texto={<p class="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span style={{ color: 'blue' }}>Vanessa</span>, comemorando seu aniversário, convida a
                todos para aquele tradicional
                <span style={{ color: 'green' }}>
                        <strong>
                            <em> bolinho</em>
                        </strong>
                    </span>, hoje, às 16:30, no 11º andar (copa).
            </p>} />
            {/* ************************ niver vanessa */}
            <MensagemNiver
                titulo="Aniversário"
                data="27/08/2019"
                cor="steelblue"
                img="img/aniv11.png"
                nome="VANESSA"
                local="(Engenharia)"
                dataExt="27/agosto - Terça-feira"
            />
            {/* ************************  niver cota */}
            <MensagemText
                titulo="Aniversário"
                data="13/08/2019"
                cor="red"
                texto={
                    <p class="card-text" style={{ fontSize: '1.1em', textAlign: 'justify' }}>
                        <br />
                    Bom dia colaboradores !
                    <br />
                        <br />
                    Hoje a Cota entra no seu 45º ano de vida.

                    Uma história que merece ser comemorada.

                    Somos umas das poucas incorporadoras da cidade com tantos

                    anos e atuante no mercado. Vários desafios e conquistas

                    já tivemos.

                    Parabéns para todos nós e obrigada por fazer parte desta história !

                    Hoje às 17 horas vamos nos reunir na copa para o famoso parabéns !
                    <br />
                        <br />
                    A Diretoria
                </p>
                } />
            {/* ************************ bolinho tania */}
            <MensagemText
                titulo="Aniversário"
                data="12/08/2019"
                cor="green"
                texto={<p class="card-text" style={{ fontSize: '1.1em' }}>
                    <br />
                    <span style={{ color: 'blue' }}>Tania</span>, comemorando seu aniversário, convida a
                todos para aquele tradicional
                <span style={{ color: 'green' }}>
                        <strong>
                            <em> bolinho</em>
                        </strong>
                    </span>, hoje, às 16:30, no 11º andar (copa).
            </p>} />
            {/* ************************ niver tania */}
            <MensagemNiver
                titulo="Aniversário"
                data="12/08/2019"
                cor="green"
                img="img/aniv11.png"
                nome="TANIA"
                local="(Financeiro)"
                dataExt="12/agosto - Segunda-feira"
            />
            {/* ************************ bolinho antonio */}
            <MensagemText
                titulo="Aniversário"
                data="07/08/2019"
                cor="steelblue"
                texto={
                    <div>
                        <p class="card-text" style={{ fontSize: '1.1em' }}>
                            <br />
                            <span style={{ color: 'blue' }}>Antônio</span>, que fez aniversário na última sexta-feira,
                                convida a
                                todos para comemorar com aquele tradicional
                                <span style={{ color: 'green' }}>
                                <strong>
                                    <em> bolinho</em>
                                </strong>
                            </span>, hoje, às 16:30, no 11º andar (copa).
                            </p>
                    </div>
                } />
            {/* ************************ saida douglas */}
            <MensagemText
                titulo="Comunicado"
                data="16/07/2019"
                cor="red"
                texto={
                    <div>
                        <br />
                        <p class="card-text" style={{ fontSsize: '1.5em' }}>
                            Comunicamos que o Sr. DOUGLAS FERNANDO RODRIGUES
                            não faz mais parte do nosso quadro de funcionários.
                    <br />
                        </p>
                    </div>
                } />
            {/* ************************ corpus christi */}
            <MensagemText
                titulo="Corpus Christi"
                data="18/06/2019"
                cor="grey"
                texto={
                    <div>
                        <br />
                        <p class="card-text" style={{ fontSize: '1.1em' }}>
                            Em razão do feriado de Corpus Christi, quinta-feira,
                            <br />
                            não haverá expediente no dia 21/JUN/2019 - sexta-feira.
                        </p>
                    </div>
                } />

            {/* ************************ corpus christi */}
            <MensagemImg
                titulo="Confraternização de Fim de Ano"
                data="22/12/2018"
                cor="red"
                img="img/fim ano 2018 02.PNG"
            />


        </div>
    )
}

export default MensagensLista