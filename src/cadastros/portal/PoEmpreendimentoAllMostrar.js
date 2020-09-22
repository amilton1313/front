import React from 'react'

const PoEmpreendimentoAllMostrar = ({doctos, blocos, nomeEmpreendimento}) => {

    let arquivo

    return ( 
        <div>
            <h1>{nomeEmpreendimento}</h1>
            <div id="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target={"#documentos"} >
                                Empreendimento
                            </button>
                        </h5>
                    </div>
                    {
                        doctos.map(docto => (

                            <div id="documentos" class="collapse" data-parent="#accordion">
                                <div class="card-body">
                                    {
                                        doctos.map(docto => {
                                            arquivo = `http://www.cota.com.br/portaldocliente/arquivos/${docto.nomearquivo}`
                                            return (
                                            <p><a href={arquivo} target="_blank">{docto.nomedocumento}</a></p>
                                        )})
                                    }
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            

        </div>
     )
}
 
export default PoEmpreendimentoAllMostrar