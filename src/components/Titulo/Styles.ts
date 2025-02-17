import styled from 'styled-components'
import { Props } from './Titulo'

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '16px')};
  font-weight: bold;
  margin-bottom: 16px;
`
