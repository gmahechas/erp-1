export interface ICreateUserProfileInput {
  userProfileStatus: boolean;
  userId: string;
  profileId: string;
}

export interface IUpdateUserProfileInput {
  id: string;
  userProfileStatus: boolean;
  userId: string;
  profileId: string;
}

export interface IDeleteUserProfileInput {
  id: string;
}

export interface ISearchUserProfileInput {
  id: string;
  userProfileStatus: boolean;
  userId: string;
  profileId: string;
}