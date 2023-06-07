export interface GetUserRolesInterface {
  __typename: string;
  id: string;
  name: string;
  value_info: string;
  description: string;
}
export interface SignUpComponentProps {
  userRoles: Array<GetUserRolesInterface>;
  createUser: (a: any) => any;
}

export interface LoginComponentProps {
  sendLogin: (a: any) => any;
  sendLoginStatus: any;
  setAuthorized: (a: any) => any;
}

export interface LoginFormInput {
  email: string;
  password: string;
}

export interface UserDetailInputInterface {
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  password?: string;
  status: boolean;
  userRoleId: string;
  confirmPassword: string;
  usersRole?: GetUserRolesInterface;
  id?: string;
}
