export interface ContactFormPropsInterface {
  createContactForm: (a: any) => any;
  createContactFormStatus: any;
}

export interface ContactInputInterface {
  name: string;
  title: string;
  email: string;
  description: string;
  status: boolean;
}

export interface ContactInputErrorInterface {
  name: string;
  title: string;
  email: string;
  description: string;
}