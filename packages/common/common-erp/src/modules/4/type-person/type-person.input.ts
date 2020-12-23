export interface ICreateTypePersonInput {
  typePersonDescription: string;
  typePersonCode: string;
}

export interface IUpdateTypePersonInput {
  id: string;
  typePersonDescription: string;
  typePersonCode: string;
}

export interface IDeleteTypePersonInput {
  id: string;
}

export interface ISearchTypePersonInput {
  id: string;
  typePersonDescription: string;
  typePersonCode: string;
}