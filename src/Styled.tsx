import styled, { createGlobalStyle } from 'styled-components'

const ResetGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    list-style-type: none;
  }

  body {
    padding: 80px 0;
    background-color: ${(props) => props.theme.corDeFundo};

    @media (max-width: 768px) {
      padding: 16px 0;
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

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`
