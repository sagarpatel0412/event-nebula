import React, { useEffect, useState } from "react";
import CommonModuleComponent from "../../components/common-module/Common-module.component";
import styles from "./Profile.module.scss";
import {
  CreateUserPostErrorInterface,
  CreateUserPostInterface,
  ProfilePropsInterface,
  ProfileUpdateFormErrorInterface,
  ProfileUpdateFormInterface,
  ProfileUserLocationInterface,
} from "../../interface/profile-interface";
import dynamic from "next/dynamic";
import leaflet from "leaflet";
import { UserDetailInputInterface } from "../../interface/login-interface";
import { EMAIL_REGEX, USERNAME_REGEX } from "../../helpers/essentials";
import { ToastContainer, toast } from "react-toastify";
import ModalComponent from "../../components/modal/Modal.component";
import ButtonComponent from "../../components/button/Button.component";
import {
  faUser,
  faLocation,
  faBlog,
  faSignsPost,
  faBackward,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LocationMapComponent = dynamic(
  () => import("../../components/location-map/Location-map.component"),
  {
    loading: () => <p>Live map is loading</p>,
    ssr: false,
  }
);

function ProfileComponent(props: ProfilePropsInterface) {
  const [userLocation, setUserLocation] =
    useState<ProfileUserLocationInterface>({ lat: 0, lng: 0 });
  const [activateMap, setActivateMap] = useState<number>(0);

  const [enableEdit, setEnableEdit] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [userInput, setUserInput] = useState<ProfileUpdateFormInterface>({
    email: "",
    state: "",
    status: true,
    address1: "",
    address2: "",
    firstname: "",
    lastname: "",
    city: "",
    country: "",
    username: "",
  });

  const [userPostInput, setUserPostInput] = useState<CreateUserPostInterface>({
    title: "",
    description: "",
    metadescription: "",
    metatitle: "",
    status: true,
    image: "",
  });

  const [createUserInputError, setCreateUserInputError] =
    useState<CreateUserPostErrorInterface>({
      title: "",
      description: "",
      metadescription: "",
      metatitle: "",
      image: "",
    });

  const [userInputError, setUserInputError] =
    useState<ProfileUpdateFormErrorInterface>({
      email: "",
      state: "",
      address1: "",
      address2: "",
      firstname: "",
      lastname: "",
      city: "",
      country: "",
      username: "",
    });

  const [signupPassed, setSignupPassed] = useState<boolean>(false);
  const [createUserPostPassed, setCreateUserPostPassed] =
    useState<boolean>(false);

  const [activate, setActivate] = useState<number>(0);

  useEffect(() => {
    if (
      typeof props.isAuthorizedUser !== "undefined" &&
      typeof props.profileDetail !== "undefined"
    ) {
      getGeolocation();
      setUserInput({
        email: props.profileDetail.email,
        state: props.profileDetail.state,
        status: true,
        address1: props.profileDetail.address1,
        address2: props.profileDetail.address2,
        password: props.profileDetail.password,
        firstname: props.profileDetail.firstname,
        lastname: props.profileDetail.lastname,
        city: props.profileDetail.city,
        country: props.profileDetail.country,
        username: props.profileDetail.username,
      });
    }
  }, [props]);

  useEffect(() => {
    for (let i = 1; i < 6; i++) {
      // console.log("i", i);
      if (i === 1) {
        const a = document.getElementById(`tab-${i}`);
        // a?.classList.add("block");
      } else {
        const a = document.getElementById(`tab-${i}`);
        a?.classList.add("hidden");
      }
    }
  }, []);

  function getGeolocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getGeoPosition, errorCallback, {
        timeout: 10000,
      });
    } else {
      if (typeof window !== "undefined") {
        window.alert(`Something went wrong`);
      }
    }
  }
  function getGeoPosition(position: GeolocationPosition): void {
    setUserLocation({
      lat: position.coords?.latitude,
      lng: position.coords?.longitude,
    });
  }

  function errorCallback(error: GeolocationPositionError): void {
    console.log("error", error);
  }

  const enableEditFunc = (): void => {
    setEnableEdit(!enableEdit);
  };

  const profileData = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (signupPassed) {
      props
        .updateProfile({ variables: { updateUserInput: userInput } })
        .then((i: any) => {
          toast.success("Profile update successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setEnableEdit(false);
          console.log("1", i);
        })
        .catch((err: any) => {
          toast.success(err.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setEnableEdit(false);
        });
    }
  };

  const sendProfileInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("e", e);
    const { name, value } = e.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    profileInputValidation(e);
  };

  const profileInputValidation = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setUserInputError((prev) => {
      const errorObject: any = { ...prev, [name]: "" };
      switch (name) {
        case "email":
          if (value === "") {
            errorObject[name] = "Please enter your email";
            setSignupPassed(false);
          } else if (!EMAIL_REGEX.test(value)) {
            errorObject[name] = "Email Format should be 'test@gmail.com'";
            setSignupPassed(false);
          } else {
            errorObject[name] = "";
            setSignupPassed(true);
          }
          break;
        case "state":
          if (value === "") {
            errorObject[name] = "Please enter state";
            setSignupPassed(false);
          } else {
            errorObject[name] = "";
            setSignupPassed(true);
          }
          break;
        case "address1":
          if (value === "") {
            errorObject[name] = "Address cannot be empty";
            setSignupPassed(false);
          } else {
            errorObject[name] = "";
            setSignupPassed(true);
          }
          break;
        case "address2":
          if (value === "") {
            errorObject[name] = "Address cannot be empty";
            setSignupPassed(false);
          } else {
            errorObject[name] = "";
            setSignupPassed(true);
          }
          break;
        case "firstname":
          if (value === "") {
            errorObject[name] = "Please enter firstname";
            setSignupPassed(false);
          } else {
            errorObject[name] = "";
            setSignupPassed(true);
          }
          break;
        case "lastname":
          if (value === "") {
            errorObject[name] = "Please enter lastname";
            setSignupPassed(false);
          } else {
            errorObject[name] = "";
            setSignupPassed(true);
          }
          break;
        case "city":
          if (value === "") {
            errorObject[name] = "Please enter city";
            setSignupPassed(false);
          } else {
            errorObject[name] = "";
            setSignupPassed(true);
          }
          break;
        case "country":
          if (value === "") {
            errorObject[name] = "Please enter city";
            setSignupPassed(false);
          } else {
            errorObject[name] = "";
            setSignupPassed(true);
          }
          break;
        case "username":
          if (value === "") {
            errorObject[name] = "Please enter username";
            setSignupPassed(false);
          } else if (!USERNAME_REGEX.test(value)) {
            errorObject[name] =
              "Username should contain hyphens underscore characters and numbers";
            setSignupPassed(false);
          } else {
            errorObject[name] = "";
            setSignupPassed(true);
          }
          break;
      }
      if (
        userInput.email === "" ||
        userInput.username === "" ||
        userInput.address1 === "" ||
        userInput.address2 === "" ||
        userInput.city === "" ||
        userInput.country === "" ||
        userInput.firstname === "" ||
        userInput.lastname === "" ||
        userInput.state === ""
      ) {
        setSignupPassed(false);
      } else {
        setSignupPassed(true);
      }
      return errorObject;
    });
  };

  const openModal = (): void => {
    setShowModal(!showModal);
  };

  const createUserPostData = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (createUserPostPassed) {
      props
        .createUserPost({
          variables: { createUserCelestialPostInput: userPostInput },
        })
        .then((i: any) => {
          toast.success("Post created successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          // router.push("/login");
          setShowModal(false);
        })
        .catch((err: any) => {
          console.log("err", err);
          toast.success(err.message, {
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
    } else {
      if (typeof window !== "undefined") {
        window.alert("Please fill entry");
      }
    }
  };

  const createUserInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserPostInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    createUserInputValidation(e);
  };

  const createUserInputValidation = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setCreateUserInputError((prev) => {
      const errorObject: any = { ...prev, [name]: "" };
      switch (name) {
        case "title":
          if (value === "") {
            errorObject[name] = "Please enter your title";
            setCreateUserPostPassed(false);
          } else {
            errorObject[name] = "";
            setCreateUserPostPassed(true);
          }
          break;
        case "description":
          if (value === "") {
            errorObject[name] = "Please enter description";
            setCreateUserPostPassed(false);
          } else {
            errorObject[name] = "";
            setCreateUserPostPassed(true);
          }
          break;
        case "metadescription":
          if (value === "") {
            errorObject[name] = "Please enter meta description";
            setCreateUserPostPassed(false);
          } else {
            errorObject[name] = "";
            setCreateUserPostPassed(true);
          }
          break;
        case "metatitle":
          if (value === "") {
            errorObject[name] = "Please enter meta title";
            setCreateUserPostPassed(false);
          } else {
            errorObject[name] = "";
            setCreateUserPostPassed(true);
          }
          break;
        case "image":
          if (value === "") {
            errorObject[name] = "Please attach image";
            setCreateUserPostPassed(false);
          } else {
            errorObject[name] = "";
            setCreateUserPostPassed(true);
          }
          break;
      }
      if (
        userPostInput.title === "" ||
        userPostInput.description === "" ||
        userPostInput.metatitle === "" ||
        userPostInput.metadescription === "" ||
        userPostInput.image === ""
      ) {
        setCreateUserPostPassed(false);
      } else {
        setCreateUserPostPassed(true);
      }
      return errorObject;
    });
  };
  const showTab = (b: number): void => {
    setActivate(activate + 1);
    setActivateMap(b);
    for (let i = 1; i < 6; i++) {
      console.log("i", i);
      if (i === b) {
        console.log("a", b);
        const a = document.getElementById(`tab-${i}`);
        a?.classList.remove("hidden");
        a?.classList.add("block");
      } else {
        const a = document.getElementById(`tab-${i}`);
        a?.classList.add("hidden");
        a?.classList.remove("block");
      }
    }
  };

  const mapActivator = (): void => {
    setActivate(activate + 1);
  };

  return (
    <CommonModuleComponent>
      <div className="min-h-screen">
        <div className="flex flex-no-wrap">
          <div
            style={{ minHeight: "900px" }}
            className="w-1/5 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex"
          >
            <div className="px-8">
              <ul className="mt-12">
                <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
                  <a
                    onClick={() => showTab(1)}
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <FontAwesomeIcon icon={faUser} />
                    <span className="text-sm ml-2">Profile</span>
                  </a>
                  <div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">
                    5
                  </div>
                </li>
                <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                  <a
                    onClick={() => showTab(2)}
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <FontAwesomeIcon icon={faLocation} />
                    <span className="text-sm ml-2" id="location-r">
                      Location
                    </span>
                  </a>
                  <div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">
                    8
                  </div>
                </li>
                <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                  <a
                    onClick={() => showTab(3)}
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <FontAwesomeIcon icon={faBlog} />
                    <span className="text-sm ml-2">Blog</span>
                  </a>
                </li>
                <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                  <a
                    onClick={() => showTab(4)}
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <FontAwesomeIcon icon={faSignsPost} />
                    <span className="text-sm ml-2">Create Blog</span>
                  </a>
                </li>
                <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                  <a
                    onClick={() => showTab(5)}
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <FontAwesomeIcon icon={faBackward} />
                    <span className="text-sm ml-2">Inventory</span>
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="px-8 border-t border-gray-700 text-white py-5"
              style={{ fontSize: "15px" }}
            >
              <FontAwesomeIcon icon={faPeopleGroup} />
              <span className="px-2">{props.profileDetail.email}</span>
            </div>
          </div>
          <section className="w-4/5">
            <div id="tab-1">
              {" "}
              <div>
                <div>
                  <h1 className="text-3xl font-bold px-5">Profile</h1>
                </div>
                {typeof props.profileDetail !== "undefined" ? (
                  Object.keys(props.profileDetail).length > 0 ? (
                    <form
                      className="mx-5 my-5"
                      onSubmit={(e) => profileData(e)}
                    >
                      <div className={styles.signup_form}></div>
                      <div className="my-2">
                        <label>Email</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter email"
                          name="email"
                          value={userInput.email}
                          readOnly={true}
                          className={`${styles.profileinput} p-2 border-2 w-full`}
                          onChange={(e) => sendProfileInput(e)}
                        />
                        <br />
                        {typeof userInputError !== "undefined" &&
                        userInputError.email?.length > 0 ? (
                          <p style={{ color: "red" }}>{userInputError.email}</p>
                        ) : null}
                      </div>
                      <div className="my-2">
                        <label>Username</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter username"
                          name="username"
                          value={userInput.username}
                          readOnly={true}
                          className={`${styles.profileinput} p-2 border-2 w-full`}
                          onChange={(e) => sendProfileInput(e)}
                        />
                        <br />
                        {typeof userInputError !== "undefined" &&
                        userInputError.username?.length > 0 ? (
                          <p style={{ color: "red" }}>
                            {userInputError.username}
                          </p>
                        ) : null}
                      </div>
                      <div className="my-2">
                        <label>First Name</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter first name"
                          name="firstname"
                          value={userInput.firstname}
                          readOnly={enableEdit ? false : true}
                          className={`${styles.profileinput} p-2 border-2 w-full`}
                          onChange={(e) => sendProfileInput(e)}
                        />
                        <br />
                        {typeof userInputError !== "undefined" &&
                        userInputError.firstname?.length > 0 ? (
                          <p style={{ color: "red" }}>
                            {userInputError.firstname}
                          </p>
                        ) : null}
                      </div>
                      <div className="my-2">
                        <label>Last Name</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter last name"
                          name="lastname"
                          value={userInput.lastname}
                          readOnly={enableEdit ? false : true}
                          className={`${styles.profileinput} p-2 border-2 w-full`}
                          onChange={(e) => sendProfileInput(e)}
                        />
                        <br />
                        {typeof userInputError !== "undefined" &&
                        userInputError.lastname?.length > 0 ? (
                          <p style={{ color: "red" }}>
                            {userInputError.lastname}
                          </p>
                        ) : null}
                      </div>
                      <div className="my-2">
                        <label>Address 1</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter address1"
                          name="address1"
                          value={userInput.address1}
                          readOnly={enableEdit ? false : true}
                          className={`${styles.profileinput} p-2 border-2 w-full`}
                          onChange={(e) => sendProfileInput(e)}
                        />
                        <br />
                        {typeof userInputError !== "undefined" &&
                        userInputError.address1?.length > 0 ? (
                          <p style={{ color: "red" }}>
                            {userInputError.address1}
                          </p>
                        ) : null}
                      </div>
                      <div className="my-2">
                        <label>Address 2</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter address2"
                          name="address2"
                          value={userInput.address2}
                          className={`${styles.profileinput} p-2 border-2 w-full`}
                          readOnly={enableEdit ? false : true}
                          onChange={(e) => sendProfileInput(e)}
                        />
                        <br />
                        {typeof userInputError !== "undefined" &&
                        userInputError.address2?.length > 0 ? (
                          <p style={{ color: "red" }}>
                            {userInputError.address2}
                          </p>
                        ) : null}
                      </div>
                      <div className="my-2">
                        <label>City</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter city"
                          name="city"
                          value={userInput.city}
                          className={`${styles.profileinput} p-2 border-2 w-full`}
                          readOnly={enableEdit ? false : true}
                          onChange={(e) => sendProfileInput(e)}
                        />
                        <br />
                        {typeof userInputError !== "undefined" &&
                        userInputError.city?.length > 0 ? (
                          <p style={{ color: "red" }}>{userInputError.city}</p>
                        ) : null}
                      </div>
                      <div className="my-2">
                        <label>State</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter state"
                          name="state"
                          value={userInput.state}
                          className={`${styles.profileinput} p-2 border-2 w-full`}
                          readOnly={enableEdit ? false : true}
                          onChange={(e) => sendProfileInput(e)}
                        />
                        <br />
                        {typeof userInputError !== "undefined" &&
                        userInputError.state?.length > 0 ? (
                          <p style={{ color: "red" }}>{userInputError.state}</p>
                        ) : null}
                      </div>
                      <div className="my-2">
                        <label>Country</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter country"
                          name="country"
                          value={userInput.country}
                          className={`${styles.profileinput} p-2 border-2 w-full`}
                          readOnly={enableEdit ? false : true}
                          onChange={(e) => sendProfileInput(e)}
                        />
                        <br />
                      </div>
                      <div>
                        <div className="grid grid-cols-2 gap-2">
                          {enableEdit ? (
                            <button
                              style={{
                                background: "#0F9791",
                                color: "white",
                                cursor: "pointer",
                              }}
                              className="p-2 w-full my-2"
                              disabled={signupPassed === true ? false : true}
                              type="submit"
                            >
                              submit
                            </button>
                          ) : null}
                          <button
                            type="button"
                            style={{
                              background: "#0F9791",
                              color: "white",
                              cursor: "pointer",
                            }}
                            className="p-2 w-full my-2"
                            onClick={() => enableEditFunc()}
                          >
                            {enableEdit ? "disable edit" : "enable edit"}
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <h1>Loading...</h1>
                  )
                ) : (
                  <h1>User is not signed in</h1>
                )}
              </div>
            </div>
            <div id="tab-2">
              {" "}
              <div className="w-5/6 h-screen">
                <h1 className="text-3xl font-bold">Your Location</h1>
                <LocationMapComponent
                  activate={activate}
                  location={userLocation}
                  profileDetail={props?.profileDetail}
                  activateMap={activateMap}
                />
                <button
                  type="button"
                  style={{
                    background: "#0F9791",
                    color: "white",
                    cursor: "pointer",
                  }}
                  className="mx-5 py-5 px-4"
                  onClick={() => mapActivator()}
                >
                  Activate Map
                </button>
              </div>
            </div>
            <div id="tab-3">
              {" "}
              <div className="mx-5">
                <h1 className="text-3xl font-bold">Your Blogs</h1>
                <div className="flex gap-2 my-5 grid grid-cols-4">
                  {typeof props.getUserPostsData !== "undefined" &&
                    props.getUserPostsData.map((i: any) => {
                      return (
                        <div
                          key={i.id}
                          className="max-w-sm rounded overflow-hidden shadow-lg"
                        >
                          <img
                            className="w-full"
                            // src={i.image}
                            src={
                              "https://unsplash.com/photos/quOy9JPjEKs/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8YmVhY2glMjBhdCUyMG5pZ2h0fGVufDB8fHx8MTY4MTg4MjgxNQ&force=true"
                            }
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              {i.title}
                            </div>
                            <p className="text-gray-700 text-base">
                              {i.description}
                            </p>
                          </div>
                          <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              #photography
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              #travel
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              #winter
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div id="tab-4">
              {" "}
              <div className="mx-5">
                <ButtonComponent
                  type="button"
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => openModal()}
                >
                  openModal
                </ButtonComponent>
                <ModalComponent
                  setShowModal={setShowModal}
                  showModal={showModal}
                >
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Create Post</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <div>
                      <form onSubmit={(e) => createUserPostData(e)}>
                        <div>
                          <label>Title</label>
                          <input
                            type="text"
                            className="p-2 border-2 w-full"
                            name="title"
                            value={userPostInput.title}
                            onChange={(e) => createUserInput(e)}
                          />
                          {createUserInputError.title.length > 0 ? (
                            <p style={{ color: "red" }}>
                              {createUserInputError.title}
                            </p>
                          ) : null}
                        </div>
                        <div>
                          <label>Description</label>
                          <input
                            type="text"
                            className="p-2 border-2 w-full"
                            name="description"
                            value={userPostInput.description}
                            onChange={(e) => createUserInput(e)}
                          />
                          {createUserInputError.description.length > 0 ? (
                            <p style={{ color: "red" }}>
                              {createUserInputError.description}
                            </p>
                          ) : null}
                        </div>
                        <div>
                          <label>Meta description</label>
                          <input
                            type="text"
                            className="p-2 border-2 w-full"
                            name="metadescription"
                            value={userPostInput.metadescription}
                            onChange={(e) => createUserInput(e)}
                          />
                          {createUserInputError.metadescription.length > 0 ? (
                            <p style={{ color: "red" }}>
                              {createUserInputError.metadescription}
                            </p>
                          ) : null}
                        </div>
                        <div>
                          <label>Metatitle</label>
                          <input
                            type="text"
                            className="p-2 border-2 w-full"
                            name="metatitle"
                            value={userPostInput.metatitle}
                            onChange={(e) => createUserInput(e)}
                          />
                          {createUserInputError.metatitle.length > 0 ? (
                            <p style={{ color: "red" }}>
                              {createUserInputError.metatitle}
                            </p>
                          ) : null}
                        </div>
                        <div>
                          <label>Image</label>
                          <input
                            type="text"
                            className="p-2 border-2 w-full"
                            name="image"
                            value={userPostInput.image}
                            onChange={(e) => createUserInput(e)}
                          />
                          {createUserInputError.image.length > 0 ? (
                            <p style={{ color: "red" }}>
                              {createUserInputError.image}
                            </p>
                          ) : null}
                        </div>
                        <div>
                          <button
                            type="submit"
                            disabled={createUserPostPassed ? false : true}
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          >
                            submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </ModalComponent>{" "}
              </div>
            </div>
            <div id="tab-5">this Section is Empty</div>
          </section>
        </div>
        <ToastContainer />
      </div>
    </CommonModuleComponent>
  );
}

export default ProfileComponent;
