import { gql } from "@apollo/client";

export const GET_EVENT_LISTS = gql`
  query GetEvents {
    getEvents {
      id
      image
      city
      description
      title
      status
      country
      state
      address
      event_time
      event_date
      users {
        id
        username
      }
      user_events {
        id
        firstname
      }
      event_sub_types {
        id
        value_info
      }
      events_rating_event {
        id
        rating_comment
      }
      events_feedback_event {
        id
        description
        feedback_user {
          id
          username
        }
        feedback_events {
          id
          contact
        }
      }
    }
  }
`;

export const GET_EVENT_LIST_BY_ID = gql`
  query GetEvent($id: String!) {
    getEvent(id: $id) {
      id
      image
      city
      description
      title
      status
      country
      state
      address
      event_time
      event_date
      users {
        id
        username
      }
      user_events {
        id
        firstname
      }
      event_sub_types {
        id
        value_info
      }
      events_rating_event {
        id
        rating_comment
      }
      events_feedback_event {
        id
        description
        feedback_user {
          id
          username
        }
        feedback_events {
          id
          contact
        }
      }
    }
  }
`;

export const ENROLL_EVENTS = gql`
  mutation EnrollEvent($createUsersEventInput: CreateUsersEventsInput!) {
    enrollEvents(createUsersEventInput: $createUsersEventInput) {
      id
      is_active
    }
  }
`;
