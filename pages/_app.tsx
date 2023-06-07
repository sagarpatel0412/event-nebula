import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "../graphql/apolloClient";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../helpers/browser";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/error/Error.component";
import useClientQuery from "../graphql/useClientQuery";
import { IS_AUTHORIZED } from "../queries/login-query";

config.autoAddCss = false;

interface AuthAppProps extends AppProps {
  authBoolean?: boolean;
  setAuthorized?: React.Dispatch<
    React.SetStateAction<boolean | any | undefined>
  >;
  search?: string;
}

export const AuthContext = createContext<boolean | any>(null);
export const SearchContext = createContext<any>(null);

const App = ({ Component, pageProps }: AuthAppProps) => {
  const [routesFormation, setRoutesFormation] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const routerFor = useRouter();

  const [authorized, setAuthorized] = useState<boolean | undefined>(false);
  const { loading, data, error } = useClientQuery(IS_AUTHORIZED, {
    errorPolicy: "all",
  });
  const token = getFromLocalStorage("token");

  useEffect(() => {
    if (typeof data !== "undefined" && data !== null) {
      if (typeof data.isAuthorizedUser !== "undefined") {
        if (data.isAuthorizedUser) {
          if (typeof window !== "undefined") {
            if (window.location.href.includes("/login")) {
              setRoutesFormation(false);
              routerFor.push("/");
            } else if (window.location.href.includes("/register")) {
              setRoutesFormation(false);
              routerFor.push("/");
            } else {
              setRoutesFormation(true);
            }
          }
        } else {
          // removeFromLocalStorage("token");
          if (token === null) {
            if (typeof window !== "undefined") {
              if (window.location.href.includes("/login")) {
                setRoutesFormation(true);
              } else if (window.location.href.includes("/register")) {
                setRoutesFormation(true);
              } else if (window.location.href.includes("/about")) {
                setRoutesFormation(false);
                // routerFor.push("/");
              } else if (window.location.href.includes("/contact-us")) {
                setRoutesFormation(false);
                // routerFor.push("/");
              } else {
                setRoutesFormation(false);
                routerFor.push("/login");
              }
            }
          } else {
            if (typeof window !== "undefined") {
              // removeFromLocalStorage("token");
              if (window.location.href.includes("/login")) {
                setRoutesFormation(false);
                routerFor.push("/");
              } else if (window.location.href.includes("/register")) {
                setRoutesFormation(false);
                routerFor.push("/");
              } else if (window.location.href.includes("/about")) {
                setRoutesFormation(false);
                // routerFor.push("/");
              } else if (window.location.href.includes("/contact-us")) {
                setRoutesFormation(false);
                // routerFor.push("/");
              } else {
                routerFor.push("/");
              }
            }
          }
        }
      }
    } else if (typeof data !== "undefined" && data === null) {
      console.log("data is null");
      if (token === null) {
        if (typeof window !== "undefined") {
          if (window.location.href.includes("/login")) {
            setRoutesFormation(true);
          } else if (window.location.href.includes("/register")) {
            setRoutesFormation(true);
          } else if (window.location.href.includes("/about")) {
            setRoutesFormation(false);
            // routerFor.push("/");
          } else if (window.location.href.includes("/contact-us")) {
            setRoutesFormation(false);
            // routerFor.push("/");
          } else {
            setRoutesFormation(false);
            // routerFor.push("/login");
          }
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof window !== "undefined" && window.location.href, data]);

  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <AuthContext.Provider value={setAuthorized}>
        <SearchContext.Provider value={[search, setSearch]}>
          <Component
            {...pageProps}
            authBoolean={routesFormation}
            setAuthorized={setAuthorized}
            search={search}
          />
        </SearchContext.Provider>
      </AuthContext.Provider>
    </ErrorBoundary>
  );
};

const Wrap = (props: AuthAppProps) => {
  // console.log("rpops", props);
  const apolloClient = createApolloClient();
  return (
    <ApolloProvider client={apolloClient}>
      <App {...props} />
    </ApolloProvider>
  );
};

export default Wrap;
