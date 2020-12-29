import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { companyJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { CompanyGrpcService } from '@ms-0/modules/ms-4/company/client/grpc/company-grpc.service';
import { CompanyType } from '@ms-0/modules/ms-4/company/server/graphql/company.type';
import {
  CreateCompanyInput,
  UpdateCompanyInput,
  DeleteCompanyInput,
  SearchCompanyInput,
} from '@ms-0/modules/ms-4/company/server/graphql/company.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class CompanyResolver extends BaseResolver(
  CompanyType,
  CreateCompanyInput,
  UpdateCompanyInput,
  DeleteCompanyInput,
  SearchCompanyInput,
  'Company',
  companyJoiSchema,
) {
  constructor(private readonly companyGrpcService: CompanyGrpcService) {
    super(companyGrpcService);
  }
}
