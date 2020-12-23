import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { officeJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { OfficeGrpcService } from '@ms-0/modules/ms-3/office/client/grpc/office-grpc.service';
import { OfficeType } from '@ms-0/modules/ms-3/office/server/graphql/office.type';
import {
  CreateOfficeInput,
  UpdateOfficeInput,
  DeleteOfficeInput,
  SearchOfficeInput,
} from '@ms-0/modules/ms-3/office/server/graphql/office.input';

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
