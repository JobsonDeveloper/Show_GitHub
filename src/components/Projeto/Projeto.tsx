import React from 'react'
import { Titulo } from '../Titulo/Styles'
import Paragrafo from '../Paragrafo/Paragrafo'
import { Card, LinkBotao } from './Styles'

type Props = {
  repositorio: {
    name: string
    description: string
    html_url: string
  }
}

const Projeto = (props: Props) => {
  const { name, description, html_url } = props.repositorio

  return (
    <Card>
      <Titulo>{name}</Titulo>
      {description == undefined && (
        <Paragrafo tipo="secundario">Sem descrição</Paragrafo>
      )}
      {description != '' && (
        <Paragrafo tipo="secundario">{description}</Paragrafo>
      )}
      <LinkBotao href={html_url}>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
