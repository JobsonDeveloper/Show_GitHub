import styled, { createGlobalStyle } from 'styled-components'

const ResetGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  body {
    padding-top: 80px;

    @media (max-width: 768px) {
      padding-top: 16px;
    }
  }
`
export default ResetGlobal

export const Container = styled.div`
  display: grid;
  grid-template-columns: 128px auto;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  column-gap: 56px;

  img {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`
