export interface ICreatePersonInput {
  typeIdentificationDescription: string;
  typeIdentificationCode: string;
}

export interface IUpdatePersonInput {
  id: string;
  typeIdentificationDescription: string;
  typeIdentificationCode: string;
}

export interface IDeletePersonInput {
  id: string;
}

export interface ISearchPersonInput {
  id: string;
  typeIdentificationDescription: string;
  typeIdentificationCode: string;
}