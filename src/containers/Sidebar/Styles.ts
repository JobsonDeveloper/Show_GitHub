import styled from 'styled-components'
import { P } from '../../components/Paragrafo/Styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const Botao = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  width: 120px;
  margin-top: 15px;
  border-color: transparent;
`

export const BotaoLink = styled(Botao)`
  background-color: ${(props) => props.theme.corDeFundoBotao};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.corDeFundo};
  }
`

export const SidebarContainer = styled.aside`
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  margin-bottom: 80px;
  align-items: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`
