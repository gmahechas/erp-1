import { ObjectType, Field } from '@nestjs/graphql';

import { ICompany } from '@gmahechas/common-erp';

@ObjectType()
export class CompanyType implements ICompany {
  @Field() id: string;
  @Field() companyName: string;
  @Field() companyIdentification: string;
  @Field() companyKey: string;
  @Field() cityId: string;
}
