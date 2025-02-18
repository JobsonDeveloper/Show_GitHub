import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const LoadingElement = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Loading = () => {
  return (
    <LoadingElement>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </LoadingElement>
  )
}

export default Loading
