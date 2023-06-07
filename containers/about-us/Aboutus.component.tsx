import React from "react";
import CommonModuleComponent from "../../components/common-module/Common-module.component";
import styles from "./Aboutus.module.scss";
import CarasoulComponent from "../../components/carasoul/Carasoul.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnchor,
  faAngleDown,
  faAnkh,
  faArrowLeft,
  faArrowsH,
  faAsterisk,
} from "@fortawesome/free-solid-svg-icons";

function AboutusComponent() {
  return (
    <CommonModuleComponent>
      <div className="min-h-screen">
        <div>
          <div className="mx-10 my-10">
            <div className="flex mx-10 my-10 justify-center">
              <div className="block">
                <div className="flex justify-center my-10">
                  <h1 className="text-5xl font-black">About Us</h1>
                </div>
                <div>
                  <p className="font-semibold">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-10 my-10">
            <div className="flex mx-10 ">
              <div className="block">
                <p className="my-5 font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <p className="my-5 font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
              <div className="block">
                <p className="my-5 font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <p className="my-5 font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="mx-10 my-10">
            <div className="mx-10 grid grid-cols-4 gap-4">
              <div className="border-l-4 border-black">
                <p className="px-10 text-3xl my-2 font-bold">hello</p>
                <p className="px-10 text-2xl my-2 font-bold">world</p>
              </div>
              <div className="border-l-4 border-black">
                <p className="px-10 text-3xl my-2 font-bold">hello</p>
                <p className="px-10 text-2xl my-2 font-bold">world</p>
              </div>
              <div className="border-l-4 border-black">
                <p className="px-10 text-3xl my-2 font-bold">hello</p>
                <p className="px-10 text-2xl my-2 font-bold">world</p>
              </div>
              <div className="border-l-4 border-black">
                <p className="px-10 text-3xl my-2 font-bold">hello</p>
                <p className="px-10 text-2xl my-2 font-bold">world</p>
              </div>
            </div>
          </div>
          <div className="mx-10 my-10">
            <div className="mx-10 py-10">
              <h1 className="text-4xl font-bold my-2">Time to fresh up</h1>
              <img
                src={
                  "https://unsplash.com/photos/ZhQCZjr9fHo/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8ZGolMjBwYXJ0eXxlbnwwfHx8fDE2ODMyNzQ0Mjc&force=true"
                }
                alt="about"
                className="rounded-md w-full h-full"
              />
            </div>
          </div>
          <div className="mx-10 my-10">
            <div className="mx-10 my-10 font-semibold">
              <div className="block" style={{ width: "58rem" }}>
                <h1 className="text-4xl font-bold my-5">Our values</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
              <div className="flex my-10">
                <div className="block">
                  <ul>
                    <li className="my-4 flex">
                      <FontAwesomeIcon
                        icon={faAnchor}
                        className="my-1 text-sky-600 font-bold text-lg"
                      />
                      <p className="mx-1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting
                      </p>
                    </li>
                    <li className="my-4 flex ">
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="my-1 text-sky-600 font-bold text-lg"
                      />
                      <p className="mx-1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting
                      </p>
                    </li>
                    <li className="my-4 flex">
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="my-1 text-sky-600 font-bold text-lg"
                      />
                      <p className="mx-1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="block">
                  <ul>
                    <li className="my-4 flex">
                      <FontAwesomeIcon
                        icon={faAnkh}
                        className="my-1 text-sky-600 font-bold text-lg"
                      />
                      <p className="mx-1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting
                      </p>
                    </li>
                    <li className="my-4 flex">
                      <FontAwesomeIcon
                        icon={faAsterisk}
                        className="my-1 text-sky-600 font-bold text-lg"
                      />
                      <p className="mx-1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting
                      </p>
                    </li>
                    <li className="my-4 flex">
                      <FontAwesomeIcon
                        icon={faArrowsH}
                        className="my-1 text-sky-600 font-bold text-lg"
                      />
                      <p className="mx-1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 mx-10">
            <div className="mx-10 font-semibold">
              <div className="block" style={{ width: "58rem" }}>
                <h1 className="text-4xl font-bold my-5">Our Team</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
              <div className="grid grid-cols-4 gap-4 my-5">
                <div>
                  <img
                    src={
                      "https://unsplash.com/photos/QWN07yaanWk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MzR8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8fHwxNjgzMjc0MjI4&force=true"
                    }
                    className="rounded-md h-96 my-4"
                  />
                  <h1 className="my-2 text-xl">Nancy Vera</h1>
                  <p className="text-lg">Event Planner</p>
                  <p className="text-lg">India</p>
                </div>
                <div>
                  <img
                    src={
                      "https://unsplash.com/photos/PZHsP44GyEg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgzMjgzMjAy&force=true"
                    }
                    className="rounded-md h-96 my-4"
                  />
                  <h1 className="my-2 text-xl">Trinity patelli</h1>
                  <p className="text-lg">Event Planner</p>
                  <p className="text-lg">India</p>
                </div>
                <div>
                  <img
                    src={
                      "https://unsplash.com/photos/2HFZg_K4GKc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTMxfHxiZWF1dGlmdWwlMjBnaXJsfGVufDB8fHx8MTY4MzIwNjc5NA&force=true"
                    }
                    className="rounded-md h-96 my-4"
                  />
                  <h1 className="my-2 text-xl">Savannah Montano</h1>
                  <p className="text-lg">Event Planner</p>
                  <p className="text-lg">India</p>
                </div>
                <div>
                  <img
                    src={
                      "https://unsplash.com/photos/Oco6Bj5tvpw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjI0fHxiZWF1dGlmdWwlMjBnaXJsfGVufDB8fHx8MTY4MzI4NDY2OQ&force=true"
                    }
                    className="rounded-md h-96 my-4"
                  />
                  <h1 className="my-2 text-xl">Gabby Thomas</h1>
                  <p className="text-lg">Event Planner</p>
                  <p className="text-lg">India</p>
                </div>
                <div>
                  <img
                    src={
                      "https://unsplash.com/photos/QWN07yaanWk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MzR8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8fHwxNjgzMjc0MjI4&force=true"
                    }
                    className="rounded-md h-96 my-4"
                  />
                  <h1 className="my-2 text-xl">Nancy Vera</h1>
                  <p className="text-lg">Event Planner</p>
                  <p className="text-lg">India</p>
                </div>
                <div>
                  <img
                    src={
                      "https://unsplash.com/photos/PZHsP44GyEg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgzMjgzMjAy&force=true"
                    }
                    className="rounded-md h-96 my-4"
                  />
                  <h1 className="my-2 text-xl">Trinity patelli</h1>
                  <p className="text-lg">Event Planner</p>
                  <p className="text-lg">India</p>
                </div>
                <div>
                  <img
                    src={
                      "https://unsplash.com/photos/2HFZg_K4GKc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTMxfHxiZWF1dGlmdWwlMjBnaXJsfGVufDB8fHx8MTY4MzIwNjc5NA&force=true"
                    }
                    className="rounded-md h-96 my-4"
                  />
                  <h1 className="my-2 text-xl">Savannah Montano</h1>
                  <p className="text-lg">Event Planner</p>
                  <p className="text-lg">India</p>
                </div>
                <div>
                  <img
                    src={
                      "https://unsplash.com/photos/Oco6Bj5tvpw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjI0fHxiZWF1dGlmdWwlMjBnaXJsfGVufDB8fHx8MTY4MzI4NDY2OQ&force=true"
                    }
                    className="rounded-md h-96 my-4"
                  />
                  <h1 className="my-2 text-xl">Gabby Thomas</h1>
                  <p className="text-lg">Event Planner</p>
                  <p className="text-lg">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommonModuleComponent>
  );
}

export default AboutusComponent;
