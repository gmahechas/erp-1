export interface IJoiError {
  type: string;
  context: any;
}

export interface IErrorResponse {
  message: string;
  errors?: IJoiError[];
}