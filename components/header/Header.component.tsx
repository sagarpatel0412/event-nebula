import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { HeaderPropsInterface } from "../../interface/header-interface";
import { removeFromLocalStorage } from "../../helpers/browser";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faEnvelope,
  faGear,
  faGrinStars,
  faMailBulk,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { SearchContext } from "../../pages/_app";
import { debounce } from "lodash";

function HeaderComponent(props: HeaderPropsInterface) {
  const [navLinks, setNavlinks] = useState<boolean>(false);
  const [search, setSearch] = useContext<any>(SearchContext);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (
      typeof props.profileDetail !== "undefined" &&
      typeof props.isAuthorizedUser !== "undefined"
    ) {
      if (
        Object.keys(props.profileDetail).length > 0 &&
        props.isAuthorizedUser === true
      ) {
        setNavlinks(true);
      }
    } else {
      setNavlinks(false);
    }
  }, [props]);

  const onLogout = (): void => {
    removeFromLocalStorage("token");
    setTimeout(() => {
      router.push("/");
    }, 100);
  };

  const searchAnything = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const showSearchFunc = (): void => {
    setShowSearch(!showSearch);
  };

  const showDropDownMenu = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div>
      <header className="bg-gray-800 text-white justify-end flex">
        <div className="py-5 flex">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: "21px", padding: "1px" }}
          />
          <a className="px-2 font-bold" href="mailto: abc@example.com">
            abc@example.com
          </a>
        </div>
        <div className="flex">
          <div className="p-2 m-2">
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "27px" }} />
          </div>
          <div className="p-2 m-2">
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "27px" }} />
          </div>
          <div className="p-2 m-2">
            <FontAwesomeIcon icon={faPinterest} style={{ fontSize: "27px" }} />
          </div>
          <div className="p-2 m-2">
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "27px" }} />
          </div>
        </div>
        <div className="flex">
          <div className="py-2 px-4 flex">
            <input
              type="text"
              className={`p-2 text-white outline-0 placeholder-white bg-gray-800  ${
                showSearch ? "w-100 border-b border-gray-500" : "w-0"
              }`}
              placeholder="Enter to search"
              value={search}
              onChange={(e) => searchAnything(e)}
            />
            {showSearch ? (
              <div className="bg-gray-800 text-white p-2 border-b border-gray-500">
                <FontAwesomeIcon
                  icon={faClose}
                  onClick={() => showSearchFunc()}
                />
              </div>
            ) : (
              <div className="bg-gray-800 text-white p-2">
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ fontSize: "23px" }}
                  onClick={() => showSearchFunc()}
                />
              </div>
            )}
          </div>
          <div>
            <select className="bg-gray-800 font-bold outline-0 border-b border-gray-500 text-white p-3 m-2">
              <option>Eng</option>
              <option>Hin</option>
            </select>
          </div>
        </div>
      </header>
      <header className="px-5 bg-gray-900 text-white flex justify-between">
        <div>
          <Link href={"/"} className={`text-3xl p-2  font-bold`}>
            <h1>Nebula Events</h1>
          </Link>
        </div>
        <div className="m-1">
          <div className="py-5 my-4 h-100 font-bold">
            {navLinks ? (
              <>
                <Link href={"/profile"} className="text-lg px-3">
                  Profile
                </Link>
                <Link href={"/blog"} className="text-lg px-3">
                  Blog
                </Link>
                <Link href={"/about"} className="text-lg px-3">
                  About us
                </Link>
                <Link href={"/contact-us"} className="text-lg px-3">
                  Contact us
                </Link>{" "}
                <div className="relative inline-block text-left">
                  <div className="bg-gray-900">
                    <button
                      type="button"
                      className="bg-gray-900 inline-flex w-full justify-center gap-x-1.5 text-white px-3 py-2 text-sm font-semibold outline-none border-none shadow-sm"
                      id="menu-button"
                      aria-expanded="true"
                      onClick={() => showDropDownMenu()}
                      aria-haspopup="true"
                      style={{ fontSize: "18px" }}
                    >
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {showDropDown ? (
                    <div
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      tabIndex={-1}
                    >
                      <div className="py-1" role="none">
                        <Link
                          href={"/event-list"}
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-0"
                          style={{ cursor: "pointer" }}
                        >
                          Events
                        </Link>
                        <Link
                          href={"/"}
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-1"
                          style={{ cursor: "pointer" }}
                        >
                          Duplicate
                        </Link>
                      </div>
                      <div className="py-1" role="none">
                        <Link
                          href={"/"}
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-2"
                          style={{ cursor: "pointer" }}
                        >
                          Archive
                        </Link>
                        <Link
                          href={"/"}
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-3"
                          style={{ cursor: "pointer" }}
                        >
                          Move
                        </Link>
                      </div>
                      <div className="py-1" role="none">
                        <Link
                          href={"/"}
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-4"
                          style={{ cursor: "pointer" }}
                        >
                          Share
                        </Link>
                        <Link
                          href={"/"}
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-5"
                          style={{ cursor: "pointer" }}
                        >
                          Add to favorites
                        </Link>
                      </div>
                      <div className="py-1" role="none">
                        <Link
                          href={"/"}
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-6"
                          style={{ cursor: "pointer" }}
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  ) : null}
                </div>
                <a onClick={() => onLogout()} className="text-lg px-3">
                  Logout
                </a>
              </>
            ) : (
              <>
                <Link href={"/login"} className="text-lg px-3">
                  Login
                </Link>
                <Link href={"/register"} className="text-lg px-3">
                  Register
                </Link>
                <Link href={"/about"} className="text-lg px-3">
                  About us
                </Link>
                <Link href={"/contact-us"} className="text-lg px-3">
                  Contact us
                </Link>{" "}
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderComponent;
