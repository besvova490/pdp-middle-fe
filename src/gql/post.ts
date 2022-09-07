import { gql } from "@apollo/client";

export default {
  QUERY_SINGLE_POST: gql `
    query Post($id: Int!) {
      post(id: $id) {
        id
        thumbnail
        title
        description
        location
        createdAt
        updatedAt
        author {
          avatar
          userName
        }
        tags {
          name
          id
        }
        comments {
          body
          createdAt
          author {
            userName
            avatar
          }
        }
      }
    }
  `,
  QUERY_POSTS: gql `
    query Posts {
      posts {
        id
        thumbnail
        title
        description
        location
        createdAt
        updatedAt
        author {
          userName
          avatar
        }
      }
    }
  `,
  QUERY_MY_POSTS: gql `
    query MyPosts {
      myPosts {
        id
        thumbnail
        title
        description
        location
        createdAt
        updatedAt
        author {
          id
          email
          avatar
          userName
        }
        tags {
          id
          name
        }
      }
    }
  `,
  ADD_POST_COMMENT: gql `
    mutation AddComment($addCommentId: Int!, $comment: String!) {
      addComment(id: $addCommentId, comment: $comment)
    }
  `,
  CREATE_POST_MUTATION: gql `
    mutation CreatePost($title: String!, $description: String, $thumbnail: String, $location: String, $tags: [Int]) {
      createPost(data: { title: $title, description: $description, thumbnail: $thumbnail, location: $location, tags: $tags }) {
        id
        thumbnail
        title
        description
        location
        createdAt
        updatedAt
      }
    }
  `,
};
