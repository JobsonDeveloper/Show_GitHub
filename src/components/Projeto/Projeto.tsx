import React from 'react'
import { Titulo } from '../Titulo/Styles'
import Paragrafo from '../Paragrafo/Paragrafo'
import { Card, LinkBotao } from './Styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">
        Lista de tarefas Feritas com React
      </Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
