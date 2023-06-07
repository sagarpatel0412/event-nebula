import { gql } from "@apollo/client";

export const GET_USER_POSTS = gql`
  query GetUserPosts {
    getUserPosts {
      id
      comments {
        id
        description
        comment
        status
      }
      metatitle
      metadescription
      status
      likes {
        id
        description
        status
        likes
      }
      image
      title
      description
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($updateUserInput: UpdateUserInput!) {
    updateProfile(updateUserInput: $updateUserInput) {
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
`;

export const CREATE_USER_POST = gql`
  mutation CreateUserPost(
    $createUserCelestialPostInput: CreateUserCelestialPostInput!
  ) {
    createUserPost(
      createUserCelestialPostInput: $createUserCelestialPostInput
    ) {
      id
      title
      metatitle
      description
      metadescription
      status
      image
    }
  }
`;
