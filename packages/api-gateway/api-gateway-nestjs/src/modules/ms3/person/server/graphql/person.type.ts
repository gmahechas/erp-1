import { ObjectType, Field } from '@nestjs/graphql';

import { IPerson } from '@gmahechas/common-erp';

@ObjectType()
export class PersonType implements IPerson {
  @Field() id: string;
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
