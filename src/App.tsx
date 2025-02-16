import React from 'react'
import ResetGlobal, { Container } from './Styled'
import Sidebar from './containers/Sidebar/Sidebar'
import Sobre from './containers/Sobre/Sobre'
import Projetos from './containers/Projetos/Projetos'

function App() {
  return (
    <>
      <ResetGlobal />

      <Container>
        <Sidebar />

        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
