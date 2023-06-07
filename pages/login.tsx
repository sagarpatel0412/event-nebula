import React, { useEffect } from "react";
import LoginComponent from "../containers/login/Login.component";
import { useMutation } from "@apollo/client";
import { IS_AUTHORIZED, LOGIN_QUERY } from "../queries/login-query";
import { saveInLocalStorage } from "../helpers/browser";
import { GET_AUTHORIZED, SET_AUTHORIZED } from "../graphql/resolvers";
import useClientQuery from "../graphql/useClientQuery";
import Head from "next/head";

function Login(props: any) {
  const [signIn, signInStatus] = useMutation(LOGIN_QUERY, {
    onCompleted: (data) => {
      saveInLocalStorage("token", data.signIn.token);
    },
  });

  const [setAuthorized] = useMutation(SET_AUTHORIZED);
  const { loading, data } = useClientQuery(IS_AUTHORIZED, {
    errorPolicy: "all",
  });

  return (
    <div>
      <Head>
        <title>Login | Nebula Events</title>
      </Head>
      <LoginComponent
        sendLogin={signIn}
        sendLoginStatus={signInStatus}
        setAuthorized={setAuthorized}
      />
    </div>
  );
}

export default Login;
