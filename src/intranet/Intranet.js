import React, { useState } from 'react'

import IntranetHeader from './IntranetHeader'
import MensagensLista from './mensagens/MensagensLista'
import EmpreendsLista from './empreendimentos/EmpreendsLista'
import '../css/intranet.css'

const Intranet = ({ history }) => {

    const [tamanhoTela, xTamanhoTela] = useState(window.innerWidth)

    window.addEventListener('resize', function(){
        xTamanhoTela(window.innerWidth)
    });

    return (
        <div className="intra-container">
            {/* {tamanhoTela} */}
            <IntranetHeader />

            {
                tamanhoTela > 700
                    ?
                    <div style={lin01Style}>
                        <div className="intra-flex7 intra-flex-center">

                            <MensagensLista />
                        </div>
                        <div className="intra-flex3 intra-flex-center">

                            <EmpreendsLista />
                        </div>
                    </div>
                    :
                    <div style={lin01Style, lin01Style2}>
                        <div className="intra-flex-center">

                            <MensagensLista />
                        </div>
                        <div className="intra-flex-center">

                            <div>
                                <h3 style={{textAlign: 'center'}}>Empreendimentos</h3>
                            </div>

                            <EmpreendsLista />
                        </div>
                    </div>
            }
        </div>
    )
}



const lin01Style = {
    display: 'flex',
    width: '100%',
    marginTop: 0,
    paddingTop: 0,
}

const lin01Style2 = {
    flexDisplay: 'column',
    marginTop: 0,
    paddingTop: 0,
}

export default Intranet


//smartphone = 360
//desktop antigo 1024
//meu note 1366