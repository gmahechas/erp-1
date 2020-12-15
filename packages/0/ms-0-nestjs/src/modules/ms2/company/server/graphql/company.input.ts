import { InputType, Field } from '@nestjs/graphql';

import {
  ICreateCompanyInput,
  IUpdateCompanyInput,
  IDeleteCompanyInput,
  ISearchCompanyInput,
} from '@gmahechas/common-erp';

@InputType()
export class CreateCompanyInput implements ICreateCompanyInput {
  @Field() companyName: string;
  @Field() companyIdentification: string;
  @Field() companyKey: string;
  @Field() cityId: string;
}

@InputType()
export class UpdateCompanyInput implements IUpdateCompanyInput {
  @Field() id: string;
  @Field({ nullable: true }) companyName: string;
  @Field({ nullable: true }) companyIdentification: string;
  @Field({ nullable: true }) companyKey: string;
  @Field({ nullable: true }) cityId: string;
}

@InputType()
export class DeleteCompanyInput implements IDeleteCompanyInput {
  @Field() id: string;
}

@InputType()
export class SearchCompanyInput implements ISearchCompanyInput {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) companyName: string;
  @Field({ nullable: true }) companyIdentification: string;
  @Field({ nullable: true }) companyKey: string;
  @Field({ nullable: true }) cityId: string;
}
