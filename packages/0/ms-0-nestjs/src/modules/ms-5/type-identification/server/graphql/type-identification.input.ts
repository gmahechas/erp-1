import { InputType, Field } from '@nestjs/graphql';

import {
  ICreateTypeIdentificationInput,
  IUpdateTypeIdentificationInput,
  IDeleteTypeIdentificationInput,
  ISearchTypeIdentificationInput,
} from '@gmahechas/common-erp';

@InputType()
export class CreateTypeIdentificationInput
  implements ICreateTypeIdentificationInput {
  @Field() typeIdentificationDescription: string;
  @Field() typeIdentificationCode: string;
}

@InputType()
export class UpdateTypeIdentificationInput
  implements IUpdateTypeIdentificationInput {
  @Field() id: string;
  @Field({ nullable: true }) typeIdentificationDescription: string;
  @Field({ nullable: true }) typeIdentificationCode: string;
}

@InputType()
export class DeleteTypeIdentificationInput
  implements IDeleteTypeIdentificationInput {
  @Field() id: string;
}

@InputType()
export class SearchTypeIdentificationInput
  implements ISearchTypeIdentificationInput {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) typeIdentificationDescription: string;
  @Field({ nullable: true }) typeIdentificationCode: string;
}
