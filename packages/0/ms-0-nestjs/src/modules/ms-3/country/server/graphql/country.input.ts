import { InputType, Field } from '@nestjs/graphql';

import {
  ICreateCountryInput,
  IUpdateCountryInput,
  IDeleteCountryInput,
  ISearchCountryInput,
} from '@gmahechas/common-erp';

@InputType()
export class CreateCountryInput implements ICreateCountryInput {
  @Field() countryName: string;
  @Field() countryCode: string;
}

@InputType()
export class UpdateCountryInput implements IUpdateCountryInput {
  @Field() id: string;
  @Field({ nullable: true }) countryName: string;
  @Field({ nullable: true }) countryCode: string;
}

@InputType()
export class DeleteCountryInput implements IDeleteCountryInput {
  @Field() id: string;
}

@InputType()
export class SearchCountryInput implements ISearchCountryInput {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) countryName: string;
  @Field({ nullable: true }) countryCode: string;
}
