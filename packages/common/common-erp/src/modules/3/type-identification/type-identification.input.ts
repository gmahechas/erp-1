export interface ICreateTypeIdentificationInput {
  typeIdentificationDescription: string;
  typeIdentificationCode: string;
}

export interface IUpdateTypeIdentificationInput {
  id: string;
  typeIdentificationDescription: string;
  typeIdentificationCode: string;
}

export interface IDeleteTypeIdentificationInput {
  id: string;
}

export interface ISearchTypeIdentificationInput {
  id: string;
  typeIdentificationDescription: string;
  typeIdentificationCode: string;
}