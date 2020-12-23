import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  IEntityServiceObservable,
  GRPC_MS_4_PACKAGE_NAME,
  GRPC_PERSON_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseGrpcService } from '@gmahechas/common-erp-nestjs';

import { PersonType } from '@ms-0/modules/ms-4/person/server/graphql/person.type';
import {
  CreatePersonInput,
  UpdatePersonInput,
  DeletePersonInput,
  SearchPersonInput,
} from '@ms-0/modules/ms-4/person/server/graphql/person.input';

@Injectable()
export class PersonGrpcService
  extends BaseGrpcService(GRPC_PERSON_SERVICE_NAME)
  implements OnModuleInit {
  private grpcService: IEntityServiceObservable<
    PersonType,
    CreatePersonInput,
    UpdatePersonInput,
    DeletePersonInput,
    SearchPersonInput
  >;

  constructor(
    @Inject(GRPC_MS_4_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {
    super(grpcClient);
  }

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityServiceObservable<
        PersonType,
        CreatePersonInput,
        UpdatePersonInput,
        DeletePersonInput,
        SearchPersonInput
      >
    >(GRPC_PERSON_SERVICE_NAME);
  }
}
