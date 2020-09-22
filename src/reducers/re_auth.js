import {
    CHECAR_AUTH_EXITO,
    CHECAR_AUTH_ERRO

} from '../types/ty_pessoas_dados'

const initialState = {
    auth: false,
    erro: false,
    id_usuario: '',
    nm_nick: '',
    id_pessoa: '',
    nome: '',
    cpf: '',
    token: '',
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CHECAR_AUTH_EXITO:
            return {
                ...state,
                auth: true,
                erro: false,
                id_usuario: action.payload.id_usuario,
                nm_nick: action.payload.nm_nick,
                id_pessoa: action.payload.id_pessoa,
                nome: action.payload.nome,
                cpf: action.payload.cpf,
                token: action.payload.token

            }

            case CHECAR_AUTH_ERRO:
            return {
                ...state,
                auth: false,
                erro: true,
                id_usuario: '',
                nm_nick: '',
                id_pessoa: '',
                nome: '',
                cpf: '',
                token: '',
            }
        
        default:
            return state
    }
}