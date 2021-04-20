import { IEntityMany, IEntityOne } from '@gmahechas/common-erp';
import { Model, Document } from 'mongoose';

export function BaseMongodbService<A extends Document, B, C, D, E>(): any {

  abstract class BaseMongodbServiceHost {
    constructor(
      private readonly entityModel: Model<A>
    ) { }

    async createOne(
      data: IEntityOne<B>,
    ): Promise<IEntityOne<A>> {
      const { ...dataEntity } = data.entity;
      const model = new this.entityModel(dataEntity);
      return { entity: await model.save() };
    }

/*     async updateOne(
      data: IEntityOne<C>,
    ): Promise<IEntityOne<A>> {
      const { ...dataEntity } = data.entity as any;
      const entity = await this.entityModel.findById(dataEntity.id);
      if (entity) {
        Object.assign(entity, dataEntity);
        const result = await this.entityModel.updateOne(
          { _id: dataEntity.id },
          entity,
        );
        if (result.ok) {
          return { entity };
        } else {
          return { entity: null };
        }
      } else {
        return { entity: null };
      }
    } */

    async deleteOne(
      data: IEntityOne<D>,
    ): Promise<IEntityOne<A>> {
      const { ...dataEntity } = data.entity as any;;
      const entity = await this.entityModel.findById(dataEntity.id);
      if (entity) {
        const result = await this.entityModel.deleteOne({ _id: dataEntity.id });
        if (result.ok) {
          return { entity };
        } else {
          return { entity: null };
        }
      } else {
        return { entity: null };
      }
    }

    async searchOne(
      data: IEntityOne<E>,
    ): Promise<IEntityOne<A>> {
      const dataEntity = this.changeIdInObject(data.entity);
      return {
        entity: await this.entityModel.findOne(dataEntity),
      };
    }

    async searchMany(
      data: IEntityMany<E>,
    ): Promise<IEntityMany<A>> {
      const dataEntities = this.changeIdInArray(data.entities);
      return { entities: await this.entityModel.find({ $or: dataEntities }) };
    }

    changeIdInArray(data: any) {
      if (data) {
        data.map((item: any) => {
          this.changeIdInObject(item);
        });
        return data;
      } else {
        return [{}];
      }
    }

    changeIdInObject(object: any) {
      if (object.id) {
        Object.assign(object, { _id: object.id });
        delete object.id;
        return object;
      } else {
        return object;
      }
    }

  }
  return BaseMongodbServiceHost;
}