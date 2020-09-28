
import {
    PROPOSTA_GETBYID_EXITO,
    PROPOSTA_GETBYID_ERRO

} from '../types/ty_propostas'

import clienteAxios from '../config/axios'

export const ac_getPropostaById = (id) => {
    return (dispatch) => {
        clienteAxios.get(`/proposta/${id}`)
            .then(resposta => {
                dispatch(getPropostaByIdExito(resposta.data))
            })
            .catch(err => {
                dispatch(getPropostaByIdError())
            })
    }
}

export const getPropostaByIdExito = proposta => ({
    type: PROPOSTA_GETBYID_EXITO,
    payload: proposta
})

export const getPropostaByIdError = () => ({
    type: PROPOSTA_GETBYID_ERRO
})



