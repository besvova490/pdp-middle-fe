import { gql } from "@apollo/client";

const auth = {
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
};

export default auth;
