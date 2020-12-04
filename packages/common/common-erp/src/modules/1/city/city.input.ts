export interface ICreateCityInput {
  cityName: string;
  cityCode: string;
  estateId: string;
}

export interface IUpdateCityInput {
  id: string;
  cityName: string;
  cityCode: string;
  estateId: string;
}

export interface IDeleteCityInput {
  id: string;
}

export interface ISearchCityInput {
  id: string;
  cityName: string;
  cityCode: string;
  estateId: string;
}