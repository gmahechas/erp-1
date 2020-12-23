export interface ICreateProfileInput {
  profileName: string;
  profileDescription: string;
}

export interface IUpdateProfileInput {
  id: string;
  profileName: string;
  profileDescription: string;
}

export interface IDeleteProfileInput {
  id: string;
}

export interface ISearchProfileInput {
  id: string;
  profileName: string;
  profileDescription: string;
}