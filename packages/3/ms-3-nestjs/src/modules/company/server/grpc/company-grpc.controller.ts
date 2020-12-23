import { Controller } from '@nestjs/common';

import {
  ICompany,
  ICreateCompanyInput,
  IUpdateCompanyInput,
  IDeleteCompanyInput,
  ISearchCompanyInput,
  GRPC_COMPANY_SERVICE_NAME,
  companyJoiSchema,
} from '@gmahechas/common-erp';
import { BaseGrpcController } from '@gmahechas/common-erp-nestjs';

import { CompanyMongodbService } from '@ms-3/modules/company/client/mongodb/company-mongodb.service';

@Controller()
export class CompanyGrpcController extends BaseGrpcController<
  ICompany,
  ICreateCompanyInput,
  IUpdateCompanyInput,
  IDeleteCompanyInput,
  ISearchCompanyInput
>(GRPC_COMPANY_SERVICE_NAME, companyJoiSchema) {
  constructor(private readonly companyMongodbService: CompanyMongodbService) {
    super(companyMongodbService);
  }
}
