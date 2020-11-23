import { IEntityOne } from './entity-one.interface';
import { IEntityMany } from './entity-many.interface';

export interface IEntityService<T> {
  createOne(data: IEntityOne<T>): IEntityOne<T>;
  updateOne(data: IEntityOne<T>): IEntityOne<T>;
  deleteOne(data: IEntityOne<T>): IEntityOne<T>;
  searchById(data: IEntityOne<T>): IEntityOne<T>;
  searchMany(data: IEntityMany<T>): IEntityMany<T>;
}