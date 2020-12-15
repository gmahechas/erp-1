import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { menuJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { MenuGrpcService } from '@ms-0/modules/ms4/menu/client/grpc/menu-grpc.service';
import { MenuType } from '@ms-0/modules/ms4/menu/server/graphql/menu.type';
import {
  CreateMenuInput,
  UpdateMenuInput,
  DeleteMenuInput,
  SearchMenuInput,
} from '@ms-0/modules/ms4/menu/server/graphql/menu.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class MenuResolver extends BaseResolver(
  MenuType,
  CreateMenuInput,
  UpdateMenuInput,
  DeleteMenuInput,
  SearchMenuInput,
  'Menu',
  menuJoiSchema,
) {
  constructor(private readonly menuGrpcService: MenuGrpcService) {
    super(menuGrpcService);
  }
}
