import { InputType, Field } from '@nestjs/graphql';

import {
  ICreatePersonInput,
  IUpdatePersonInput,
  IDeletePersonInput,
  ISearchPersonInput,
} from '@gmahechas/common-erp';

@InputType()
export class CreatePersonInput implements ICreatePersonInput {
  @Field() personIdentification: string;
  @Field({ nullable: true }) personFirstName: string;
  @Field({ nullable: true }) personSecondName: string;
  @Field({ nullable: true }) personFirstSurname: string;
  @Field({ nullable: true }) personSecondSurname: string;
  @Field({ nullable: true }) personCompanyName: string;
  @Field() companyId: string;
  @Field() typePersonId: string;
  @Field() typeIdentificationId: string;
}

@InputType()
export class UpdatePersonInput implements IUpdatePersonInput {
  @Field() id: string;
  @Field() personIdentification: string;
  @Field({ nullable: true }) personFirstName: string;
  @Field({ nullable: true }) personSecondName: string;
  @Field({ nullable: true }) personFirstSurname: string;
  @Field({ nullable: true }) personSecondSurname: string;
  @Field({ nullable: true }) personCompanyName: string;
  @Field({ nullable: true }) typePersonId: string;
  @Field({ nullable: true }) typeIdentificationId: string;
}

@InputType()
export class DeletePersonInput implements IDeletePersonInput {
  @Field() id: string;
}

@InputType()
export class SearchPersonInput implements ISearchPersonInput {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) personIdentification: string;
  @Field({ nullable: true }) personFirstName: string;
  @Field({ nullable: true }) personSecondName: string;
  @Field({ nullable: true }) personFirstSurname: string;
  @Field({ nullable: true }) personSecondSurname: string;
  @Field({ nullable: true }) personCompanyName: string;
  @Field({ nullable: true }) companyId: string;
  @Field({ nullable: true }) typePersonId: string;
  @Field({ nullable: true }) typeIdentificationId: string;
}
