import { InputType, Field } from '@nestjs/graphql';

import {
  ICreateEstateInput,
  IUpdateEstateInput,
  IDeleteEstateInput,
  ISearchEstateInput,
} from '@gmahechas/common-erp';

@InputType()
export class CreateEstateInput implements ICreateEstateInput {
  @Field() estateName: string;
  @Field() estateCode: string;
  @Field() countryId: string;
}

@InputType()
export class UpdateEstateInput implements IUpdateEstateInput {
  @Field() id: string;
  @Field({ nullable: true }) estateName: string;
  @Field({ nullable: true }) estateCode: string;
  @Field({ nullable: true }) countryId: string;
}

@InputType()
export class DeleteEstateInput implements IDeleteEstateInput {
  @Field() id: string;
}

@InputType()
export class SearchEstateInput implements ISearchEstateInput {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) estateName: string;
  @Field({ nullable: true }) estateCode: string;
  @Field({ nullable: true }) countryId: string;
}
