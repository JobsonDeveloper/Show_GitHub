import React from 'react'
import Titulo from '../../components/Titulo/Titulo'
import Paragrafo from '../../components/Paragrafo/Paragrafo'
import { GitHubSecao } from './Styled'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre</Titulo>
      <Paragrafo>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
        quaerat inventore dolores similique laboriosam culpa assumenda delectus
        quo quidem, tempore facere vitae minus soluta consequatur! Et recusandae
        eos expedita eaque. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Et quia assumenda numquam laudantium quo. Qui ratione ea facere.
        Deleniti repudiandae neque aliquam nobis veniam in ea nemo suscipit,
        totam fugit.
      </Paragrafo>
      <GitHubSecao>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JobsonDeveloper&custom_title=Linguagens%20mais%20utilizadas&title_color=00ed63&text_color=fff&bg_color=282a35" />
        <img src="https://github-readme-stats.vercel.app/api?username=JobsonDeveloper&custom_title=Detalhes&show_icons=true&theme=radical&title_color=00ed63&text_color=fff&bg_color=282a35&icon_color=00c150" />
      </GitHubSecao>
    </section>
  )
}

export default Sobre
