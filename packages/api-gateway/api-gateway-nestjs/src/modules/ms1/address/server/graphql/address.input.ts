import { InputType, Field } from '@nestjs/graphql';

import {
  ICreateAddressInput,
  IUpdateAddressInput,
  IDeleteAddressInput,
  ISearchAddressInput,
} from '@gmahechas/common-erp';

@InputType()
export class CreateAddressInput implements ICreateAddressInput {
  @Field() addressLine1: string;
  @Field() addressLine2: string;
  @Field() addressZipCode: string;
  @Field() cityId: string;
}

@InputType()
export class UpdateAddressInput implements IUpdateAddressInput {
  @Field() id: string;
  @Field({ nullable: true }) addressLine1: string;
  @Field({ nullable: true }) addressLine2: string;
  @Field({ nullable: true }) addressZipCode: string;
  @Field({ nullable: true }) cityId: string;
}

@InputType()
export class DeleteAddressInput implements IDeleteAddressInput {
  @Field() id: string;
}

@InputType()
export class SearchAddressInput implements ISearchAddressInput {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) addressLine1: string;
  @Field({ nullable: true }) addressLine2: string;
  @Field({ nullable: true }) addressZipCode: string;
  @Field({ nullable: true }) cityId: string;
}
