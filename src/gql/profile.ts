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

  PROFILE_MUTATION: gql `
  mutation UpdateProfile($email: String, $avatar: String, $thumbnailImage: String, $userName: String, $fullName: String, $description: String, $address: String, $phone: String) {
    profile(data: { email: $email, avatar: $avatar, thumbnailImage: $thumbnailImage, userName: $userName, fullName: $fullName, description: $description, address: $address, phone: $phone }) {
      id
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
    }
  }
`,
};

export default profile;
