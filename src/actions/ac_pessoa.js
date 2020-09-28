
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

import clienteAxios from '../config/axios'

// ac_addPessoaDados

export function ac_addPessoasDados(token, pessoa, retornoDoBanco) {
    return (dispatch) => {

        clienteAxios.post('/pessoa', pessoa, {
            headers: { Authorization: token }
        })
            .then(resposta => {
                console.log('sim', resposta)
                dispatch(addPessoasDadosExito(pessoa))
                retornoDoBanco(resposta)
            })
            .catch(err => {
                console.log('nao', err)
                dispatch(addPessoasDadosErro())
                retornoDoBanco(err)
            })
    }
}

export const addPessoasDadosExito = pessoa => ({
    type: PESSOA_DADOS_INCLUSAO_EXITO,
    payload: pessoa
})

export const addPessoasDadosErro = () => ({
    type: PESSOA_DADOS_INCLUSAO_ERRO
})

// ac_updPessoaDados

export function ac_updPessoasDados(token, pessoa, retornoDoBanco) {

    const { id_pessoa } = pessoa
    console.log('id-pessoa update ', id_pessoa)

    return (dispatch) => {

        clienteAxios.put(`/pessoa/${id_pessoa}`, pessoa, {
            headers: { Authorization: token }
        })
            .then(resposta => {
                console.log('sim', resposta)
                dispatch(addPessoasDadosExito(pessoa))
                retornoDoBanco(resposta)
            })
            .catch(err => {
                console.log('nao', err)
                dispatch(addPessoasDadosErro())
                retornoDoBanco(err)
            })
    }
}


// ac_obterPessoaDadosCnpj

export const ac_obterPessoaDadosCnpj = (token, cnpj, atualizarPessoa) => {
    return (dispatch) => {

        clienteAxios.get(`/pessoa/cnpj/${cnpj}`, {
            headers: { Authorization: token }
        })
            .then(resposta => {
                dispatch(obterPessoaDadosCnpj_exito(resposta.data[0]))
                if (resposta.data.length < 1) {
                    // atualizarPessoa("I", resposta.data[0])
                } else {atualizarPessoa(resposta.data[0])}
            })
            .catch(err => {
                console.log(err)
                dispatch(obterPessoaDadosCnpj_erro())
            })
    }
}

export const obterPessoaDadosCnpj_exito = pessoa => ({
    type: PESSOA_DADOS_CNPJ_EXITO,
    payload: pessoa
})

export const obterPessoaDadosCnpj_erro = () => ({
    type: PESSOA_DADOS_CNPJ_ERRO
})

//

export const ac_obterPessoasDados = token => {
    return (dispatch) => {
        dispatch(ac_obterProductosComeco())

        clienteAxios.get('/pessoas', {
            headers: { Authorization: token }
        })
            .then(resposta => {
                dispatch(ac_descargaPessoasExito(resposta.data))
            })
            .catch(err => {
                dispatch(ac_descargaPessoasError())
            })
    }
}


export const ac_obterProductosComeco = error => ({
    type: PESSOA_DADOS_DESCARGA_INICIO,
    payload: error
})

export const ac_descargaPessoasExito = pessoas => ({
    type: PESSOA_DADOS_DESCARGA_EXITO,
    payload: pessoas
})

export const ac_descargaPessoasError = () => ({
    type: PESSOA_DADOS_DESCARGA_ERRO
})

export const ac_descargaPessoasFiltrado = pessoas => ({
    type: PESSOA_DADOS_FILTRADO,
    payload: pessoas
})



// export const ac_incluirPessoasDados = pessoa => dispatch => {
    //     clienteAxios.post('/pessoa', pessoa)
    //         .then(resposta => {
        //             dispatch({
            //                 type: 'PESSOA_DADOS_INCLUIR',
            //                 payload: resposta.data
            //             })
            //         }
            //         )
            // }
            
            export const incluirPessoasDados = pessoas => ({
                type: PESSOA_DADOS_INCLUIR,
                payload: pessoas
            })
            
            
            
export function ac_getPessoaCompleta (token, id)  {
    return (dispatch) => {
        clienteAxios.get(`/pessoacompleta/${id}`, {
            headers: { Authorization: token }
        })
            .then(resposta => {
                dispatch(getPessoaCompleta_exito(resposta.data[0]))

            })
            .catch(err => {
                console.log(err)
                dispatch(getPessoaCompleta_erro())
            })
    }
}

const getPessoaCompleta_exito = pessoa => ({
    type: PESSOA_COMPLETA_EXITO,
    payload: pessoa
})

const getPessoaCompleta_erro = () => ({
    type: PESSOA_COMPLETA_ERRO
})

export function ac_getPessoaIdNome (token, id)  {
    return (dispatch) => {
        clienteAxios.get(`/pessoas`, {
            headers: { Authorization: token }
        })
            .then(resposta => {
                dispatch(getPessoaIdNome_exito(resposta.data))

            })
            .catch(err => {
                console.log(err)
                dispatch(getPessoaIdNome_erro())
            })
    }
}

const getPessoaIdNome_exito = pessoas => ({
    type: PESSOA_IDNOME_EXITO,
    payload: pessoas
})

const getPessoaIdNome_erro = () => ({
    type: PESSOA_IDNOME_ERRO
})

export function ac_getImobiliarias (token, id)  {
    return (dispatch) => {
        clienteAxios.get(`/imobiliarias`, {
            headers: { Authorization: token }
        })
            .then(resposta => {
                dispatch(getImobiliarias_exito(resposta.data))

            })
            .catch(err => {
                console.log(err)
                dispatch(getImobiliarias_erro())
            })
    }
}

const getImobiliarias_exito = pessoas => ({
    type: IMOBILIARIAS_EXITO,
    payload: pessoas
})

const getImobiliarias_erro = () => ({
    type: IMOBILIARIAS_ERRO
})