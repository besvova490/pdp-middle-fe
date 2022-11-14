import { gql } from "@apollo/client";


export default {
  COMMENTS_SUBSCRIPTION: gql `
    subscription NewCommentAtPost {
      newCommentAtPost {
        id
        body
        createdAt
        author
        postId
        postTitle
      }
    }
  `,
};
