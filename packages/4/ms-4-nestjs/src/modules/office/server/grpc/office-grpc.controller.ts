import { Controller } from '@nestjs/common';

import {
  IOffice,
  ICreateOfficeInput,
  IUpdateOfficeInput,
  IDeleteOfficeInput,
  ISearchOfficeInput,
  GRPC_OFFICE_SERVICE_NAME,
  officeJoiSchema,
} from '@gmahechas/common-erp';
import { BaseGrpcController } from '@gmahechas/common-erp-nestjs';

import { OfficeMongodbService } from '@ms-4/modules/office/client/mongodb/office-mongodb.service';

@Controller()
export class OfficeGrpcController extends BaseGrpcController<
  IOffice,
  ICreateOfficeInput,
  IUpdateOfficeInput,
  IDeleteOfficeInput,
  ISearchOfficeInput
>(GRPC_OFFICE_SERVICE_NAME, officeJoiSchema) {
  constructor(private readonly officeMongodbService: OfficeMongodbService) {
    super(officeMongodbService);
  }
}
