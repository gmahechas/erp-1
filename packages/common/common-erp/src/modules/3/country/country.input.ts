export interface ICreateCountryInput {
  countryName: string;
  countryCode: string;
}

export interface IUpdateCountryInput {
  id: string;
  countryName: string;
  countryCode: string;
}

export interface IDeleteCountryInput {
  id: string;
}

export interface ISearchCountryInput {
  id: string;
  countryName: string;
  countryCode: string;
}