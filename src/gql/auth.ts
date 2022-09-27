import { gql } from "@apollo/client";

export default {
  LOGIN_MUTATION: gql `
    mutation Login($email: String!, $password: String!) {
      login(data: { email: $email, password: $password }) {
        accessToken
        refreshToken
      }
    }
  `,

  REGISTER_MUTATION: gql `
    mutation Register($email: String!, $password: String!) {
      register(data: { email: $email, password: $password }) {
        accessToken
        refreshToken
      }
    }
  `,

  REFRESH_MUTATION: gql `
    mutation Refresh($refreshToken: String) {
      refresh(refreshToken: $refreshToken) {
        accessToken
        refreshToken
      }
    }
  `,

  SEARCH_USER: gql `
    query Search($query: String) {
      search(query: $query) {
        id
        email
        avatar
        userName
        online
        fullName
      }
    }
  `,
};
