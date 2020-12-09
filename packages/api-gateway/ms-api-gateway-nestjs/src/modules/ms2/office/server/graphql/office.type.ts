import { ObjectType, Field } from '@nestjs/graphql';

import { IOffice } from '@gmahechas/common-erp';

@ObjectType()
export class OfficeType implements IOffice {
  @Field() id: string;
  @Field() officeName: string;
  @Field() companyId: string;
}
