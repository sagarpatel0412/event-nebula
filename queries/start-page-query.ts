import { gql } from "@apollo/client";

export const PROFILE_DETAILS = gql`
  query {
    profileDetails {
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
