import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './pessoa.css'
import pessoaServicos from './pessoaServicos'


import { ac_obterPessoaCompleta } from '../../actions/ac_pessoa'

import Spinner from '../../spinner/Spinner'

const PessoaMostrar = ({ history }) => {

    const [
        sv_tipoPessoa, sv_cpf_cnpj, sv_sexo, sv_ec,
        sv_regcas
      ] = pessoaServicos()

    const {id} = history.location.state

    const dispatch = useDispatch()

    const token = useSelector(state => state.auth.token)

    useEffect(() => {
        dispatch(ac_obterPessoaCompleta(token, id))
    }, [])


    const loading = useSelector(state => state.pessoas.loading)
    const error = useSelector(state => state.pessoas.error)
    let pessoa = useSelector(state => state.pessoas.pessoa)
    const pessoasFull = useSelector(state => state.pessoas.pessoasFull)

    const dados = {...pessoa.pessoa}
    
    return (
        <React.Fragment>
            {error
                ? <div className="font-weight-bold alert alert-danger text-center">
                    Houve um erro...
                </div>
                : null}


<div className="text-center">
                <h3>Cadastro</h3>

                <table class="table table-sm table-borderless">

  <tbody>

    <tr><td className="tr1">Tipo de Pessoa : </td> <td className="tr2">{sv_tipoPessoa(dados.tipo_pessoa)}</td></tr> 
    <tr><td className="tr1">{sv_cpf_cnpj(dados.tipo_pessoa)}</td><td className="tr2">{dados.cpf_cnpj}</td></tr>

    <tr><td className="tr1">Nome : </td><td className="tr2">{dados.nome}</td></tr>
    <tr><td className="tr1">Endereco : </td><td className="tr2">{dados.endereco}</td></tr>
    <tr><td className="tr1">Complemento : </td><td className="tr2">{dados.complemento}</td></tr>
    <tr><td className="tr1">Bairro : </td><td className="tr2">{dados.bairro}</td></tr>
    <tr><td className="tr1">Município : </td><td className="tr2">{dados.municipio}</td></tr>
    <tr><td className="tr1">UF : </td><td className="tr2">{dados.uf}</td></tr>
    <tr><td className="tr1">CEP : </td><td className="tr2">{dados.cep}</td></tr>  
    <tr><td className="tr1">Creci : </td><td className="tr2">{dados.num_creci}</td></tr> 
    <tr><td className="tr1">Data de Nascimento : </td><td className="tr2">{dados.data_nascimento}</td></tr>           
    <tr><td className="tr1">Nacionalidade : </td><td className="tr2">{dados.nacionalidade}</td></tr> 
    <tr><td className="tr1">Sexo : </td><td className="tr2">{sv_sexo(dados.sexo)}</td></tr>   

    <tr><td className="tr1">Data do Casamento : </td><td className="tr2">{dados.data_casamento}</td></tr>
    <tr><td className="tr1">Profissão : </td><td className="tr2">{dados.profissao}</td></tr>
    <tr><td className="tr1">Num Dependentes : </td><td className="tr2">{dados.numero_dependentes}</td></tr>
    <tr><td className="tr1">RG - Número : </td><td className="tr2">{dados.rg}</td></tr>
    <tr><td className="tr1">RG - Data Expedição : </td><td className="tr2">{dados.data_expedicao}</td></tr>
    <tr><td className="tr1">RG - Órgão Emissor: </td><td className="tr2">{dados.orgao_emissor_uf}</td></tr>
    <tr><td className="tr1">Empresa onde trabalha : </td><td className="tr2">{dados.empresa_nome}</td></tr>
    <tr><td className="tr1">Tempo na Empresa : </td><td className="tr2">{dados.tempo_empresa}</td></tr>
    <tr><td className="tr1">Cargo : </td><td className="tr2">{dados.cargo}</td></tr>
    <tr><td className="tr1">Remuneração : </td><td className="tr2">{dados.remuneracao}</td></tr>
    <tr><td className="tr1">Outras rendas - Origem : </td><td className="tr2">{dados.outras_rendas_origem}</td></tr>  
    <tr><td className="tr1">Outras rendas - Valor : </td><td className="tr2">{dados.outras_rendas_valor}</td></tr>

    <tr><td className="tr1">Estado civil : </td><td className="tr2">{sv_ec(dados.estado_civil)}</td></tr>
    <tr><td className="tr1">Regime de casamento : </td><td className="tr2">{sv_regcas(dados.regime_casamento)}</td></tr>
    <tr><td className="tr1">Nome do cônjuge : </td><td className="tr2">{sv_regcas(dados.conjuge_nome)}</td></tr>
    <tr><td className="tr1">Nome do companheiro(a) : </td><td className="tr2">{sv_regcas(dados.companheiro_nome)}</td></tr>
    <tr><td className="tr1">Cpf cônjuge/companheiro(a) : </td><td className="tr2">{sv_regcas(dados.conjuge_cpf)}</td></tr>

  </tbody>
</table>


            </div>


            {loading ? <Spinner /> : null}
        </React.Fragment>
    )
}

export default PessoaMostrar