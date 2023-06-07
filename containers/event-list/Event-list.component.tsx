import React from "react";
import CommonModuleComponent from "../../components/common-module/Common-module.component";
import { EventListComponentPropsInterface } from "../../interface/event-list-interface";
import EventCardComponent from "../../components/event-card/Event-card.component";

function EventListComponent(props: EventListComponentPropsInterface) {
  return (
    <CommonModuleComponent>
      <div className="min-h-screen">
        <div className="mx-10 my-10">
          <div className="mx-10 my-10">
            <h1 className="font-bold text-3xl">Event List</h1>
          </div>
        </div>
        <div className="mx-10 my-10">
          <div className="grid grid-cols-4 gap-4 mx-10 my-10">
            {typeof props.getEventsData !== "undefined" && props.getEventsData.map((i:any) => {
              return <EventCardComponent key={i.id} id={i.id} title={i.title} description={i.description} />
            })}
          </div>
        </div>
      </div>
    </CommonModuleComponent>
  );
}

export default EventListComponent;
