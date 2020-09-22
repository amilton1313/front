import {
    CHECAR_AUTH_EXITO,
    CHECAR_AUTH_ERRO

} from '../types/ty_pessoas_dados'

import clienteAxios from '../config/axios'

export const ac_obterAutorizacao = usuario => {
    return (dispatch) => {
        
        clienteAxios.post('/auth',usuario)
        .then(resposta => {
                if (resposta.data) {
                    dispatch(resultadoAuthExito(resposta.data))
                } else {
                    dispatch(resultadoAuthErro())
                }
            })
            .catch(err => {
                console.log('erro', usuario)
                dispatch(resultadoAuthErro())
            })
    }
}

export const resultadoAuthExito = (retorno) => ({
    type: CHECAR_AUTH_EXITO,
    payload: retorno
})

export const resultadoAuthErro = () => ({
    type: CHECAR_AUTH_ERRO
})

export const ac_obterAutorizacaoCpf = usuario => {
    console.log('chegou act')
    return (dispatch) => {
        
        clienteAxios.post('/login',usuario)
        .then(resposta => {
                console.log('resposta ',resposta.data)
                if (resposta.data) {
                    dispatch(resultadoAuthExito(resposta.data))
                } else {
                    dispatch(resultadoAuthErro())
                }
            })
            .catch(err => {
                console.log('erro', usuario)
                dispatch(resultadoAuthErro())
            })
    }
}


