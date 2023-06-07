import { ApolloCache, ApolloClient, Resolvers, gql } from "@apollo/client";

export const GET_AUTHORIZED = gql`
  query {
    isAuthorized @client
  }
`;

export const GET_USER_EMAIL = gql`
  query {
    userEmail @client
  }
`;

export const GET_MENU_SHOWN = gql`
  query {
    isSidebarMenuShown @client
  }
`;

export const GET_SETTINGS_SHOWN = gql`
  query {
    isSettingsShown @client
  }
`;

export const GET_SUPPORT_SHOWN = gql`
  query {
    isSupportShown @client
  }
`;

export const GET_FILTERS_SHOWN = gql`
  query {
    isFiltersShown @client
  }
`;

export const GET_GUARANTEE_SHOWN = gql`
  query {
    isGuaranteeShown @client
  }
`;

export const GET_SHARED_PASSWORD = gql`
  query {
    sharedPassword @client
  }
`;

export const SET_AUTHORIZED = gql`
  mutation ($isAuthorized: Boolean!) {
    setAuthorized(isAuthorized: $isAuthorized) @client
  }
`;

export const SET_PROFILE = gql`
  mutation ($profile: Profile!) {
    setProfile(profile: $profile) @client
  }
`;

export const SET_MENU_SHOWN = gql`
  mutation ($isShown: Boolean!) {
    setSidebarMenuShown(isShown: $isShown) @client
  }
`;

export const SET_SETTINGS_SHOWN = gql`
  mutation ($isShown: Boolean!) {
    setSettingsShown(isShown: $isShown) @client
  }
`;

export const SET_SUPPORT_SHOWN = gql`
  mutation ($isShown: Boolean!) {
    setSupportShown(isShown: $isShown) @client
  }
`;

export const SET_FILTERS_SHOWN = gql`
  mutation ($isShown: Boolean!) {
    setFiltersShown(isShown: $isShown) @client
  }
`;

export const SET_GUARANTEE_SHOWN = gql`
  mutation ($isShown: Boolean!) {
    setGuaranteeShown(isShown: $isShown) @client
  }
`;

export const SET_USER_EMAIL = gql`
  mutation ($email: String!) {
    setUserEmail(email: $email) @client
  }
`;

export const SET_SHARED_PASSWORD = gql`
  mutation ($password: String!) {
    setSharedPassword(password: $password) @client
  }
`;

export const LOG_PAGE_VISIT = gql`
  mutation logPageVisit($page: String!) {
    logPageVisit(page: $page)
  }
`;

type ResolverFn = (
  parent: any,
  args: any,
  context: {
    cache: ApolloCache<any>;
    client: ApolloClient<any>;
  }
) => any;

interface ResolverMap {
  [field: string]: ResolverFn;
}

interface AppResolvers extends Resolvers {
  Mutation: ResolverMap;
  Query: ResolverMap;
}

interface AppResolvers extends Resolvers {
  Mutation: ResolverMap;
  Query: ResolverMap;
}

export const resolvers: AppResolvers = {
  Query: {},
  Mutation: {
    setSidebarMenuShown: (_, { isShown }, { cache }): boolean => {
      cache.writeQuery({
        query: GET_MENU_SHOWN,
        data: { isSidebarMenuShown: isShown },
      });

      return isShown;
    },
    setSettingsShown: (_, { isShown }, { cache }): boolean => {
      cache.writeQuery({
        query: GET_SETTINGS_SHOWN,
        data: { isSettingsShown: isShown },
      });

      return isShown;
    },
    setSupportShown: (_, { isShown }, { cache }): boolean => {
      cache.writeQuery({
        query: GET_SUPPORT_SHOWN,
        data: { isSupportShown: isShown },
      });

      return isShown;
    },
    setFiltersShown: (_, { isShown }, { cache }): boolean => {
      cache.writeQuery({
        query: GET_FILTERS_SHOWN,
        data: { isFiltersShown: isShown },
      });

      return isShown;
    },
    setGuaranteeShown: (_, { isShown }, { cache }): boolean => {
      cache.writeQuery({
        query: GET_GUARANTEE_SHOWN,
        data: { isGuaranteeShown: isShown },
      });

      return isShown;
    },
    setAuthorized: (_, { isAuthorized }, { cache }): boolean => {
      cache.writeQuery({
        query: GET_AUTHORIZED,
        data: { isAuthorized },
      });

      return isAuthorized;
    },
    setUserEmail: (_, { email }, { cache }): string => {
      cache.writeQuery({
        query: GET_USER_EMAIL,
        data: { userEmail: email },
      });

      return email;
    },
    setSharedPassword: (_, { password }, { cache }): string => {
      cache.writeQuery({
        query: GET_SHARED_PASSWORD,
        data: { sharedPassword: password },
      });

      return password;
    },
  },
};
