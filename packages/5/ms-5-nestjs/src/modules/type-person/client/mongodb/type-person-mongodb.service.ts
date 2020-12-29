import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  ICreateTypePersonInput,
  IUpdateTypePersonInput,
  IDeleteTypePersonInput,
  ISearchTypePersonInput,
  GRPC_TYPE_PERSON_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseMongodbService } from '@gmahechas/common-erp-nestjs';
import { TypePersonDocument } from '@ms-5/modules/type-person/client/mongodb/type-person.schema';

@Injectable()
export class TypePersonMongodbService extends BaseMongodbService<
  TypePersonDocument,
  ICreateTypePersonInput,
  IUpdateTypePersonInput,
  IDeleteTypePersonInput,
  ISearchTypePersonInput
>() {
  constructor(
    @InjectModel(GRPC_TYPE_PERSON_SERVICE_NAME)
    private readonly typePersonModel: Model<TypePersonDocument>,
  ) {
    super(typePersonModel);
  }
}
