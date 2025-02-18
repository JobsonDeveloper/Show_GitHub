import React from 'react'
import Titulo from '../../components/Titulo/Titulo'
import Avatar from '../../components/Avatar/Avatar'
import Paragrafo from '../../components/Paragrafo/Paragrafo'
import { Botao, BotaoLink, SidebarContainer } from './Styles'

type Props = {
  mudaTema: () => void
  dadosUsuario: {
    urlFoto: string
    nome: string
    usuario: string
    portfolio: string
    biografia: string
    repositorios: string
  }
}

const Sidebar = (props: Props) => {
  const { urlFoto, nome, usuario, portfolio } = props.dadosUsuario

  return (
    <aside>
      <SidebarContainer>
        <Avatar urlFoto={urlFoto} />
        <Titulo fontSize={20} align="center">
          {nome}
        </Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          {usuario}
        </Paragrafo>
        <BotaoLink>
          <a target="_blank" rel="noreferrer" href={portfolio}>
            Portfólio
          </a>
        </BotaoLink>
        <Botao onClick={props.mudaTema}>Trocar Tema</Botao>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
