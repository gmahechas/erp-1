import { InputType, Field } from '@nestjs/graphql';

import {
  ICreateUserInput,
  IUpdateUserInput,
  IDeleteUserInput,
  ISearchUserInput,
} from '@gmahechas/common-erp';

@InputType()
export class CreateUserInput implements ICreateUserInput {
  @Field() userName: string;
  @Field() userPassword: string;
  @Field() personId: string;
}

@InputType()
export class UpdateUserInput implements IUpdateUserInput {
  @Field() id: string;
  @Field({ nullable: true }) userName: string;
  @Field({ nullable: true }) userPassword: string;
  @Field({ nullable: true }) personId: string;
}

@InputType()
export class DeleteUserInput implements IDeleteUserInput {
  @Field() id: string;
}

@InputType()
export class SearchUserInput implements ISearchUserInput {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) userName: string;
  @Field({ nullable: true }) personId: string;
}
