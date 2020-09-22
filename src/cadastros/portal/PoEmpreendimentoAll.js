import React, { useState, useEffect } from 'react'
import clienteAxios from '../../config/axios'

import PoEmpreendimentoAllMostrar from './PoEmpreendimentoAllMostrar'

const PoEmpreendimentoAll = props => {

    const [doctos, xDoctos] = useState([])
    const [blocos, xBlocos] = useState([])

    const { id_empreendimento, nomeEmpreendimento } = props.location.state

    useEffect(() => {
        empDoctos()
        empBlocos()

    }, [])

    const empDoctos = () => {

        clienteAxios.get(`/portal/empreenddoctos/${id_empreendimento}`)
            .then(resposta => {
                xDoctos(resposta.data)
            })
            .catch(err => {
            })
    }

    const empBlocos = () => {

        clienteAxios.get(`/empreendimentounidades/empreendimento/${id_empreendimento}`)
            .then(resposta => {
                const aa = resposta.data[0]
                const bb = aa.unidades[0]
                const blocos = bb.blocos

                xBlocos(blocos)
            })
            .catch(err => {
            })
    }

    console.log('doctos', doctos)
    console.log('blocos', blocos)


    return ( 
        <div>
            <PoEmpreendimentoAllMostrar
                nomeEmpreendimento = {nomeEmpreendimento}
                doctos = {doctos}
                doctos = {doctos}
            />

        </div>
     )
}
 
export default PoEmpreendimentoAll