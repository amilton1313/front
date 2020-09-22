import React, { useState, useEffect } from 'react'
import clienteAxios from '../../config/axios'

const PoEmpreendimentoDoctos = props => {

    const [doctos, xDoctos] = useState([])
    
    const {id_empreendimento, nomeEmpreendimento} = props.location.state

    useEffect(() => {

        empDoctos()

    }, [])    

    const empDoctos = () => {

        clienteAxios.get(`/portal/empreenddoctos/${id_empreendimento}`)
            .then(resposta => {
                xDoctos(resposta.data)
            })
            .catch(err => {
            })
    }

    if (!doctos.length > 0) {
        return (
        <div className="tab-container">
            <h2 className="doc-titulo">{nomeEmpreendimento}</h2>
            <h3 className="doc-subtitulo">Documentos referentes ao empreendimento</h3>
            <p className="doc-subtitulo">Não há documentos para este empreendimento</p>
            
        </div>
        )
    } else {
        let arquivo
        
        return ( 
            <div className="tab-container">
                <h2 className="doc-titulo">{nomeEmpreendimento}</h2>
                <h3 className="doc-subtitulo">Documentos referentes ao empreendimento</h3>
                {
                    doctos.map(docto => {
                        arquivo = `http://www.cota.com.br/portaldocliente/arquivos/${docto.nomearquivo}`
                        return (
                            <div className="tab-linha linha-doc">
                        <a href={arquivo} target="_blank">{docto.nomedocumento}</a>
                        </div>
                    )})
                }

            {/* <div className="linha-doc-ultima"></div> */}
    
            </div>
         ) 

    }

}
 
export default PoEmpreendimentoDoctos