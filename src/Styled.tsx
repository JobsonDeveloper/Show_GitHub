import React from 'react'
import styled from 'styled-components'

type BotaoProps = {
  one: boolean
}

type Pprops = {
  fontSize: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.one ? 'green' : 'red')};
`

const Paragrafo = styled.p<Pprops>`
  font-size: ${(props) => props.fontSize || '1rem'};
`

const ParagrafoDois = styled(Paragrafo)`
  color: green;
`

function Styled() {
  return (
    <div>
      <Botao one>Envar</Botao>
      <Botao one={false}>Cancelar</Botao>

      <Paragrafo fontSize="2rem">Texto aqui...</Paragrafo>

      <ParagrafoDois fontSize="2rem">Texto aqui...</ParagrafoDois>
    </div>
  )
}

export default Styled
