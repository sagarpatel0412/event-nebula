import { gql } from "@apollo/client";

export const CREATE_SUBSCRIPTION = gql`
  mutation createSubscription(
    $createSubscriptionFormInput: CreateSubscriptionFormInput!
  ) {
    createSubscription(
      createSubscriptionFormInput: $createSubscriptionFormInput
    ) {
      id
      email
      status
      is_sent_email
    }
  }
`;
