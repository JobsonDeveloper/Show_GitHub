import React, { useState } from 'react'
import ResetGlobal, { Container } from './Styled'
import Sidebar from './containers/Sidebar/Sidebar'
import Sobre from './containers/Sobre/Sobre'
import Projetos from './containers/Projetos/Projetos'
import { ThemeProvider } from 'styled-components'
import Light from './Temas/Light'
import Dark from './Temas/Dark'

function App() {
  const [temaLight, setTemaLight] = useState(true)

  const mudaTema = () => {
    setTemaLight(!temaLight)
  }

  return (
    <ThemeProvider theme={temaLight ? Light : Dark}>
      <ResetGlobal />

      <Container>
        <Sidebar mudaTema={mudaTema} />

        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
