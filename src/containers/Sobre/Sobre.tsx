import React from 'react'
import Titulo from '../../components/Titulo/Titulo'
import Paragrafo from '../../components/Paragrafo/Paragrafo'
import { GitHubSecao } from './Styled'

type Props = {
  dadosUsuario: {
    urlFoto: string
    nome: string
    usuario: string
    portfolio: string
    biografia: string
    repositorios: string
  }
}

const Sobre = (props: Props) => {
  const { usuario, biografia } = props.dadosUsuario
  const linguagensUtilizadas = `https://github-readme-stats.vercel.app/api/top-langs/?username=${usuario}&custom_title=Linguagens%20mais%20utilizadas&title_color=00ed63&text_color=fff&bg_color=282a35`
  const detalhesDaConta = `https://github-readme-stats.vercel.app/api?username=${usuario}&custom_title=Detalhes&show_icons=true&theme=radical&title_color=00ed63&text_color=fff&bg_color=282a35&icon_color=00c150`

  return (
    <section>
      <Titulo fontSize={16}>Sobre</Titulo>
      <Paragrafo>{biografia}</Paragrafo>
      <GitHubSecao>
        <img src={linguagensUtilizadas} />
        <img src={detalhesDaConta} />
      </GitHubSecao>
    </section>
  )
}

export default Sobre
