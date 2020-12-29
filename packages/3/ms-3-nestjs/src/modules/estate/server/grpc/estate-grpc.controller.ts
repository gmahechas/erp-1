import { Controller } from '@nestjs/common';

import {
  IEstate,
  ICreateEstateInput,
  IUpdateEstateInput,
  IDeleteEstateInput,
  ISearchEstateInput,
  GRPC_ESTATE_SERVICE_NAME,
  estateJoiSchema,
} from '@gmahechas/common-erp';
import { BaseGrpcController } from '@gmahechas/common-erp-nestjs';

import { EstateMongodbService } from '@ms-3/modules/estate/client/mongodb/estate-mongodb.service';

@Controller()
export class EstateGrpcController extends BaseGrpcController<
  IEstate,
  ICreateEstateInput,
  IUpdateEstateInput,
  IDeleteEstateInput,
  ISearchEstateInput
>(GRPC_ESTATE_SERVICE_NAME, estateJoiSchema) {
  constructor(private readonly estateMongodbService: EstateMongodbService) {
    super(estateMongodbService);
  }
}
