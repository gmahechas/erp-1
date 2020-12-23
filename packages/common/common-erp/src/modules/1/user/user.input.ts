export interface ICreateUserInput {
  userName: string;
  userPassword: string;
  personId: string;
}

export interface IUpdateUserInput {
  id: string;
  userName: string;
  userPassword: string;
  personId: string;
}

export interface IDeleteUserInput {
  id: string;
}

export interface ISearchUserInput {
  id: string;
  userName: string;
  personId: string;
}