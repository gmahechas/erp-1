import { Controller } from '@nestjs/common';

import {
  IPerson,
  ICreatePersonInput,
  IUpdatePersonInput,
  IDeletePersonInput,
  ISearchPersonInput,
  GRPC_PERSON_SERVICE_NAME,
  personJoiSchema,
} from '@gmahechas/common-erp';
import { BaseGrpcController } from '@gmahechas/common-erp-nestjs';

import { PersonMongodbService } from '@ms-3/modules/person/client/mongodb/person-mongodb.service';

@Controller()
export class PersonGrpcController extends BaseGrpcController<
  IPerson,
  ICreatePersonInput,
  IUpdatePersonInput,
  IDeletePersonInput,
  ISearchPersonInput
>(GRPC_PERSON_SERVICE_NAME, personJoiSchema) {
  constructor(private readonly personMongodbService: PersonMongodbService) {
    super(personMongodbService);
  }
}
