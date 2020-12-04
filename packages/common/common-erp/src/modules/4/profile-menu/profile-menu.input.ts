export interface ICreateProfileMenuInput {
  profileMenuStatus: boolean;
  menuId: string;
  profileId: string;
}

export interface IUpdateProfileMenuInput {
  id: string;
  profileMenuStatus: boolean;
  menuId: string;
  profileId: string;
}

export interface IDeleteProfileMenuInput {
  id: string;
}

export interface ISearchProfileMenuInput {
  id: string;
  profileMenuStatus: boolean;
  menuId: string;
  profileId: string;
}