import React, { FC } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  box-shadow: 1px 2px 4px 0px grey;
  border-radius: 3px;
  object-fit: cover;
  overflow: hidden;
`

const CardImage: FC = ({ children }) => {
  return <Div>{children}</Div>
}

export default CardImage
