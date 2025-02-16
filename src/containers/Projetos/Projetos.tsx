import React from 'react'
import Titulo from '../../components/Titulo/Titulo'
import Projeto from '../../components/Projeto/Projeto'
import { Lista } from './Styles'

const Projetos = () => {
  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>

      <Lista>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
      </Lista>
    </section>
  )
}

export default Projetos
