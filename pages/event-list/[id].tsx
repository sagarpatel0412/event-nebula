import { useRouter } from "next/router";
import React, { useMemo } from "react";
import useClientQuery from "../../graphql/useClientQuery";
import {
  ENROLL_EVENTS,
  GET_EVENT_LIST_BY_ID,
} from "../../queries/event-list-query";
import LoaderComponent from "../../components/loader/Loader.component";
import EventListDetailsComponent from "../../containers/event-list-details/Event-list-details.component";
import { useMutation } from "@apollo/client";
import { PROFILE_DETAILS } from "../../queries/start-page-query";
import { IS_AUTHORIZED } from "../../queries/login-query";

function EventListDetails() {
  const router = useRouter();
  const { id } = router.query as any;

  const getEventById = useClientQuery(GET_EVENT_LIST_BY_ID, {
    variables: { id: typeof id !== "undefined" ? id : "" },
    onError: (error) => {
      // setErrorMsg(error.message);
      console.log("error", error.message);
    },
    onCompleted: (res) => {
      if (Object.keys(res).length > 0) {
        // setErrorMsg("");
      }
    },
  });

  const [enrollEvents, enrollEventsStatus] = useMutation(ENROLL_EVENTS, {
    refetchQueries: [{ query: GET_EVENT_LIST_BY_ID }],
  });

  const profileDetails = useClientQuery(PROFILE_DETAILS);

  const { loading, data } = useClientQuery(IS_AUTHORIZED, {
    errorPolicy: "all",
  });

  const getEventByIdData = useMemo(() => {
    if (typeof getEventById !== "undefined") {
      return getEventById.data?.getEvent;
    }
  }, [getEventById]);

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
      {typeof getEventById !== "undefined" ? (
        <EventListDetailsComponent
          id={id}
          getEventByIdData={getEventByIdData}
          enrollEvents={enrollEvents}
          enrollEventsStatus={enrollEventsStatus}
          profileDetail={profileDetail}
          isAuthorizedUser={isAuthorizedUser}
        />
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

export default EventListDetails;
