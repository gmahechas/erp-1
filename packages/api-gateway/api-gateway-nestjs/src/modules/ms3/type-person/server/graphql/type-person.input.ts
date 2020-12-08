import { InputType, Field } from '@nestjs/graphql';

import {
  ICreateTypePersonInput,
  IUpdateTypePersonInput,
  IDeleteTypePersonInput,
  ISearchTypePersonInput,
} from '@gmahechas/common-erp';

@InputType()
export class CreateTypePersonInput implements ICreateTypePersonInput {
  @Field() typePersonDescription: string;
  @Field() typePersonCode: string;
}

@InputType()
export class UpdateTypePersonInput implements IUpdateTypePersonInput {
  @Field() id: string;
  @Field({ nullable: true }) typePersonDescription: string;
  @Field({ nullable: true }) typePersonCode: string;
}

@InputType()
export class DeleteTypePersonInput implements IDeleteTypePersonInput {
  @Field() id: string;
}

@InputType()
export class SearchTypePersonInput implements ISearchTypePersonInput {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) typePersonDescription: string;
  @Field({ nullable: true }) typePersonCode: string;
}
