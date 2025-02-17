import styled from 'styled-components'
import { P } from '../../components/Paragrafo/Styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`

export const SidebarContainer = styled.aside`
  position: sticky;
  top: 80px;
  left: 0;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    text-align: center;
  }
`
