import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { typePersonJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { TypePersonGrpcService } from '@api-gateway-nestjs/modules/ms3/type-person/client/grpc/type-person-grpc.service';
import { TypePersonType } from '@api-gateway-nestjs/modules/ms3/type-person/server/graphql/type-person.type';
import {
  CreateTypePersonInput,
  UpdateTypePersonInput,
  DeleteTypePersonInput,
  SearchTypePersonInput,
} from '@api-gateway-nestjs/modules/ms3/type-person/server/graphql/type-person.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class TypePersonResolver extends BaseResolver(
  TypePersonType,
  CreateTypePersonInput,
  UpdateTypePersonInput,
  DeleteTypePersonInput,
  SearchTypePersonInput,
  'TypePerson',
  typePersonJoiSchema,
) {
  constructor(private readonly typePersonGrpcService: TypePersonGrpcService) {
    super(typePersonGrpcService);
  }
}
