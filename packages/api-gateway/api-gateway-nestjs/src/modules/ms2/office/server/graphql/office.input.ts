import { InputType, Field } from '@nestjs/graphql';

import {
  ICreateOfficeInput,
  IUpdateOfficeInput,
  IDeleteOfficeInput,
  ISearchOfficeInput,
} from '@gmahechas/common-erp';

@InputType()
export class CreateOfficeInput implements ICreateOfficeInput {
  @Field() officeName: string;
  @Field() companyId: string;
}

@InputType()
export class UpdateOfficeInput implements IUpdateOfficeInput {
  @Field() id: string;
  @Field({ nullable: true }) officeName: string;
  @Field({ nullable: true }) companyId: string;
}

@InputType()
export class DeleteOfficeInput implements IDeleteOfficeInput {
  @Field() id: string;
}

@InputType()
export class SearchOfficeInput implements ISearchOfficeInput {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) officeName: string;
  @Field({ nullable: true }) companyId: string;
}
