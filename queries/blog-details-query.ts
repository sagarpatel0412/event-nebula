import { gql } from "@apollo/client";

export const GET_POST = gql`
  query GetPost($id: String!) {
    getPost(id: $id) {
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
        city
      }
      likes {
        id
        description
        likes
        status
      }
      comments {
        id
        description
        comment
        status
      }
      post_users_likes {
        id
        email
        username
        firstname
        lastname
        city
      }
      posts_users_comments {
        id
        email
        username
        firstname
        lastname
        city
      }
    }
  }
`;
