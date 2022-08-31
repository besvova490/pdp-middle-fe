import { gql } from "@apollo/client";

const profile = {
  PROFILE_QUERY: gql `
    query Profile {
      profile {
        email
        avatar
        thumbnailImage
        userName
        fullName
        description
        address
        phone
        createdAt
        updatedAt
        id
      }
    }
  `,
};

export default profile;
