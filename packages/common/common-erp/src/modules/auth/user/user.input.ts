import { IUser } from './user.interface';

export interface ICreateUserInput extends Partial<IUser> {
  userName: string;
  userPassword: string;
  personId: string;
}

export interface ISearchUserInput extends Partial<IUser> {
  id: string;
  userName: string;
  personId: string;
}

export interface IUpdateUserInput extends Partial<IUser> {
  id: string;
  userName: string;
  userPassword: string;
  personId: string;
}

export interface IDeleteUserInput extends Partial<IUser> {
  id: string;
}