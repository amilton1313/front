import {
    PROPOSTA_GETBYID_EXITO,
    PROPOSTA_GETBYID_ERRO

} from '../types/ty_propostas'

const initialState = {
    proposta: {},
    propostas: []
}

export default function (state = initialState, action) {
    switch (action.type) {

        case PROPOSTA_GETBYID_EXITO:
                const aa = action.payload

            return {
                proposta: action.payload
            }

        case PROPOSTA_GETBYID_ERRO:
            return {
                ...state,
                proposta: {}
            }
        
        default:
            return state
    }
}