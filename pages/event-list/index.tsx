import React, { useMemo } from "react";
import useClientQuery from "../../graphql/useClientQuery";
import { GET_EVENT_LISTS } from "../../queries/event-list-query";
import EventListComponent from "../../containers/event-list/Event-list.component";
import LoaderComponent from "../../components/loader/Loader.component";


function EventList() {
  const getEvents = useClientQuery(GET_EVENT_LISTS);

  const getEventsData = useMemo(() => {
    if (typeof getEvents !== "undefined") {
      return getEvents.data?.getEvents;
    }
  }, [getEvents]);

  console.log("getEventsData", getEventsData);
  return (
    <div>
      {typeof getEvents !== "undefined" ? <EventListComponent getEventsData={getEventsData}/> : <LoaderComponent />}
    </div>
  );
}

export default EventList;