export interface ICreateCompanyInput {
  companyName: string;
  companyIdentification: string;
  companyKey: string;
  cityId: string;
}

export interface IUpdateCompanyInput {
  id: string;
  companyName: string;
  companyIdentification: string;
  companyKey: string;
  cityId: string;
}

export interface IDeleteCompanyInput {
  id: string;
}

export interface ISearchCompanyInput {
  id: string;
  companyName: string;
  companyIdentification: string;
  companyKey: string;
  cityId: string;
}