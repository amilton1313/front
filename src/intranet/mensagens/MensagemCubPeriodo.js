import React, { useState, useEffect } from 'react'

import clienteAxios from '../../config/axios'

import Spinner from '../../spinner/Spinner'

import '../../css/intranet.css'


const MensagemCubPeriodo = () => {

    const [meses, xMeses] = useState([])
    const [loading, xLoading] = useState(true)

    useEffect(() => {

        indices()

    }, [])

    const indices = () => {

        console.log('entrou no indices')

        const dataAtual = new Date()
        const mesAtual = dataAtual.getMonth() + 1
        const anoAtual = dataAtual.getFullYear()
        const dataOne = (anoAtual - 1) + '-' + (mesAtual) + '-01'


        
        const dataTwo = (anoAtual) + '-' + (mesAtual) + '-01'

        console.log('entrou no indices', dataOne, dataTwo)

        xLoading(true)

        clienteAxios.post('/indicesintranetperiodo',
            {
                dataOne,
                dataTwo
            }
        )
            .then(resposta => {
                xMeses(resposta.data)
                xLoading(false)

            })
            .catch(err => {
            })
    }

    if (!meses.length > 0) return null

    return (

        <div id="cubperiodo" className="efeito">
            <table>
                <thead>
                    <tr class="table-cub-periodo table-cub-periodo__cabecalho">
                        <th>Mês</th>
                        <th>Res-Valor</th>
                        <th>%</th>
                        <th>Com-Valor</th>
                        <th>%</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        meses.map(mes => (

                            <tr class="table-cub-periodo ">
                                <td scope="row">{mes.indice_data.substring(5, 7)}/{mes.indice_data.substring(0, 4)}</td>
                                <td>{Number(mes.resvalor).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
                                <td>{Number(mes.resindice).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
                                <td>{Number(mes.comvalor).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
                                <td>{Number(mes.comindice).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
                            </tr>
                        ))


                    }


                </tbody>
            </table>
            {loading ? <Spinner /> : null}

        </div>


    )



}

export default MensagemCubPeriodo

