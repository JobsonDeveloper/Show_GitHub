import React from 'react'
import { Titulo as TituloEstilizado } from './Styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <TituloEstilizado fontSize={props.fontSize}>
    {props.children}
  </TituloEstilizado>
)

export default Titulo
