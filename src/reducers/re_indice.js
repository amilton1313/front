import {
    INDICES_DESCARGA_INTERNET_INICIO,
    INDICES_DESCARGA_INTERNET_EXITO,
    INDICES_DESCARGA_INTERNET_ERRO

} from '../types/ty_indices'

const initialState = {
    resValor: '',
    resIndice: '',
    comValor: '',
    comIndice: ''
}

export default function (state = initialState, action) {
    switch (action.type) {

        case INDICES_DESCARGA_INTERNET_EXITO:
                const aa = action.payload[0].resultado[0]

                console.log('dentro do re_indice', aa)

                    const bb = aa.resvalor[0]
                    const bby = bb.indice_data_valor
    
                    const cc = aa.resindice[0]
                    const ccy = cc.indice_data_valor
    
                    const dd = aa.comvalor[0]
                    const ddy = dd.indice_data_valor
    
                    const ee = aa.comindice[0]
                    const eey = ee.indice_data_valor

                    console.log('dentro do re_indice', eey)

            return {
                ...state,
                    resValor: bby.toLocaleString('latn'),
                    resIndice: ccy.toLocaleString('latn'),
                    comValor: ddy.toLocaleString('latn'),
                    comIndice: eey.toLocaleString('latn')
            }

        case INDICES_DESCARGA_INTERNET_ERRO:
            return {
                ...state,
                indicesIntranet: {}
            }
        
        default:
            return state
    }
}