import React, { useState } from "react";
import CommonModuleComponent from "../../components/common-module/Common-module.component";
import styles from "./Contact-form.module.scss";
import {
  ContactFormPropsInterface,
  ContactInputErrorInterface,
  ContactInputInterface,
} from "../../interface/contact-form-interface";
import { EMAIL_REGEX } from "../../helpers/essentials";
import { ToastContainer, toast } from "react-toastify";

function ContactFormComponent(props: ContactFormPropsInterface) {
  const [contactInput, setContactInput] = useState<ContactInputInterface>({
    name: "",
    title: "",
    email: "",
    description: "",
    status: true,
  });

  const [contactError, setContactError] = useState<ContactInputErrorInterface>({
    name: "",
    title: "",
    email: "",
    description: "",
  });

  const [contactPassed, setContactPassed] = useState<boolean>(false);

  const contactChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setContactInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    contactValidation(e);
  };

  const contactValidation = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setContactError((prev) => {
      const errorObj: any = { ...prev, [name]: "" };
      switch (name) {
        case "name": {
          if (value === "") {
            errorObj[name] = "Please enter name";
            setContactPassed(false);
          } else {
            errorObj[name] = "";
            setContactPassed(true);
          }
        }
        case "email": {
          if (value === "") {
            errorObj[name] = "Please enter email";
            setContactPassed(false);
          } else if (!EMAIL_REGEX.test(value)) {
            errorObj[name] = "Email Format should be 'test@gmail.com'";
            setContactPassed(false);
          } else {
            errorObj[name] = "";
            setContactPassed(true);
          }
        }
        case "title": {
          if (value === "") {
            errorObj[name] = "Please enter title";
            setContactPassed(false);
          } else {
            errorObj[name] = "";
            setContactPassed(true);
          }
        }
        case "description": {
          if (value === "") {
            errorObj[name] = "Please enter description";
            setContactPassed(false);
          } else {
            errorObj[name] = "";
            setContactPassed(true);
          }
        }
      }
      if (
        contactInput.email === "" ||
        contactInput.title === "" ||
        contactInput.description === "" ||
        contactInput.name === ""
      ) {
        setContactPassed(false);
      } else {
        setContactPassed(true);
      }
      return errorObj;
    });
  };

  const contactFormData = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (contactPassed) {
      props
        .createContactForm({
          variables: { createContactFromInput: contactInput },
        })
        .then((res: any) => {
          console.log("res", res);
          toast.success("Query added!!!!!!", {
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
        window.alert("please provide all field");
      }
    }
  };

  return (
    <CommonModuleComponent>
      <div className={styles.contact}>
        <div className={styles.contact_form}>
          <form
            className={styles.contact_form_form}
            onSubmit={(e) => contactFormData(e)}
          >
            <div className={styles.contact_form_header}>
              <h1 className="text-3xl font-bold">Contact Form</h1>
              <p>
                Please share your query with for any any purpose you can contact
                us
              </p>
            </div>
            <div className={styles.contact_form_div}>
              <label htmlFor="name" className={styles.contact_form_label}>
                Name
              </label>
              <br />
              <input
                className={styles.contact_form_input}
                type="text"
                placeholder="Enter name"
                name="name"
                value={contactInput.name}
                onChange={(e) => contactChange(e)}
              />
              {contactError.name.length > 0 ? (
                <p style={{ color: "red", letterSpacing: "3px" }}>
                  {contactError.name}
                </p>
              ) : null}
            </div>
            <div className={styles.contact_form_div}>
              <label htmlFor="email" className={styles.contact_form_label}>
                Email
              </label>
              <br />
              <input
                className={styles.contact_form_input}
                type="text"
                placeholder="Enter email"
                name="email"
                value={contactInput.email}
                onChange={(e) => contactChange(e)}
              />
              {contactError.email.length > 0 ? (
                <p style={{ color: "red", letterSpacing: "3px" }}>
                  {contactError.email}
                </p>
              ) : null}
            </div>
            <div className={styles.contact_form_div}>
              <label htmlFor="title" className={styles.contact_form_label}>
                Title
              </label>
              <br />
              <input
                className={styles.contact_form_input}
                type="text"
                placeholder="Enter title"
                name="title"
                value={contactInput.title}
                onChange={(e) => contactChange(e)}
              />
              {contactError.title.length > 0 ? (
                <p style={{ color: "red", letterSpacing: "3px" }}>
                  {contactError.title}
                </p>
              ) : null}
            </div>
            <div className={styles.contact_form_div}>
              <label
                htmlFor="description"
                className={styles.contact_form_label}
              >
                Description
              </label>
              <br />
              <input
                className={styles.contact_form_input}
                type="text"
                placeholder="Enter description"
                name="description"
                value={contactInput.description}
                onChange={(e) => contactChange(e)}
              />
              {contactError.description.length > 0 ? (
                <p style={{ color: "red", letterSpacing: "3px" }}>
                  {contactError.description}
                </p>
              ) : null}
            </div>
            <div className={styles.contact_form_div}>
              <button
                className={styles.contact_form_button}
                disabled={contactPassed ? false : true}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </CommonModuleComponent>
  );
}

export default ContactFormComponent;
