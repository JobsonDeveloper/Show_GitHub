import React from 'react'
import Titulo from '../../components/Titulo/Titulo'
import Avatar from '../../components/Avatar/Avatar'
import Paragrafo from '../../components/Paragrafo/Paragrafo'
import { BotaoTema, Descricao, SidebarContainer } from './Styles'

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Jobson</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          JobsonDeveloper
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Desenvolvedor Full-Stack
        </Descricao>
        <BotaoTema>Trocar Tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
