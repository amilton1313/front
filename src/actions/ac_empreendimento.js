
import {
    EMPREENDIMENTOS_DESCARGA_INICIO,
    EMPREENDIMENTOS_DESCARGA_EXITO,
    EMPREENDIMENTOS_DESCARGA_ERRO,
    EMPREENDIMENTOS_FILTRADO,
    EMPREENDIMENTOS_INCLUIR

} from '../types/ty_empreendimentos'

import clienteAxios from '../config/axios'

export const ac_obterEmpreendimentos = token => {

    return (dispatch) => {
        dispatch(obterEmpreendimentosComeco())

        clienteAxios.get('/empreendimentos', {
            headers: { Authorization: token }
        })
            .then(resposta => {
                dispatch(descargaEmpreendimentosExito(resposta.data))
            })
            .catch(err => {
                dispatch(descargaEmpreendimentosError())
            })
    }
}

export const obterEmpreendimentosComeco = error => ({
    type: EMPREENDIMENTOS_DESCARGA_INICIO,
    payload: error
})

export const descargaEmpreendimentosExito = empreendimentos => ({
    type: EMPREENDIMENTOS_DESCARGA_EXITO,
    payload: empreendimentos
})

export const descargaEmpreendimentosError = () => ({
    type: EMPREENDIMENTOS_DESCARGA_ERRO
})

export const ac_descargaEmpreendimentosFiltrado = empreendimentos => ({
    type: EMPREENDIMENTOS_FILTRADO,
    payload: empreendimentos
})

    export function ac_incluirEmpreendimentosDados(empreendimento) {
        return (dispatch) => {

            clienteAxios.post('/empreendimento', empreendimento)
                .then(resposta => {
                    console.log('sim', resposta)
                    // dispatch(agregarProductoExito(producto))
                })
                .catch(err => {
                    console.log('nao', err)
                    // dispatch(agregarProductoError())
                })
    
        }
    }

export const incluirempreendimentosDados = empreendimentos => ({
    type: EMPREENDIMENTOS_INCLUIR,
    payload: empreendimentos
})


