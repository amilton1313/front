import React from 'react'



const MensagemMod01 = ({titulo,cor,data,texto}) => {
    const tex = texto
    return (
        <div className="intra-card intra-flex-center">

            <div className="intra-card__barra" style={{background: cor}}>
                <div className="intra-card__titulo" >{titulo}</div>
                <div className="intra-card__date">{data}</div>
            </div>
            <div className="intra-card__texto">
                {tex}
            </div>
        </div>
    )
}

export default MensagemMod01