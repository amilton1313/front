import {
    EMPREENDIMENTOS_DESCARGA_INICIO,
    EMPREENDIMENTOS_DESCARGA_EXITO,
    EMPREENDIMENTOS_DESCARGA_ERRO,
    EMPREENDIMENTOS_FILTRADO,
    EMPREENDIMENTOS_INCLUIR

} from '../types/ty_empreendimentos'

const initialState = {
    empreendimentos: [],
    empreendimentosFull: [],
    error: null,
    loading: false,
    empreendimento: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case EMPREENDIMENTOS_DESCARGA_INICIO:
            return {
                ...state,
                loading: true,
                empreendimento: {}
            }

        case EMPREENDIMENTOS_DESCARGA_EXITO:
            return {
                ...state,
                empreendimentos: action.payload,
                empreendimentosFull: action.payload,
                loading: false,
                error: false,
                empreendimento: {}
            }

        case EMPREENDIMENTOS_DESCARGA_ERRO:
            return {
                ...state,
                empreendimentos: [],
                empreendimentosFull: [],
                loading: false,
                error: true
            }

        case EMPREENDIMENTOS_FILTRADO:
            return {
                ...state,
                empreendimentos: action.payload,
                loading: false,
                error: false
            }

        case EMPREENDIMENTOS_INCLUIR:
                return {
                    ...state,
                    error: null,
    
                    empreendimentos: [...state.empreendimentos, action.payload]
                }
        
        default:
            return state
    }
}