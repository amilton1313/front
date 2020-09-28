import {
    PESSOA_DADOS_DESCARGA_INICIO,
    PESSOA_DADOS_DESCARGA_EXITO,
    PESSOA_DADOS_DESCARGA_ERRO,
    PESSOA_DADOS_FILTRADO,
    PESSOA_DADOS_INCLUIR,

    PESSOA_DADOS_INCLUSAO_EXITO,
    PESSOA_DADOS_INCLUSAO_ERRO,

    PESSOA_DADOS_CNPJ_EXITO,
    PESSOA_DADOS_CNPJ_ERRO,

    PESSOA_COMPLETA_EXITO,
    PESSOA_COMPLETA_ERRO,

    PESSOA_IDNOME_EXITO,
    PESSOA_IDNOME_ERRO,

    IMOBILIARIAS_EXITO,
    IMOBILIARIAS_ERRO

} from '../types/ty_pessoas_dados'

const initialState = {
    pessoas: [],
    pessoasFull: [],
    error: null,
    loading: false,
    pessoa: {},
    imobiliarias: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case PESSOA_DADOS_DESCARGA_INICIO:
            return {
                ...state,
                loading: true,
                pessoa: {}
            }

        case PESSOA_DADOS_DESCARGA_EXITO:
            return {
                ...state,
                pessoas: action.payload,
                pessoasFull: action.payload,
                loading: false,
                error: false,
                pessoa: {}
            }

        case PESSOA_DADOS_DESCARGA_ERRO:
            return {
                ...state,
                pessoas: [],
                pessoasFull: [],
                loading: false,
                error: true
            }

        case PESSOA_DADOS_FILTRADO:
            return {
                ...state,
                pessoas: action.payload,
                loading: false,
                error: false
            }

        case PESSOA_DADOS_INCLUSAO_EXITO:
                return {
                    ...state,
                    error: null,
    
                    pessoas: [...state.pessoas, action.payload],
                    pessoa: action.payload
                }

        case PESSOA_DADOS_INCLUSAO_ERRO:
            return {
                ...state,
                pessoa: {},
                error: true,
            }        

        case PESSOA_DADOS_CNPJ_EXITO:
            return {
                ...state,
                pessoa: action.payload
            }      
            
        case PESSOA_DADOS_CNPJ_ERRO:
            return {
                ...state,
                pessoa: {},
                error: true,
            }

            case PESSOA_COMPLETA_EXITO:
                console.log('dentro do reducer')
            return {
                ...state,
                pessoa: action.payload
            }      
            
        case PESSOA_COMPLETA_ERRO:
            return {
                ...state,
                pessoa: {},
                error: true,
            }

        case PESSOA_IDNOME_EXITO:
            return {
                pessoas: action.payload
            }

        case PESSOA_IDNOME_ERRO:
            return {
                pessoas: {},
                error: true,
            }

        case IMOBILIARIAS_EXITO:
            return {
                imobiliarias: action.payload
            }

        case IMOBILIARIAS_ERRO:
            return {
                imobiliarias: {},
                error: true,
                }
        
        default:
            return state
    }
}