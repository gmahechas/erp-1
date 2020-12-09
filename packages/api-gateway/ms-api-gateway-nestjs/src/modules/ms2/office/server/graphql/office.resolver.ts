import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { officeJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { OfficeGrpcService } from '@ms-api-gateway/modules/ms2/office/client/grpc/office-grpc.service';
import { OfficeType } from '@ms-api-gateway/modules/ms2/office/server/graphql/office.type';
import {
  CreateOfficeInput,
  UpdateOfficeInput,
  DeleteOfficeInput,
  SearchOfficeInput,
} from '@ms-api-gateway/modules/ms2/office/server/graphql/office.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class OfficeResolver extends BaseResolver(
  OfficeType,
  CreateOfficeInput,
  UpdateOfficeInput,
  DeleteOfficeInput,
  SearchOfficeInput,
  'Office',
  officeJoiSchema,
) {
  constructor(private readonly officeGrpcService: OfficeGrpcService) {
    super(officeGrpcService);
  }
}
