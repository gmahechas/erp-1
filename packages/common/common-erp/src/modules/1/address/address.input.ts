export interface ICreateAddressInput {
  addressLine1: string;
  addressLine2: string;
  addressZipCode: string;
  cityId: string;
}

export interface IUpdateAddressInput {
  id: string;
  addressLine1: string;
  addressLine2: string;
  addressZipCode: string;
  cityId: string;
}

export interface IDeleteAddressInput {
  id: string;
}

export interface ISearchAddressInput {
  id: string;
  addressLine1: string;
  addressLine2: string;
  addressZipCode: string;
  cityId: string;
}