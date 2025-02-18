import React, { useEffect, useState } from 'react'
import ResetGlobal, { Container } from './Styled'
import Sidebar from './containers/Sidebar/Sidebar'
import Sobre from './containers/Sobre/Sobre'
import Projetos from './containers/Projetos/Projetos'
import { ThemeProvider } from 'styled-components'
import Light from './Temas/Light'
import Dark from './Temas/Dark'
import { pegarDados } from './Api/Api'
import Loading from './components/Loading/Loading'

function App() {
  const [temaLight, setTemaLight] = useState(true)
  const [loading, setLoading] = useState(true)
  const url = 'https://api.github.com/users/JobsonDeveloper'
  const [dadosUsuario, setDadosUsuario] = useState({
    urlFoto: '',
    nome: '',
    usuario: '',
    portfolio: '',
    biografia: '',
    repositorios: ''
  })

  async function capturaDados() {
    const response = await pegarDados(url)

    setDadosUsuario({
      nome: response.name,
      urlFoto: response.avatar_url,
      usuario: response.login,
      portfolio: response.blog,
      biografia: response.bio,
      repositorios: response.repos_url
    })

    setLoading(false)
  }

  useEffect(() => {
    capturaDados()
  }, [])

  const mudaTema = () => {
    setTemaLight(!temaLight)
  }

  return (
    <ThemeProvider theme={temaLight ? Light : Dark}>
      <ResetGlobal />
      {loading && <Loading />}

      {!loading && (
        <Container>
          <Sidebar mudaTema={mudaTema} dadosUsuario={dadosUsuario} />
          <main>
            <Sobre dadosUsuario={dadosUsuario} />
            <Projetos url={dadosUsuario.repositorios} />
          </main>
        </Container>
      )}
    </ThemeProvider>
  )
}

export default App
