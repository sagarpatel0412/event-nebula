import { SetStateAction } from "react";

export interface BlogComponentPropsInterface {
  getPostsData: any;
  search: string;
  // setLoading: React.Dispatch<SetStateAction<boolean>>;
}

export interface CardComponentPropsInterface {
  cardData: any;
}
