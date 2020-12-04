export interface ICreatePersonInput {
  typePersonDescription: string;
  typePersonCode: string;
}

export interface IUpdatePersonInput {
  id: string;
  typePersonDescription: string;
  typePersonCode: string;
}

export interface IDeletePersonInput {
  id: string;
}

export interface ISearchPersonInput {
  id: string;
  typePersonDescription: string;
  typePersonCode: string;
}