export function pessoaServicos() {

    const sv_tipoPessoa = (tipo) => {
        return (tipo === 1) ? 'Física' : 'Jurídica'
    }

    const sv_cpf_cnpj = (tipo) => {
        return (tipo === 1) ? 'CPF' : 'CNPJ'
    }

    const sv_sexo = (tipo) => {
        return (tipo === 1) ? 'Masculino' : 'Feminino'
    }

    const sv_ec = (tipo) => {

        switch (parseInt(tipo)) {
            case 2:
                return 'Casado(a)'
            case 3:
                return 'Separado(a)'
            case 4:
                return 'Divorciado(a)'
            case 5:
                return 'Viúvo(a)'
            default:
                return 'Solteiro(a)'
        }
    }

    const sv_regcas = (tipo) => {

        switch (parseInt(tipo)) {
            case 1:
                return 'Comunhão Universal de Bens'
            case 2:
                return 'Comunhão Parcial de Bens'
            case 3:
                return 'Separação de Bens'
            default:
                return 'Outros'
        }
    }

    return [
        sv_tipoPessoa,
        sv_cpf_cnpj,
        sv_sexo,
        sv_ec,
        sv_regcas
    ]
}


export default pessoaServicos


