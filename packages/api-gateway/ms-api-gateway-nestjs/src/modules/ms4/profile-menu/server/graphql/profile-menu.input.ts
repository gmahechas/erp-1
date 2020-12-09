import { InputType, Field } from '@nestjs/graphql';

import {
  ICreateProfileMenuInput,
  IUpdateProfileMenuInput,
  IDeleteProfileMenuInput,
  ISearchProfileMenuInput,
} from '@gmahechas/common-erp';

@InputType()
export class CreateProfileMenuInput implements ICreateProfileMenuInput {
  @Field() profileMenuStatus: boolean;
  @Field() menuId: string;
  @Field() profileId: string;
}

@InputType()
export class UpdateProfileMenuInput implements IUpdateProfileMenuInput {
  @Field() id: string;
  @Field({ nullable: true }) profileMenuStatus: boolean;
  @Field({ nullable: true }) menuId: string;
  @Field({ nullable: true }) profileId: string;
}

@InputType()
export class DeleteProfileMenuInput implements IDeleteProfileMenuInput {
  @Field() id: string;
}

@InputType()
export class SearchProfileMenuInput implements ISearchProfileMenuInput {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) profileMenuStatus: boolean;
  @Field({ nullable: true }) menuId: string;
  @Field({ nullable: true }) profileId: string;
}
