import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import GlobalStyle from 'components/Common/GlobalStyle'

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const NotFoundText = styled.div`
  font-size: 100px;
  font-weight: 800;
  color: white;

  @media (max-width: 768px) {
    font-size: 60px;
  }
`

const GoToMainButton = styled(Link)`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 400;

  &:hover {
    font-weight: 600;
  }
`

const NotFoundPage: FunctionComponent = function () {
  return (
    <NotFoundPageWrapper>
      <GlobalStyle />
      <NotFoundText>404 Error :(</NotFoundText>
      <GoToMainButton to="/">{'>'} GO TO MAIN</GoToMainButton>
    </NotFoundPageWrapper>
  )
}

export default NotFoundPage
