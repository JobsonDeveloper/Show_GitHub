import React from 'react'
import { FotoPerfil } from './Styles'

type Props = {
  urlFoto: string
}

const Avatar = (props: Props) => {
  return <FotoPerfil src={props.urlFoto} />
}

export default Avatar
