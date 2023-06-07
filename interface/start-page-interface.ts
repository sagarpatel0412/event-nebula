import { UserDetailInputInterface } from "./login-interface";

export interface StartPageComponentProps {
  userCount?: number;
  randomImage?: string;
  profileDetail?: UserDetailInputInterface;
  isAuthorizedUser?: boolean;
}
