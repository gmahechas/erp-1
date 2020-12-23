import { InputType, Field } from '@nestjs/graphql';

import {
  ICreateMenuInput,
  IUpdateMenuInput,
  IDeleteMenuInput,
  ISearchMenuInput,
} from '@gmahechas/common-erp';

@InputType()
export class CreateMenuInput implements ICreateMenuInput {
  @Field() menuName: string;
  @Field() menuDescription: string;
  @Field() menuUri: string;
  @Field() menuOrder: number;
  @Field() menuIdParent: string;
}

@InputType()
export class UpdateMenuInput implements IUpdateMenuInput {
  @Field() id: string;
  @Field({ nullable: true }) menuName: string;
  @Field({ nullable: true }) menuDescription: string;
  @Field({ nullable: true }) menuUri: string;
  @Field({ nullable: true }) menuOrder: number;
  @Field({ nullable: true }) menuIdParent: string;
}

@InputType()
export class DeleteMenuInput implements IDeleteMenuInput {
  @Field() id: string;
}

@InputType()
export class SearchMenuInput implements ISearchMenuInput {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) menuName: string;
  @Field({ nullable: true }) menuDescription: string;
  @Field({ nullable: true }) menuUri: string;
  @Field({ nullable: true }) menuOrder: number;
  @Field({ nullable: true }) menuIdParent: string;
}
