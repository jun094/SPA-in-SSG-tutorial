import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type PostContentProps = {
  html: string
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 100px 0;
`

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  /**
   * innerHtml 대신 dangerouslySetInnerHTML을 사용하자 !
   *
   * See: <https://okayoon.tistory.com/entry/React-DOM%EC%97%98%EB%A6%AC%EB%A8%BC%ED%8A%B8%EC%97%90-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EC%82%BD%EC%9E%85%ED%95%98%EA%B8%B0-innerHTML%EB%A7%90%EA%B3%A0-dangerouslySetInnerHTML%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%9E%90>
   */

  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
