import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts {
    getPosts {
      id
      image
      title
      description
      metatitle
      metadescription
      status
      users {
        id
        email
        username
        firstname
        lastname
        address1
        address2
        city
        state
        country
      }
    }
  }
`;
