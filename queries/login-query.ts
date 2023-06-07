import { gql } from "@apollo/client";

export const LOGIN_QUERY = gql`
  mutation ($email: String!, $password: String!, $role: String!) {
    signIn(email: $email, password: $password, role: $role) {
      token
      user {
        id
        email
        status
        usersRole {
          id
          name
          value_info
        }
      }
    }
  }
`;

export const IS_AUTHORIZED = gql`
  query {
    isAuthorizedUser
  }
`;
