import { gql } from "@apollo/client";

export const CREATE_CONTACT_FORM = gql`
  mutation CreateContactForm($createContactFromInput: CreateContactFromInput!) {
    createContactFrom(createContactFromInput: $createContactFromInput) {
      id
      name
      email
      status
      title
      description
    }
  }
`;
