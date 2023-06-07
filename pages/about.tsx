import React, { useEffect } from "react";
import AboutusComponent from "../containers/about-us/Aboutus.component";
import useClientQuery from "../graphql/useClientQuery";
import { IS_AUTHORIZED } from "../queries/login-query";
import Head from "next/head";

function About(props: any) {
  const { loading, data } = useClientQuery(IS_AUTHORIZED, {
    errorPolicy: "all",
  });

  return (
    <div>
      <Head>
        <title>About Us | Nebula Events</title>
      </Head>
      <AboutusComponent />
    </div>
  );
}

export default About;
