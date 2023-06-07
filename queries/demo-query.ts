import { gql } from "@apollo/client";

export const USER_COUNT = gql`
  query {
    userCount {
      count
    }
  }
`;
