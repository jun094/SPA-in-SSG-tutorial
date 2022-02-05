import React, { FunctionComponent, useMemo } from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import queryString, { ParsedQuery } from 'query-string'

import PageWrapper from 'components/Common/PageWrapper'
import Introduction from 'components/Main/Introduction'
import CategoryList, { CategoryListProps } from 'components/Main/CategoryList'
import PostList from 'components/Post/PostList'

import { PostListItemType } from 'types/PostItem.types'

type IndexPageProps = {
  location: {
    search: string
  }

  // query data
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

// query를 사용할 수 있는 컴포넌트에서는 기본 propsfh location과 query data 가 포함되어 있다.
const IndexPage: FunctionComponent<IndexPageProps> = function ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) {
  const parsed: ParsedQuery<string> = queryString.parse(search)

  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostListItemType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })

          list['All']++

          return list
        },
        { All: 0 },
      ),
    [],
  )

  return (
    <PageWrapper
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <Introduction profileImage={gatsbyImageData} />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </PageWrapper>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }

    file(name: { eq: "avatar" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`
