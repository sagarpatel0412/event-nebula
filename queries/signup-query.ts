import { gql } from "@apollo/client";

export const GET_USER_ROLES = gql`
  query {
    getUserRoles {
      id
      name
      value_info
      description
    }
  }
`;

export const CREATE_USER_INPUT = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
      username
      firstname
      lastname
      address1
      address2
      city
      state
      country
      status
      id
      usersRole {
        id
        name
        value_info
        description
      }
    }
  }
`;
