import { Observable } from 'rxjs';

import { IEntityOne } from './entity-one.interface';
import { IEntityMany } from './entity-many.interface';

export interface IEntityService<A,B,C,D,E> {
  createOne(data: IEntityOne<B>): Observable<IEntityOne<A>>;
  updateOne(data: IEntityOne<C>): Observable<IEntityOne<A>>;
  deleteOne(data: IEntityOne<D>): Observable<IEntityOne<A>>;
  searchById(data: IEntityOne<E>): Observable<IEntityOne<A>>;
  searchMany(data: IEntityMany<E>): Observable<IEntityMany<A>>;
}