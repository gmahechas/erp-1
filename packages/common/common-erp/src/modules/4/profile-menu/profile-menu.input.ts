export interface ICreateProfileInput {
  profileMenuStatus: boolean;
  menuId: string;
  profileId: string;
}

export interface IUpdateProfileInput {
  id: string;
  profileMenuStatus: boolean;
  menuId: string;
  profileId: string;
}

export interface IDeleteProfileInput {
  id: string;
}

export interface ISearchProfileInput {
  id: string;
  profileMenuStatus: boolean;
  menuId: string;
  profileId: string;
}