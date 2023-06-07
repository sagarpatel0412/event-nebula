import React, { useMemo } from "react";
import HeaderComponent from "../header/Header.component";
import FooterComponent from "../footer/Footer.component";
import useClientQuery from "../../graphql/useClientQuery";
import { IS_AUTHORIZED } from "../../queries/login-query";
import { PROFILE_DETAILS } from "../../queries/start-page-query";
import { useMutation } from "@apollo/client";
import { CREATE_SUBSCRIPTION } from "../../queries/footer-query";

interface CommonModuleComponentInterface {
  children?: React.ReactNode;
}

function CommonModuleComponent(props: CommonModuleComponentInterface) {
  const profileDetails = useClientQuery(PROFILE_DETAILS);
  const { loading, data } = useClientQuery(IS_AUTHORIZED, {
    errorPolicy: "all",
  });

  const [createSubscription, createSubscriptionStatus] =
    useMutation(CREATE_SUBSCRIPTION);

  const profileDetail = useMemo(() => {
    if (typeof profileDetails.data !== "undefined") {
      return profileDetails.data.profileDetails;
    }
  }, [profileDetails]);

  const isAuthorizedUser = useMemo(() => {
    if (typeof data !== "undefined") {
      return data?.isAuthorizedUser;
    }
  }, [data]);

  return (
    <div>
      <HeaderComponent
        profileDetail={profileDetail}
        isAuthorizedUser={isAuthorizedUser}
      />
      {props.children}
      <FooterComponent
        createSubscription={createSubscription}
        createSubscriptionStatus={createSubscriptionStatus}
      />
    </div>
  );
}

export default CommonModuleComponent;
