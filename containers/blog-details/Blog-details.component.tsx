import React, { useEffect } from "react";
import CommonModuleComponent from "../../components/common-module/Common-module.component";
import { BlogDetailsComponentInterface } from "../../interface/blog-details-interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMessage,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function BlogDetailsComponent(props: BlogDetailsComponentInterface) {
  var modal = document.getElementById("modal") as any;
  var modalImg = document.getElementById("modal-img") as any;

  function showModal(src: string): void {
    modal?.classList.remove("hidden");
    modalImg.src = src;
  }

  function closeModal(): void {
    modal?.classList.add("hidden");
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      document
        .getElementById("modal")
        ?.addEventListener("click", (event: any) => {
          if (event.target.id === "modal-img") {
            console.log("do nothing");
          } else {
            closeModal();
          }
        });
      window?.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeModal();
        }
      });
    }
  }, [props]);

  return (
    <CommonModuleComponent>
      <div className="min-h-screen">
        <div className="grid grid-cols-2 gap-2 my-10 mx-10">
          <div>
            <img
              src={
                "https://unsplash.com/photos/UZOpP-YHe9Q/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8YXVyb3JhfGVufDB8fHx8MTY4MTIxNDM1MA&force=true"
              }
              className="rounded-md"
              onClick={() =>
                showModal(
                  "https://unsplash.com/photos/UZOpP-YHe9Q/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8YXVyb3JhfGVufDB8fHx8MTY4MTIxNDM1MA&force=true"
                )
              }
            />
          </div>
          <div className="block">
            <p className="font-bold">title:{props.getPostData.title}</p>
            <p className="font-bold">
              description:{props.getPostData.description}
            </p>
            <div className="font-bold flex">
              <FontAwesomeIcon
                icon={faHeart}
                style={{ height: "30px", color: "red" }}
              />
              <p className="my-1">:{props.getPostData.likes.length}</p>
            </div>
            <div className="font-bold flex">
              <FontAwesomeIcon
                icon={faMessage}
                style={{ height: "30px", color: "black" }}
              />
              <p className="my-1">:{props.getPostData.comments.length}</p>
            </div>
          </div>
        </div>
        <div className="my-10">
          <div className="grid grid-cols-2 gap-2 my-10 mx-10">
            <div className="block " style={{ height: "50vh" }}>
              <div
                className="block mx-2 overflow-scroll overflow-x-hidden"
                style={{ height: "30vh" }}
              >
                <div className="flex justify-between border-b-4 border-black ">
                  <div>
                    <h1>sagar commentd</h1>
                    <p>hello world</p>
                  </div>
                  <div>
                    <p>13 july</p>
                  </div>
                </div>
                <div className="flex justify-between border-b-4 border-black">
                  <div>
                    <h1>sagar commentd</h1>
                    <p>hello world</p>
                  </div>
                  <div>
                    <p>13 july</p>
                  </div>
                </div>
                <div className="flex justify-between border-b-4 border-black">
                  <div>
                    <h1>sagar commentd</h1>
                    <p>hello world</p>
                  </div>
                  <div>
                    <p>13 july</p>
                  </div>
                </div>
                <div className="flex justify-between border-b-4 border-black">
                  <div>
                    <h1>sagar commentd</h1>
                    <p>hello world</p>
                  </div>
                  <div>
                    <p>13 july</p>
                  </div>
                </div>
                <div className="flex justify-between border-b-4 border-black">
                  <div>
                    <h1>sagar commentd</h1>
                    <p>hello world</p>
                  </div>
                  <div>
                    <p>13 july</p>
                  </div>
                </div>
              </div>
              <div>
                <form className="flex ">
                  <div
                    style={{
                      width: "70%",
                    }}
                    className="my-5 mx-2"
                  >
                    <input
                      className="w-full px-5 py-3 border-b-2 border-black bg-gray-100 outline-none placeholder:text-gray-600"
                      type="text"
                      placeholder="please enter your comment"
                    />
                  </div>
                  <div
                    style={{
                      width: "30%",
                    }}
                    className="my-5 mx-2"
                  >
                    <button className="w-full px-5 py-3 border-none border-b-4 bg-cyan-800 hover:bg-cyan-950 rounded-md">
                      {/* <FontAwesomeIcon icon={faPaper} /> */}
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div>hellow</div>
          </div>
        </div>
        <div className="my-10 mx-10">
          <hr className="border-black" />
          <div className="block">
            <h1 className="text-3xl font-bold my-5">Posted By</h1>
            <div className="grid grid-cols-3 gap-3 my-5">
              <div className="border-2 border-black">
                <img
                  src={
                    "https://unsplash.com/photos/UZOpP-YHe9Q/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8YXVyb3JhfGVufDB8fHx8MTY4MTIxNDM1MA&force=true"
                  }
                  height={"100px"}
                  width={"100px"}
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                  }}
                  className="rounded-full my-5 mx-5"
                />
              </div>
              <div className="block border-2 border-black">
                <p className="font-bold my-5 mx-5">
                  {props.getPostData.users.firstname}&nbsp;
                  {props.getPostData.users.lastname}
                </p>
                <p className="font-bold my-5 mx-5">
                  @{props.getPostData.users.username}
                </p>
              </div>
              <div className="border-2 border-black">
                <p className="font-bold my-5 mx-5">
                  {props.getPostData.users.city}
                </p>
                <p className="font-bold my-5 mx-5">
                  {props.getPostData.users.email}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="modal"
          className="hidden fixed top-0 left-0 z-50 w-screen h-screen bg-black/70 flex justify-center items-center"
        >
          <a
            className="fixed z-90 top-6 right-8 text-white text-5xl font-bold"
            onClick={() => closeModal()}
          >
            &times;
          </a>

          <img
            id="modal-img"
            style={{ zIndex: 99999999999999999999 }}
            className="max-w-[800px] max-h-[600px] object-cover"
          />
        </div>
      </div>
    </CommonModuleComponent>
  );
}

export default BlogDetailsComponent;
