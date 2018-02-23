import React from 'react'
import styled from 'styled-components'

/**
 * A Title
 * @snapshot
 * <Title>MyTitle</Title>
 * 
 * @snapshot
 * <Title background="blue">My blue Title</Title>
 */
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  background-color: ${props => props.background}
  color: palevioletred;
`

export default Title
