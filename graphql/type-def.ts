import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Profile {
    id: Int!
    email: String!
    name: String!
    audienceId: AUDIENCES!
    language: String!
    mailing: Boolean!
    editions: [SpecialEdition!]
  }

  type Query {
    isAuthorized: Boolean!
    isSidebarMenuShown: Boolean
    isSettingsShown: Boolean
    isSupportShown: Boolean
    isFiltersShown: Boolean
  }

  type Mutation {
    setAuthorized(isAuthorized: Boolean!): Boolean!
    setSidebarMenuShown(isShown: Boolean!): Boolean!
    setSettingsShown(isShown: Boolean!): Boolean!
    setSupportShown(isShown: Boolean!): Boolean!
    setFiltersShown(isShown: Boolean!): Boolean!
  }
`;
