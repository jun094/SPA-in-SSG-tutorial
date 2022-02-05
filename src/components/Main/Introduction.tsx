import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import ProfileImage from 'components/Main/ProfileImage'

const Background = styled.div`
  width: 100%;
  color: white;
  background-color: black;
  border-bottom: 1px solid #333;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 38px;
  font-weight: 700;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, #007cf0, #00dfd8);
`

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div>
          <SubTitle>HI !</SubTitle>
          <Title>Welcome to SPA in SSG tutorial</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction
