import { Controller } from '@nestjs/common';

import {
  IMenu,
  ICreateMenuInput,
  IUpdateMenuInput,
  IDeleteMenuInput,
  ISearchMenuInput,
  GRPC_MENU_SERVICE_NAME,
  menuJoiSchema,
} from '@gmahechas/common-erp';
import { BaseGrpcController } from '@gmahechas/common-erp-nestjs';

import { MenuMongodbService } from '@ms-5/modules/menu/client/mongodb/menu-mongodb.service';

@Controller()
export class MenuGrpcController extends BaseGrpcController<
  IMenu,
  ICreateMenuInput,
  IUpdateMenuInput,
  IDeleteMenuInput,
  ISearchMenuInput
>(GRPC_MENU_SERVICE_NAME, menuJoiSchema) {
  constructor(private readonly menuMongodbService: MenuMongodbService) {
    super(menuMongodbService);
  }
}
