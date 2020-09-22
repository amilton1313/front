import React, { useState, useEffect } from 'react'
import clienteAxios from '../../config/axios'

import PoEmpreendimentoUnidadeArquivos from './PoEmpreendimentoUnidadeArquivos'

const PoEmpreendimentoUnidadePlantas = props => {

    const [plantas, xPlantas] = useState([])

    const [unidades, xUnidades] = useState([])

    const { nomeEmpreendimento, nomeBloco, unidade } = props.location.state
   

    console.log('id_empre ', unidade.id_empreendimento)
    console.log('id_nome und ', unidade.id_po_unidades_nome_unidade)

    useEffect(() => {
        console.log('unidade', unidade)
        empPlantas()

    }, [])

    const empPlantas = () => {

        clienteAxios.post(`/portal/unidadedoctos`, {
            id_empreendimento: unidade.id_empreendimento,
            id_nome_unidade: unidade.id_po_unidades_nome_unidade
        })
            .then(resposta => {
                const aa = resposta.data[0]
                xPlantas(aa.plantas)
            })
            .catch(err => {
            })
    }

    if (!plantas.length > 0) {
        return (
            <div className="tab-container">
                <h2 className="doc-titulo">{nomeEmpreendimento}</h2>
                <h3 className="doc-subtitulo">Plantas</h3>
                <h3 className="doc-subtitulo">{unidade.numero} - {nomeBloco}</h3>
                <p>Não há documentos para este empreendimento</p>

            </div>
        )
    } else {
        return (
            <div className="tab-container">
                <h2 className="doc-titulo">{nomeEmpreendimento}</h2>
                <h3 className="doc-subtitulo">Plantas</h3>
                <h3 className="doc-subtitulo">{unidade.numero} - {nomeBloco}</h3>
                {
                    plantas.map(planta => (
                        <div id="accordion">
                            <div class="">
                                <div class="" id="headingOne">
                                        <div class="tab-linha linha-doc" data-toggle="collapse" data-target={'#' + planta.id} >
                                            {planta.descricao}
                                        </div>
                                </div>

                                <div id={planta.id} class="collapse" data-parent="#accordion">
                                <div class="card-body">
                                    <div class="">
                                        {
                                           planta.arquivos !== null
                                           ? <PoEmpreendimentoUnidadeArquivos arquivos = {planta.arquivos} />
                                           : null 
                                        }
                                        
                                    </div>
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

export default PoEmpreendimentoUnidadePlantas