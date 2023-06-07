import React, { useEffect, useState } from "react";
import CommonModuleComponent from "../../components/common-module/Common-module.component";
import styles from "./Signup.module.scss";
import {
  GetUserRolesInterface,
  SignUpComponentProps,
  UserDetailInputInterface,
} from "../../interface/login-interface";
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  USERNAME_REGEX,
} from "../../helpers/essentials";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

function SignupComponent(props: SignUpComponentProps) {
  const router = useRouter();

  const [userRoles, setUserRoles] = useState<Array<GetUserRolesInterface>>([]);

  const [userInput, setUserInput] = useState<UserDetailInputInterface>({
    email: "",
    state: "",
    status: true,
    address1: "",
    address2: "",
    password: "",
    userRoleId: "user",
    firstname: "",
    lastname: "",
    city: "",
    country: "",
    username: "",
    confirmPassword: "",
  });

  const [userInputError, setUserInputError] =
    useState<UserDetailInputInterface>({
      email: "",
      state: "",
      status: true,
      address1: "",
      address2: "",
      password: "",
      userRoleId: "user",
      firstname: "",
      lastname: "",
      city: "",
      country: "",
      username: "",
      confirmPassword: "",
    });

  const [signupPassed, setSignupPassed] = useState<boolean>(false);

  useEffect(() => {
    if (typeof props.userRoles !== "undefined") {
      if (props.userRoles.length > 0) {
        setUserRoles(props.userRoles);
      }
    }
  }, [props]);

  const sendSignUpInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    signUpValidation(e);
  };

  const signUpValidation = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
        case "password":
          if (value === "") {
            errorObject[name] = "Please enter your password";
            setSignupPassed(false);
          } else if (
            userInput.confirmPassword &&
            value !== userInput.confirmPassword
          ) {
            errorObject[name] = "Password and confirm password doesnt match";
            setSignupPassed(false);
          } else {
            errorObject[name] = "";
            setSignupPassed(true);
          }
          break;
        case "confirmPassword":
          if (value === "") {
            errorObject[name] = "Please enter confirm password";
            setSignupPassed(false);
          } else if (userInput.password && value !== userInput.password) {
            errorObject[name] = "Password and confirm password doesnt match";
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
        userInput.password === "" ||
        userInput.confirmPassword === "" ||
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

  const signupData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let a: any = userInput;
    delete a.confirmPassword;
    if (signupPassed) {
      props
        .createUser({ variables: { createUserInput: a } })
        .then((i: any) => {
          toast.success("Registered successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          router.push("/login");
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
        window.alert("Please provide inputs");
      }
    }
  };

  return (
    <CommonModuleComponent>
      <div className={styles.signup}>
        <div className={styles.signup_container}>
          <div className={styles.signup_form}>
            <form
              className={styles.signup_form_form}
              onSubmit={(e) => signupData(e)}
            >
              <div className={styles.signup_form}>
                <div>
                  <h1>Register</h1>
                  <p>From here only users can register</p>
                </div>
              </div>
              <div className={styles.signup_form_input}>
                <label>Email</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  value={userInput.email}
                  className={styles.input_form}
                  onChange={(e) => sendSignUpInput(e)}
                />
                <br />
                {userInputError.email.length > 0 ? (
                  <p style={{ color: "red" }}>{userInputError.email}</p>
                ) : null}
              </div>
              <div className={styles.signup_form_input}>
                <label>Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={userInput.password}
                  className={styles.input_form}
                  onChange={(e) => sendSignUpInput(e)}
                />
                <br />
                {userInputError.password && userInputError.password.length > 0 ? (
                  <p style={{ color: "red" }}>{userInputError.password}</p>
                ) : null}
              </div>
              <div className={styles.signup_form_input}>
                <label>Confirm Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter confirm password"
                  name="confirmPassword"
                  value={userInput.confirmPassword}
                  className={styles.input_form}
                  onChange={(e) => sendSignUpInput(e)}
                />
                <br />
                {userInputError.confirmPassword.length > 0 ? (
                  <p style={{ color: "red" }}>
                    {userInputError.confirmPassword}
                  </p>
                ) : null}
              </div>
              <div className={styles.signup_form_input}>
                <label>Username</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={userInput.username}
                  className={styles.input_form}
                  onChange={(e) => sendSignUpInput(e)}
                />
                <br />
                {userInputError.username.length > 0 ? (
                  <p style={{ color: "red" }}>{userInputError.username}</p>
                ) : null}
              </div>
              <div className={styles.signup_form_input}>
                <label>First Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter first name"
                  name="firstname"
                  value={userInput.firstname}
                  className={styles.input_form}
                  onChange={(e) => sendSignUpInput(e)}
                />
                <br />
                {userInputError.firstname.length > 0 ? (
                  <p style={{ color: "red" }}>{userInputError.firstname}</p>
                ) : null}
              </div>
              <div className={styles.signup_form_input}>
                <label>Last Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter last name"
                  name="lastname"
                  value={userInput.lastname}
                  className={styles.input_form}
                  onChange={(e) => sendSignUpInput(e)}
                />
                <br />
                {userInputError.lastname.length > 0 ? (
                  <p style={{ color: "red" }}>{userInputError.lastname}</p>
                ) : null}
              </div>
              <div className={styles.signup_form_input}>
                <label>Address 1</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter address1"
                  name="address1"
                  value={userInput.address1}
                  className={styles.input_form}
                  onChange={(e) => sendSignUpInput(e)}
                />
                <br />
                {userInputError.address1.length > 0 ? (
                  <p style={{ color: "red" }}>{userInputError.address1}</p>
                ) : null}
              </div>
              <div className={styles.signup_form_input}>
                <label>Address 2</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter address2"
                  name="address2"
                  value={userInput.address2}
                  className={styles.input_form}
                  onChange={(e) => sendSignUpInput(e)}
                />
                <br />
                {userInputError.address2.length > 0 ? (
                  <p style={{ color: "red" }}>{userInputError.address2}</p>
                ) : null}
              </div>
              <div className={styles.signup_form_input}>
                <label>City</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter city"
                  name="city"
                  value={userInput.city}
                  className={styles.input_form}
                  onChange={(e) => sendSignUpInput(e)}
                />
                <br />
                {userInputError.city.length > 0 ? (
                  <p style={{ color: "red" }}>{userInputError.city}</p>
                ) : null}
              </div>
              <div className={styles.signup_form_input}>
                <label>State</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter state"
                  name="state"
                  value={userInput.state}
                  className={styles.input_form}
                  onChange={(e) => sendSignUpInput(e)}
                />
                <br />
                {userInputError.state.length > 0 ? (
                  <p style={{ color: "red" }}>{userInputError.state}</p>
                ) : null}
              </div>
              <div className={styles.signup_form_input}>
                <label>Country</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter country"
                  name="country"
                  value={userInput.country}
                  className={styles.input_form}
                  onChange={(e) => sendSignUpInput(e)}
                />
                <br />
                {userInputError.country.length > 0 ? (
                  <p style={{ color: "red" }}>{userInputError.country}</p>
                ) : null}
              </div>
              <div className={styles.signup_form_input}>
                <label>User Role</label>
                <br />
                <select className={styles.input_form} disabled={true}>
                  <option>{userRoles[0]?.name}</option>;
                </select>
              </div>
              <div>
                <button
                  style={{
                    padding: "10px 40px",
                    margin: "10px",
                    border: "none",
                    background: "#0F9791",
                    color: "white",
                    cursor: "pointer",
                  }}
                  disabled={signupPassed === true ? false : true}
                  type="submit"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </CommonModuleComponent>
  );
}

export default SignupComponent;
