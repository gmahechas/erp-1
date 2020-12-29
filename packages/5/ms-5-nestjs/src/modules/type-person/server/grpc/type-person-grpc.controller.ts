import { Controller } from '@nestjs/common';

import {
  ITypePerson,
  ICreateTypePersonInput,
  IUpdateTypePersonInput,
  IDeleteTypePersonInput,
  ISearchTypePersonInput,
  GRPC_TYPE_PERSON_SERVICE_NAME,
  typePersonJoiSchema,
} from '@gmahechas/common-erp';
import { BaseGrpcController } from '@gmahechas/common-erp-nestjs';

import { TypePersonMongodbService } from '@ms-5/modules/type-person/client/mongodb/type-person-mongodb.service';

@Controller()
export class TypePersonGrpcController extends BaseGrpcController<
  ITypePerson,
  ICreateTypePersonInput,
  IUpdateTypePersonInput,
  IDeleteTypePersonInput,
  ISearchTypePersonInput
>(GRPC_TYPE_PERSON_SERVICE_NAME, typePersonJoiSchema) {
  constructor(
    private readonly typePersonMongodbService: TypePersonMongodbService,
  ) {
    super(typePersonMongodbService);
  }
}
