export interface ICreateMenuInput {
  menuName: string;
  menuDescription: string;
  menuUri: string;
  menuOrder: number;
  menuIdParent: string;
}

export interface IUpdateMenuInput {
  id: string;
  menuName: string;
  menuDescription: string;
  menuUri: string;
  menuOrder: number;
  menuIdParent: string;
}

export interface IDeleteMenuInput {
  id: string;
}

export interface ISearchMenuInput {
  id: string;
  menuName: string;
  menuDescription: string;
  menuUri: string;
  menuOrder: number;
  menuIdParent: string;
}