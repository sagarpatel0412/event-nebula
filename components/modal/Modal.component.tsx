import React, { useEffect, useRef } from "react";
import { ModalComponentPropsInterface } from "../../interface/profile-interface";

function ModalComponent(props: ModalComponentPropsInterface) {
  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    modalCloseFromOutside();
  }, [props]);

  function modalCloseFromOutside(): void {
    if (typeof window !== "undefined") {
      document
        .getElementById("generalModal")
        ?.addEventListener("click", (e: any) => {
          if (modelRef.current && !modelRef.current?.contains(e.target)) {
            if (typeof props.setShowModal !== "undefined") {
              props.setShowModal(false);
            }
          }
        });
    }
  }

  return (
    <>
      {props.showModal ? (
        <>
          <div
            id="generalModal"
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div
                ref={modelRef}
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              >
                {props.children}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ModalComponent;
