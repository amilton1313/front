import React from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BotaoLinha = ({ disabled, classe, onClick, icone, dica, posicao }) => {

  const msg = dica ? dica.split('    ') : ['']
  const pos = posicao === 'right' ? 'right' : 'left'

  return (
    <>
      {/* {msg.map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={pos}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              {placement}.
            </Tooltip>
          }
        >
        </OverlayTrigger>
      ))} */}
      <Button disabled={disabled} className={classe} onClick={onClick}><FontAwesomeIcon icon={icone} /></Button>
      
    </>

  )
}

export default BotaoLinha;

