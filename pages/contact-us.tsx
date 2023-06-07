import React, { useEffect, useMemo } from "react";
import ContactFormComponent from "../containers/contact/Contact-form.component";
import { useMutation } from "@apollo/client";
import { CREATE_CONTACT_FORM } from "../queries/contactus-query";
import useClientQuery from "../graphql/useClientQuery";
import { IS_AUTHORIZED } from "../queries/login-query";
import { PROFILE_DETAILS } from "../queries/start-page-query";
import Head from "next/head";

function ContactUs(props: any) {
  const [createContactForm, createContactFormStatus] =
    useMutation(CREATE_CONTACT_FORM);
  const profileDetails = useClientQuery(PROFILE_DETAILS);
  const { loading, data, error } = useClientQuery(IS_AUTHORIZED, {
    errorPolicy: "all",
  });

  const profileDetail = useMemo(() => {
    if (typeof profileDetails.data !== "undefined") {
      return profileDetails.data.profileDetails;
    }
  }, [profileDetails]);

  const isAuthorizedUser = useMemo(() => {
    if (typeof data !== "undefined") {
      return data?.isAuthorized;
    }
  }, [data]);
  return (
    <div>
      <Head>
        <title>Contact Us | Nebula Events</title>
      </Head>
      <ContactFormComponent
        createContactForm={createContactForm}
        createContactFormStatus={createContactFormStatus}
      />
    </div>
  );
}

export default ContactUs;
