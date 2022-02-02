import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import { PostListItemType } from 'types/PostItem.types'
import PostItem from './PostItem'

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

type PostListProps = {
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
    <PostListWrapper>
      {posts.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem key={id} link="https://github.com/jun094" {...frontmatter} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
