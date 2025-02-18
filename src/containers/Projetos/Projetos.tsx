import React, { useEffect, useState } from 'react'
import Titulo from '../../components/Titulo/Titulo'
import Projeto from '../../components/Projeto/Projeto'
import { Lista } from './Styles'
import { pegarDados } from '../../Api/Api'

type Props = {
  url: string
}

type RepoProps = {
  name: string
  description: string
  html_url: string
}

const Projetos = (props: Props) => {
  const [repositorios, setRepositorios] = useState([
    {
      projeto: {
        name: '',
        description: '',
        html_url: ''
      }
    }
  ])

  async function capturaDados() {
    const response = await pegarDados(props.url)
    const listaRepos = [
      {
        projeto: {
          name: '',
          description: '',
          html_url: ''
        }
      }
    ]

    response.map((item: RepoProps) => {
      listaRepos.push({
        projeto: {
          name: item.name,
          description: item.description,
          html_url: item.html_url
        }
      })
    })

    setRepositorios(listaRepos)
  }

  useEffect(() => {
    capturaDados()
  }, [])

  const listaProjetos = repositorios.map(
    (item, key) =>
      item.projeto.name != '' && (
        <li key={key}>
          <Projeto repositorio={item.projeto} />
        </li>
      )
  )

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>

      <Lista>{listaProjetos}</Lista>
    </section>
  )
}

export default Projetos
