import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../helpers/browser";
import { typeDefs } from "./type-def";
import { GET_AUTHORIZED, resolvers } from "./resolvers";
import { IS_AUTHORIZED } from "../queries/login-query";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      if (message === "Unauthorized") {
        console.log("token should be removed");
      }
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: "http://localhost:8001/graphql",
  headers: {
    Authorization: `Bearer ${getFromLocalStorage("token")}`,
  },
  // credentials: "include",
});
export const createApolloClient = () => {
  const cache = new InMemoryCache();
  if (getFromLocalStorage("token") === null) {
    cache.writeQuery({
      query: GET_AUTHORIZED,
      data: { isAuthorized: false },
    });
  }

  const client = new ApolloClient({
    uri: process.env.BACKEND_GRAPHQL_URL,
    // link: from([errorLink, httpLink]),
    cache,
    typeDefs: typeDefs,
    resolvers: resolvers,
    headers: {
      authorization: `Bearer ${getFromLocalStorage("token")}`,
    },
  });
  return client;
};
