import React, { useEffect } from "react";
import SignupComponent from "../containers/signup/Signup.component";
import useClientQuery from "../graphql/useClientQuery";
import { CREATE_USER_INPUT, GET_USER_ROLES } from "../queries/signup-query";
import { useMutation } from "@apollo/client";
import { IS_AUTHORIZED } from "../queries/login-query";
import Head from "next/head";

function Register(props: any) {
  const getUserRole = useClientQuery(GET_USER_ROLES);
  const [createUser, createUserStatus] = useMutation(CREATE_USER_INPUT);

  const { loading, data } = useClientQuery(IS_AUTHORIZED, {
    errorPolicy: "all",
  });

  const userRoles = React.useMemo(() => {
    if (typeof getUserRole?.data !== "undefined") {
      return getUserRole.data.getUserRoles;
    }
  }, [getUserRole]);

  return (
    <div>
      <Head>
        <title>Register | Nebula Events</title>
      </Head>
      <SignupComponent userRoles={userRoles} createUser={createUser} />
    </div>
  );
}

export default Register;
