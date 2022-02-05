import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'

import { PostPageItemType } from 'types/PostItem.types'

import PageWrapper from 'components/Common/PageWrapper'
import PostHead from 'components/Post/PostHead'
import PostContent from 'components/Post/PostContent'

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
  }
}

// query를 사용할 수 있는 컴포넌트에서는 기본 propsfh location과 query data 가 포함되어 있다.
const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  location: { href },
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const {
    node: {
      html,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0]

  console.log(publicURL)
  return (
    <PageWrapper
      title={title}
      description={summary}
      url={href}
      image={publicURL}
    >
      <PostHead
        title={title}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
      />
      <PostContent html={html} />
    </PageWrapper>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
