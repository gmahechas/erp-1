export interface ICreateEstateInput {
  estateName: string;
  estateCode: string;
  countryId: string;
}

export interface IUpdateEstateInput {
  id: string;
  estateName: string;
  estateCode: string;
  countryId: string;
}

export interface IDeleteEstateInput {
  id: string;
}

export interface ISearchEstateInput {
  id: string;
  estateName: string;
  estateCode: string;
  countryId: string;
}