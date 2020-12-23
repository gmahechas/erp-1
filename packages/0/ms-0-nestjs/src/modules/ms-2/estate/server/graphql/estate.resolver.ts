import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { estateJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { EstateGrpcService } from '@ms-0/modules/ms-2/estate/client/grpc/estate-grpc.service';
import { EstateType } from '@ms-0/modules/ms-2/estate/server/graphql/estate.type';
import {
  CreateEstateInput,
  UpdateEstateInput,
  DeleteEstateInput,
  SearchEstateInput,
} from '@ms-0/modules/ms-2/estate/server/graphql/estate.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class EstateResolver extends BaseResolver(
  EstateType,
  CreateEstateInput,
  UpdateEstateInput,
  DeleteEstateInput,
  SearchEstateInput,
  'Estate',
  estateJoiSchema,
) {
  constructor(private readonly estateGrpcService: EstateGrpcService) {
    super(estateGrpcService);
  }
}
