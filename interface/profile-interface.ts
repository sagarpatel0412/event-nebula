import React, { SetStateAction } from "react";
import { UserDetailInputInterface } from "./login-interface";

export interface ProfilePropsInterface {
  profileDetail: UserDetailInputInterface;
  isAuthorizedUser: boolean;
  getUserPostsData: any[];
  updateProfile: (a: any) => any;
  updateProfileStatus: any;
  createUserPost: (a: any) => any;
  createUserPostStatus: any;
}

export interface ProfileUserLocationInterface {
  lat: number;
  lng: number;
}
export interface LocationMapComponentInterface {
  location: ProfileUserLocationInterface;
  profileDetail: UserDetailInputInterface;
  activateMap: number;
  activate: number;
}

export interface ProfileUpdateFormInterface {
  email?: string;
  state?: string;
  status?: boolean;
  address1?: string;
  address2?: string;
  password?: string;
  firstname?: string;
  lastname?: string;
  city?: string;
  country?: string;
  username?: string;
}

export interface ProfileUpdateFormErrorInterface {
  email: string;
  state: string;
  address1: string;
  address2: string;
  firstname: string;
  lastname: string;
  city: string;
  country: string;
  username: string;
}

export interface ModalComponentPropsInterface {
  children?: React.ReactNode;
  showModal?: boolean;
  setShowModal?: React.Dispatch<SetStateAction<boolean>>;
}

export interface ButtonComponentPropsInterface {
  type: "button" | "submit" | "reset" | undefined;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  disabled?: boolean;
}

export interface CreateUserPostInterface {
  title: string;
  metatitle: string;
  description: string;
  metadescription: string;
  status: boolean;
  image: string;
}

export interface CreateUserPostErrorInterface {
  title: string;
  metatitle: string;
  description: string;
  metadescription: string;
  image: string;
}
