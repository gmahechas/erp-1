import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  ICreateMenuInput,
  IUpdateMenuInput,
  IDeleteMenuInput,
  ISearchMenuInput,
  GRPC_MENU_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseMongodbService } from '@gmahechas/common-erp-nestjs';
import { MenuDocument } from '@ms4/modules/menu/client/mongodb/menu.schema';

@Injectable()
export class MenuMongodbService extends BaseMongodbService<
  MenuDocument,
  ICreateMenuInput,
  IUpdateMenuInput,
  IDeleteMenuInput,
  ISearchMenuInput
>() {
  constructor(
    @InjectModel(GRPC_MENU_SERVICE_NAME)
    private readonly menuModel: Model<MenuDocument>,
  ) {
    super(menuModel);
  }
}
