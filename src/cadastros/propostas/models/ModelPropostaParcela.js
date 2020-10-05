function ModelPropostaParcela(
        id_parcela, id_proposta, id_tipo, inicio, valor, 
        qtde, vcto_primeira, reforco_tipo, valorsem
    ) {
    this.id_parcela = id_parcela
    this.id_proposta = id_proposta
    this.id_tipo = id_tipo
    this.inicio = inicio
    this.valor = valor
    this.qtde = qtde
    this.vcto_primeira = vcto_primeira
    this.reforco_tipo = reforco_tipo
    this.valorsem = valorsem

    return {
        id_parcela: id_parcela,
        id_proposta: id_proposta,
        id_tipo: id_tipo,
        inicio: inicio,
        valor: valor,
        qtde: qtde,
        vcto_primeira: vcto_primeira,
        reforco_tipo: reforco_tipo,
        valorsem: valorsem 
    }
}

export default ModelPropostaParcela