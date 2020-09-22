import React from 'react'

const EmpreendimentoModelo = ({ logo, fachada }) => {


    return (
        <div>

            <div className="intra-card">
                <a onclick="pg_const()" href="#">
                    <div>
                        <div>
                            <img src={logo} class=" img-fluid" alt="foto" />
                        </div>
                        <div>
                            <img src={fachada} class=" img-fluid" alt="foto" />
                        </div>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default EmpreendimentoModelo