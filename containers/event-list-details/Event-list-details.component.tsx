import React, { use, useEffect, useState } from "react";
import {
  EnrollStateInterface,
  EventListDetailsComponentPropsInterface,
} from "../../interface/event-list-interface";
import CommonModuleComponent from "../../components/common-module/Common-module.component";
import { ToastContainer, toast } from "react-toastify";

function EventListDetailsComponent(
  props: EventListDetailsComponentPropsInterface
) {
  const [enroll, setEnroll] = useState<EnrollStateInterface>({
    userId: "",
    eventId: "",
    is_active: true,
  });

  const [buttonActive, setButtonActive] = useState<boolean>(true);

  useEffect(() => {
    if (Object.keys(props).length > 0) {
      if (
        typeof props.profileDetail !== "undefined" &&
        typeof props.id !== "undefined"
      ) {
        setEnroll({
          userId: props.profileDetail.id,
          eventId: props.id,
          is_active: true,
        });
        props.getEventByIdData?.user_events.map((i: any) => {
          if (
            i.id === props.profileDetail?.id &&
            props.getEventByIdData.id === props.id
          ) {
            setButtonActive(false);
          }
        });
      }
    }
  }, [props]);

  const registerEvent = (): void => {
    props
      .enrollEvents({ variables: { createUsersEventInput: enroll } })
      .then((res: any) => {
        toast.success("Register in event successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err: any) => {
        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <CommonModuleComponent>
      {typeof props.getEventByIdData !== "undefined" ? (
        <div className="min-h-screen">
          <div className="grid grid-cols-2 gap-2 mx-10 my-10">
            <div className="mx-10 my-10">
              <h1 className="text-3xl font-bold">Event Details</h1>
              <img
                src={`https://unsplash.com/photos/wI2Hafqr_f4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZGolMjBwYXJ0eXxlbnwwfHx8fDE2ODUzOTA5MDZ8MA&force=true`}
              />
            </div>
            <div className="my-10 mx-10">
              <p className="font-bold">
                address:{props.getEventByIdData.address}
              </p>
              <p className="font-bold">title:{props.getEventByIdData.title}</p>
              <p className="font-bold">
                description:{props.getEventByIdData.description}
              </p>
              <p className="font-bold">
                country:{props.getEventByIdData.country}
              </p>
              <p className="font-bold">city:{props.getEventByIdData.city}</p>
              <p className="font-bold">
                event date:{props.getEventByIdData.event_date}
              </p>
              <p className="font-bold">
                event time:{props.getEventByIdData.event_time}
              </p>
              <p className="font-bold">
                Create by:&nbsp;@{props.getEventByIdData.users.username}
              </p>
              {typeof props.isAuthorizedUser !== "undefined" ? (
                <button
                  onClick={() => registerEvent()}
                  className="bg-gray-900 text-white px-3 py-3 hover:bg-white hover:text-black hover:border-1 disabled:bg-gray-600"
                  disabled={buttonActive === false ? true : false}
                >
                  {buttonActive === false
                    ? "Already Registered"
                    : "Register in Event"}
                </button>
              ) : (
                <p className="font-bold p-2">
                  you need to login for register in event
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen min-w-screen flex align-items-center justify-content-center">
          loading...
        </div>
      )}
      <ToastContainer />
    </CommonModuleComponent>
  );
}

export default EventListDetailsComponent;
