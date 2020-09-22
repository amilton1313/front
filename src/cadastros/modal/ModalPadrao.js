import React, { useState, useEffect } from 'react'

import './modalPadrao.css'

const ModalPadrao = ({ itens, id, descricao, mostrarSelecionado, titulo }) => {

    const [itensFull, xItensFull] = useState(itens)
    const [itensFiltrado, xItensFiltrado] = useState(itens)

    const onBuscar = aa => {

        const filtrar = new Promise((resolve, reject) => {

            resolve(
                itensFull.filter(function (item) {
                    const bb = item[descricao]
                    if (bb) {
                        return bb.toLowerCase().search(
                            aa.toLowerCase()) !== -1
                    }
                })
            )
        })

        filtrar
            .then(res => {
                xItensFiltrado(res)
            })
    }

    useEffect(() => {
        xItensFull(itens)
        xItensFiltrado(itens)
    }, [itens])

    return (
        <div>
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalPadrao">{titulo}</h5>
                        <button id="fechar" type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" >
                        <div>
                            <input 
                                type="text"
                                style={{width: '100%', marginBottom: '15px'}}
                                name="busca"
                                onChange={e => {
                                    onBuscar(e.target.value)
                                }
                                }
                            />
                        </div>
                        {
                            itensFiltrado.map(a => (
                                <div
                                    onClick={() => {
                                        mostrarSelecionado(a[id])
                                        document.getElementById("fechar").click()
                                    }}
                                    className="modal-tabela"
                                >
                                    <div className="modal-tabela-coluna1">{a[id]}</div>
                                    <div className="modal-tabela-coluna2">{a[descricao]}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPadrao