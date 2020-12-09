import { Controller } from '@nestjs/common';

import {
  ITypeIdentification,
  ICreateTypeIdentificationInput,
  IUpdateTypeIdentificationInput,
  IDeleteTypeIdentificationInput,
  ISearchTypeIdentificationInput,
  GRPC_TYPE_IDENTIFICATION_SERVICE_NAME,
  typeIdentificationJoiSchema,
} from '@gmahechas/common-erp';
import { BaseGrpcController } from '@gmahechas/common-erp-nestjs';

import { TypeIdentificationMongodbService } from '@ms-3/modules/type-identification/client/mongodb/type-identification-mongodb.service';

@Controller()
export class TypeIdentificationGrpcController extends BaseGrpcController<
  ITypeIdentification,
  ICreateTypeIdentificationInput,
  IUpdateTypeIdentificationInput,
  IDeleteTypeIdentificationInput,
  ISearchTypeIdentificationInput
>(GRPC_TYPE_IDENTIFICATION_SERVICE_NAME, typeIdentificationJoiSchema) {
  constructor(
    private readonly typeIdentificationMongodbService: TypeIdentificationMongodbService,
  ) {
    super(typeIdentificationMongodbService);
  }
}
