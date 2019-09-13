import React from 'react'

const Mensagem001 = ({titulo, cor, data, img, nome, local, dataExt}) => {
    return (
        <div className="intra-card intra-flex-center">

            <div className="intra-card__barra" style={{background: cor}}>
                <div className="intra-card__titulo">{titulo}</div>
                <div className="intra-card__date">{data}</div>
            </div>
            <div className="intra-body-aniv">
                <img src={img} className="intra-img-small intra-body-aniv__img" />
                <div>
                    <p className="intra-body-aniv__text">
                        <span className="text-primary intra-body-aniv__nome" >{nome}</span>
                        <span className="intra-body-aniv__local"> {local}</span>
                        <br />
                        <span className="intra-body-aniv__date">{dataExt}</span>
                    </p>
                    <p className="intra-body-aniv__parabens">P A R A B É N S ! ! !</p>
                </div>
            </div>
        </div>
    )
}

export default Mensagem001
