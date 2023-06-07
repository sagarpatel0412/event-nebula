export interface EventListComponentPropsInterface {
  getEventsData: Array<any>;
}

export interface EventCardComponentPropsInterface {
  id: string;
  title: string;
  description: string;
}

export interface EventListDetailsComponentPropsInterface {
  id: string;
  getEventByIdData: any;
  enrollEvents: (a: any) => any;
  enrollEventsStatus: any;
  profileDetail: any;
  isAuthorizedUser: any;
}

export interface EnrollStateInterface {
  userId: string;
  eventId: string;
  is_active: boolean;
}
