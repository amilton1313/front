import React, { useContext } from 'react'
import { Modal, Button} from 'react-bootstrap'

import { PropostaContext } from './Proposta'
import { PropostaValoresContext } from './PropostaValores'
import './propo.css'
import PropostaValoresForm from './PropostaValoresForm'

const PropostaValoresModal = () => {

    const { id_proposta } = useContext(PropostaContext)
    const { 
        addParcela, updParcela, parcela, idParcela,
        mostrarModal, novaProposta, setMostrarModal
    } = useContext(PropostaValoresContext)

    const handleClose = () => {
        setMostrarModal(false)
    }

    return (
        <>
            {
                mostrarModal
                    ? <Modal size="lg" show={mostrarModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Valores Propostos</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                        <PropostaValoresForm />

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setMostrarModal(false)}>
                                Close
                            </Button>
                            {
                                novaProposta
                                    ? <Button variant="primary" onClick={() => addParcela(id_proposta)}>Salvar N</Button>
                                    : <Button variant="primary" onClick={() => updParcela(idParcela, parcela)}>Salvar</Button>
                            }

                        </Modal.Footer>
                    </Modal>
                    : null
            }

        </>
    );
}

export default PropostaValoresModal;