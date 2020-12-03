import { IEntityOne } from './entity-one.interface';
import { IEntityMany } from './entity-many.interface';

export interface IEntityServicePromise<A,B,C,D,E> {
  createOne(data: IEntityOne<B>): Promise<IEntityOne<A>>;
  updateOne(data: IEntityOne<C>): Promise<IEntityOne<A>>;
  deleteOne(data: IEntityOne<D>): Promise<IEntityOne<A>>;
  searchOne(data: IEntityOne<E>): Promise<IEntityOne<A>>;
  searchMany(data: IEntityMany<E>): Promise<IEntityMany<A>>;
}