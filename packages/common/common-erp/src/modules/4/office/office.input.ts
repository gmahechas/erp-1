export interface ICreateOfficeInput {
  officeName: string;
  companyId: string;
}

export interface IUpdateOfficeInput {
  id: string;
  officeName: string;
  companyId: string;
}

export interface IDeleteOfficeInput {
  id: string;
}

export interface ISearchOfficeInput {
  id: string;
  officeName: string;
  companyId: string;
}