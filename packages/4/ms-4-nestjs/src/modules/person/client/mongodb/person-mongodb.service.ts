import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  ICreatePersonInput,
  IUpdatePersonInput,
  IDeletePersonInput,
  ISearchPersonInput,
  GRPC_PERSON_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseMongodbService } from '@gmahechas/common-erp-nestjs';
import { PersonDocument } from '@ms-4/modules/person/client/mongodb/person.schema';

@Injectable()
export class PersonMongodbService extends BaseMongodbService<
  PersonDocument,
  ICreatePersonInput,
  IUpdatePersonInput,
  IDeletePersonInput,
  ISearchPersonInput
>() {
  constructor(
    @InjectModel(GRPC_PERSON_SERVICE_NAME)
    private readonly personModel: Model<PersonDocument>,
  ) {
    super(personModel);
  }
}
