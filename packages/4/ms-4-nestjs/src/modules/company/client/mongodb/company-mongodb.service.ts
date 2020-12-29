import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  ICreateCompanyInput,
  IUpdateCompanyInput,
  IDeleteCompanyInput,
  ISearchCompanyInput,
  GRPC_COMPANY_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseMongodbService } from '@gmahechas/common-erp-nestjs';
import { CompanyDocument } from '@ms-4/modules/company/client/mongodb/company.schema';

@Injectable()
export class CompanyMongodbService extends BaseMongodbService<
  CompanyDocument,
  ICreateCompanyInput,
  IUpdateCompanyInput,
  IDeleteCompanyInput,
  ISearchCompanyInput
>() {
  constructor(
    @InjectModel(GRPC_COMPANY_SERVICE_NAME)
    private readonly companyModel: Model<CompanyDocument>,
  ) {
    super(companyModel);
  }
}
