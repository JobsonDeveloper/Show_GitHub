import React from 'react'
import { Titulo as TituloEstilizado } from './Styles'

export type Props = {
  children: string
  fontSize?: number
  align?: string
}

const Titulo = (props: Props) => (
  <TituloEstilizado fontSize={props.fontSize} align={props.align}>
    {props.children}
  </TituloEstilizado>
)

export default Titulo
