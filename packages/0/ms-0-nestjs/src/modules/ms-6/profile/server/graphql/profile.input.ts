import { InputType, Field } from '@nestjs/graphql';

import {
  ICreateProfileInput,
  IUpdateProfileInput,
  IDeleteProfileInput,
  ISearchProfileInput,
} from '@gmahechas/common-erp';

@InputType()
export class CreateProfileInput implements ICreateProfileInput {
  @Field() profileName: string;
  @Field() profileDescription: string;
}

@InputType()
export class UpdateProfileInput implements IUpdateProfileInput {
  @Field() id: string;
  @Field({ nullable: true }) profileName: string;
  @Field({ nullable: true }) profileDescription: string;
}

@InputType()
export class DeleteProfileInput implements IDeleteProfileInput {
  @Field() id: string;
}

@InputType()
export class SearchProfileInput implements ISearchProfileInput {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) profileName: string;
  @Field({ nullable: true }) profileDescription: string;
}
