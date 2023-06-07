import React, { useState, useEffect } from "react";
import styles from "./Start-page.module.scss";
import CommonModuleComponent from "../../components/common-module/Common-module.component";
import axios from "axios";
import { StartPageComponentProps } from "../../interface/start-page-interface";
import SlickCarasoulComponent from "../../components/slick-carasoul/Slick-carasoul.component";
import ImagegridComponent from "../../components/image-grid/Image-grid.component";

function StartPageComponent(props: StartPageComponentProps) {
  const [imageData, setImageData] = useState<string>("");
  const [imageLists, setImageLists] = useState<Array<any>>([]);

  useEffect(() => {
    if (typeof props.randomImage !== "undefined") {
      setImageData(props.randomImage);
      listOfImage();
    }
  }, [props]);

  function listOfImage(): void {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=NQbGNg6P_ebvp7gWanWrbq9r_RzOXwFpwAXR28w_kqc"
      )
      .then((res: any) => {
        setImageLists(res.data);
      })
      .catch((err: any) => {
        console.log("eerorr", err);
      });
  }
  return (
    <CommonModuleComponent>
      <div className="min-h-screen font-Roboto">
        <div
          className=" px-6 pt-14 lg:px-8 bg-cover bg-center"
          style={{
            background: `url("https://unsplash.com/photos/LtnPejWDSAY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8YXVyb3JhfGVufDB8fHx8MTY4MjY3MDY0Ng&force=true&w=2400")`,
            backgroundSize: "100% 100%",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div
              className="text-center py-8"
              style={{ background: "#000000", opacity: "0.8" }}
            >
              <h1
                className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
                style={{ opacity: "1" }}
              >
                Data to enrich your online business
              </h1>
              <p className="mt-6 text-lg leading-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-200">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  style={{ opacity: "1" }}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 py-10 mx-5 flex justify-center">
          <div className="block">
            <div className="flex justify-center my-5">
              <h1 className="text-3xl">hello World</h1>
            </div>

            <div className="mx-10">
              <p className="mx-10 px-10">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus
                Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in
              </p>
            </div>
          </div>
        </div>
        <div className="my-5 mx-10">
          <h1 className="text-3xl font-bold mx-10 my-5">Service</h1>
          <div className="mx-10 h-2/5">
            <SlickCarasoulComponent />
          </div>
        </div>
        <div className="my-5 mx-10">
          <h1 className="text-3xl font-bold mx-10 my-5">Service</h1>
          <div className="mx-10 h-2/5">
            <SlickCarasoulComponent />
          </div>
        </div>
        <div className="my-5 mx-10">
          <h1 className="text-3xl font-bold mx-10 my-5">Service</h1>
          <div className="mx-10 h-2/5">
            <SlickCarasoulComponent />
          </div>
        </div>
        <div className="my-10">
          <div className="flex justify-center">
            <div className="block">
              <div className="flex justify-center my-5">
                <h1 className="text-3xl font-bold">Image Grid</h1>
              </div>
              <div className="mx-10 px-10">
                <p className="mx-10 px-10">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  de Finibus Bonorum et Malorum (The Extremes of Good and Evil)
                  by Cicero, written in 45 BC. This book is a treatise on the
                  theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes
                  from a line in
                </p>
              </div>
            </div>
          </div>
          <ImagegridComponent />
        </div>
      </div>
    </CommonModuleComponent>
  );
}

export default StartPageComponent;
// access key NQbGNg6P_ebvp7gWanWrbq9r_RzOXwFpwAXR28w_kqc
//secret key jEH3Jl6bo9D3uyXJf7vYLAjarEtQHEk58tzQozfE5GU
