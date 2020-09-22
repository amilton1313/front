import React, { useState, useEffect } from 'react'
import clienteAxios from '../../config/axios'

import PoEmpreendimentoUnidades from './PoEmpreendimentoUnidades'

const PoEmpreendimentoBlocos = props => {

    const [blocos, xBlocos] = useState([])

    const { id_empreendimento, nomeEmpreendimento } = props.location.state

    useEffect(() => {
        empUnidades()

    }, [])

    const empUnidades = () => {

        clienteAxios.get(`/empreendimentounidades/empreendimento/${id_empreendimento}`)
            .then(resposta => {
                const aa = resposta.data[0]
                const bb = aa.unidades[0]
                const blocos = bb.blocos

                xBlocos(blocos)
            })
            .catch(err => {
            })
    }

    if (!blocos.length > 0) {
        return (
            <div className="tab-container">
                <h2 className="doc-titulo">{nomeEmpreendimento}</h2>
                <h3 className="doc-subtitulo">Blocos/Torres/Unidades</h3>
                <p className="doc-subtitulo">Este empreendimento não possui</p>
            </div>
        )
    } else {
        return (
            <div className="tab-container">
                <h2 className="doc-titulo">{nomeEmpreendimento}</h2>
                <h3 className="doc-subtitulo">Blocos/Torres/Unidades</h3>
                {
                    blocos.map(bloco => (
                        <div id="accordion">
                            <div>
                                <div id="headingOne" className="tab-linha linha-doc">
                                        <div class="" data-toggle="collapse" data-target={'#' + bloco.nome} >
                                            {bloco.nome}
                                        </div>
                                </div>

                                <div id={bloco.nome} class="collapse" data-parent="#accordion">
                                    <div class="card-body">
                                        <PoEmpreendimentoUnidades 
                                            nomeEmpreendimento = {nomeEmpreendimento}
                                            nomeBloco = {bloco.nome}
                                            unidades = {bloco.unidades} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default PoEmpreendimentoBlocos