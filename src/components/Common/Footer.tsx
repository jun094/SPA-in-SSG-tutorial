import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  background-color: #19508b;
  color: white;
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Study Hard 🔥🔥🔥
      <br />© 2022 HolyMoly.Jun
    </FooterWrapper>
  )
}

export default Footer
