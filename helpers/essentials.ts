export interface CarasoulDataInterface {
  id: number;
  type: "image" | "video";
  alt: string;
  link: string;
}

export const EMAIL_REGEX = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

export const PASSWORD_REGEX = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
);

export const USERNAME_REGEX = new RegExp(/^[a-z0-9_-]{3,15}$/);
//https://www.youtube.com/embed/LEENEFaVUzU

export const CARASOUL_DATA: Array<CarasoulDataInterface> = [
  {
    id: 1,
    type: "image",
    alt: "aurora",
    link: "https://unsplash.com/photos/va_nrBLonf8/download?force=true",
  },
  {
    id: 2,
    type: "image",
    alt: "aurora",
    link: "https://unsplash.com/photos/EOoa3D1N0xc/download?force=true",
  },
  {
    id: 3,
    type: "image",
    alt: "aurora",
    link: "https://unsplash.com/photos/ZSMgNjYrHRM/download?force=true",
  },
  {
    id: 4,
    type: "image",
    alt: "aurora",
    link: "https://unsplash.com/photos/E0AHdsENmDg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NTJ8fGF1cm9yYXxlbnwwfHx8fDE2ODA1OTI2ODQ&force=true",
  },
  {
    id: 1,
    type: "video",
    alt: "aurora",
    link: "https://www.youtube.com/embed/LEENEFaVUzU",
  },
];

export const slickSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  // arrows: true,
};
