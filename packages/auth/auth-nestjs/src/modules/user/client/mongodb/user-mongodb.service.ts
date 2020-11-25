import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  IEntityMany,
  IEntityOne,
  ICreateUserInput,
  IUpdateUserInput,
  IDeleteUserInput,
  ISearchUserInput,
  IUser,
  GRPC_USER_SERVICE_NAME,
} from '@gmahechas/common-erp';

import { UserDocument } from '@auth/modules/user/client/mongodb/user.schema';

@Injectable()
export class UserMongodbService {
  constructor(
    @InjectModel(GRPC_USER_SERVICE_NAME)
    private readonly entityModel: Model<UserDocument>,
  ) {}

  async createOne(
    data: IEntityOne<ICreateUserInput>,
  ): Promise<IEntityOne<IUser>> {
    const { ...dataEntity } = data.entity;
    const model = new this.entityModel(dataEntity);
    return { entity: await model.save() };
  }

  async updateOne(
    data: IEntityOne<IUpdateUserInput>,
  ): Promise<IEntityOne<IUser>> {
    const { ...dataEntity } = data.entity;
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
  }

  async deleteOne(
    data: IEntityOne<IDeleteUserInput>,
  ): Promise<IEntityOne<IUser>> {
    const { ...dataEntity } = data.entity;
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
    data: IEntityOne<ISearchUserInput>,
  ): Promise<IEntityOne<IUser>> {
    const dataEntity = this.changeIdInObject(data.entity);
    return {
      entity: await this.entityModel.findOne(dataEntity),
    };
  }

  async searchMany(
    data: IEntityMany<ISearchUserInput>,
  ): Promise<IEntityMany<IUser>> {
    const dataEntities = this.changeIdInArray(data.entities);
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

  changeIdInArray(data: any[]) {
    if (data) {
      data.map((item) => {
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
