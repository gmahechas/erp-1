import { ObjectType, Field } from '@nestjs/graphql';

import { ICountry } from '@gmahechas/common-erp';

@ObjectType()
export class CountryType implements ICountry {
  @Field() id: string;
  @Field() countryName: string;
  @Field() countryCode: string;
}
