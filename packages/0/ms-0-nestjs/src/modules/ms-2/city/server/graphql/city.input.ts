import { InputType, Field } from '@nestjs/graphql';

import {
  ICreateCityInput,
  IUpdateCityInput,
  IDeleteCityInput,
  ISearchCityInput,
} from '@gmahechas/common-erp';

@InputType()
export class CreateCityInput implements ICreateCityInput {
  @Field() cityName: string;
  @Field() cityCode: string;
  @Field() estateId: string;
}

@InputType()
export class UpdateCityInput implements IUpdateCityInput {
  @Field() id: string;
  @Field({ nullable: true }) cityName: string;
  @Field({ nullable: true }) cityCode: string;
  @Field({ nullable: true }) estateId: string;
}

@InputType()
export class DeleteCityInput implements IDeleteCityInput {
  @Field() id: string;
}

@InputType()
export class SearchCityInput implements ISearchCityInput {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) cityName: string;
  @Field({ nullable: true }) cityCode: string;
  @Field({ nullable: true }) estateId: string;
}
