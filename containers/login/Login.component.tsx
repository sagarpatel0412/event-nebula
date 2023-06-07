import React, { useState } from "react";
import CommonModuleComponent from "../../components/common-module/Common-module.component";
import styles from "./Login.module.scss";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../helpers/essentials";
import { ToastContainer, toast } from "react-toastify";
import {
  LoginComponentProps,
  LoginFormInput,
} from "../../interface/login-interface";
import { useRouter } from "next/router";
import { saveInLocalStorage } from "../../helpers/browser";

function LoginComponent(props: LoginComponentProps) {
  const router = useRouter();

  const [loginInput, setLoginInput] = useState<LoginFormInput>({
    email: "",
    password: "",
  });

  const [loginInputError, setLoginInputError] = useState<LoginFormInput>({
    email: "",
    password: "",
  });

  const [loginPassed, setLoginPassed] = useState<boolean>(false);

  const loginData = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (loginPassed) {
      props
        .sendLogin({
          variables: {
            email: loginInput.email,
            password: loginInput.password,
            role: "user",
          },
        })
        .then((i: any) => {
          toast.success("Logged in successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setLoginInput({ email: "", password: "" });
          // saveInLocalStorage("token", data.signIn.token);
          console.log("i", i);
          if (Object.keys(i).length > 0) {
            saveInLocalStorage("token", i.data.signIn.token);
            router.push("/profile");
          }
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
        });
    } else {
      if (typeof window !== "undefined") {
        window.alert("There are some errors");
      }
    }
  };

  const sendLoginInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setLoginInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    loginValidation(e);
  };

  const loginValidation = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value: string = e.target.value;
    let name: string = e.target.name;

    setLoginInputError((prev: any) => {
      const errorObj: any = { ...prev, [name]: "" };
      switch (name) {
        case "email":
          if (value === "") {
            errorObj[name] = "Please enter email";
            setLoginPassed(false);
          } else if (!EMAIL_REGEX.test(value)) {
            errorObj[name] = "Email Format should be 'test@gmail.com'";
            setLoginPassed(false);
          } else {
            errorObj[name] = "";
            setLoginPassed(true);
          }
          break;
        case "password":
          if (value === "") {
            errorObj[name] = "Please enter password";
            setLoginPassed(false);
          }
          //    else if (!PASSWORD_REGEX.test(value)) {
          //     console.log(
          //       "PASSWORD_REGEX.test(value)",
          //       PASSWORD_REGEX.test(value),
          //       value
          //     );
          //     errorObj[name] =
          //       "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
          //     setLoginPassed(false);
          //   }
          else {
            errorObj[name] = "";
            setLoginPassed(true);
          }
          break;
      }
      if (loginInput.email === "" || loginInput.password === "") {
        setLoginPassed(false);
      } else {
        setLoginPassed(true);
      }
      return errorObj;
    });
  };

  return (
    <CommonModuleComponent>
      <div className={styles.main_content}>
        <div className={styles.login_form}>
          <form
            className={styles.login_form_form}
            onSubmit={(e) => loginData(e)}
          >
            <h1 className={styles.login_form_heading}>Login</h1>
            <div>
              <label htmlFor="email" className={styles.login_form_label}>
                Email
              </label>
              <br />
              <input
                type="text"
                placeholder="enter email"
                value={loginInput.email}
                className={styles.login_form_input}
                onChange={(e) => sendLoginInput(e)}
                name="email"
              />
              <br />
              {loginInputError.email.length > 0 ? (
                <p>{loginInputError.email}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="password" className={styles.login_form_label}>
                Password
              </label>
              <br />
              <input
                type="password"
                placeholder="enter password"
                value={loginInput.password}
                className={styles.login_form_input}
                onChange={(e) => sendLoginInput(e)}
                name="password"
              />
              <br />
              {loginInputError.password.length > 0 ? (
                <p>{loginInputError.password}</p>
              ) : null}
            </div>
            <div>
              <button
                type="submit"
                className={styles.login_form_button}
                disabled={loginPassed ? false : true}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </CommonModuleComponent>
  );
}

export default LoginComponent;
