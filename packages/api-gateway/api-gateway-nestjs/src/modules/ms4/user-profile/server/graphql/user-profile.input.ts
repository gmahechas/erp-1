import { InputType, Field } from '@nestjs/graphql';

import {
  ICreateUserProfileInput,
  IUpdateUserProfileInput,
  IDeleteUserProfileInput,
  ISearchUserProfileInput,
} from '@gmahechas/common-erp';

@InputType()
export class CreateUserProfileInput implements ICreateUserProfileInput {
  @Field() userProfileStatus: boolean;
  @Field() userId: string;
  @Field() profileId: string;
}

@InputType()
export class UpdateUserProfileInput implements IUpdateUserProfileInput {
  @Field() id: string;
  @Field({ nullable: true }) userProfileStatus: boolean;
  @Field({ nullable: true }) userId: string;
  @Field({ nullable: true }) profileId: string;
}

@InputType()
export class DeleteUserProfileInput implements IDeleteUserProfileInput {
  @Field() id: string;
}

@InputType()
export class SearchUserProfileInput implements ISearchUserProfileInput {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) userProfileStatus: boolean;
  @Field({ nullable: true }) userId: string;
  @Field({ nullable: true }) profileId: string;
}
