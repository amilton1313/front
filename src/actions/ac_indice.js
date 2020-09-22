
import {
    INDICES_DESCARGA_INTERNET_INICIO,
    INDICES_DESCARGA_INTERNET_EXITO,
    INDICES_DESCARGA_INTERNET_ERRO

} from '../types/ty_indices'

import clienteAxios from '../config/axios'

export const ac_obterIndicesIntranet = () => {

    return (dispatch) => {
        clienteAxios.get('/indicesintranet')
            .then(resposta => {
                console.log('intraneet ', resposta.data)
                dispatch(descargaIndicesExito(resposta.data))
            })
            .catch(err => {
                dispatch(descargaIndicesError())
            })
    }
}

export const descargaIndicesExito = indices => ({
    type: INDICES_DESCARGA_INTERNET_EXITO,
    payload: indices
})

export const descargaIndicesError = () => ({
    type: INDICES_DESCARGA_INTERNET_ERRO
})



