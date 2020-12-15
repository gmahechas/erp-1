import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  IEntityServiceObservable,
  GRPC_MS4_PACKAGE_NAME,
  GRPC_MENU_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseGrpcService } from '@gmahechas/common-erp-nestjs';

import { MenuType } from '@ms-0/modules/ms4/menu/server/graphql/menu.type';
import {
  CreateMenuInput,
  UpdateMenuInput,
  DeleteMenuInput,
  SearchMenuInput,
} from '@ms-0/modules/ms4/menu/server/graphql/menu.input';

@Injectable()
export class MenuGrpcService
  extends BaseGrpcService(GRPC_MENU_SERVICE_NAME)
  implements OnModuleInit {
  private grpcService: IEntityServiceObservable<
    MenuType,
    CreateMenuInput,
    UpdateMenuInput,
    DeleteMenuInput,
    SearchMenuInput
  >;

  constructor(
    @Inject(GRPC_MS4_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {
    super(grpcClient);
  }

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityServiceObservable<
        MenuType,
        CreateMenuInput,
        UpdateMenuInput,
        DeleteMenuInput,
        SearchMenuInput
      >
    >(GRPC_MENU_SERVICE_NAME);
  }
}
