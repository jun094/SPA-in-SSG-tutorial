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

  // Markdown Style
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;
  color: white;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 30px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 80px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #e1e1e1;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }
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
