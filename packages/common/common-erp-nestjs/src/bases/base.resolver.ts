import { Type } from '@nestjs/common';
import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';

import { IEntityServicePromise, JoiSchema } from '@gmahechas/common-erp';

import { GraphqlValidationPipe } from '../pipes/graphql-validation.pipe';

export function BaseResolver<A, B, C, D, E>(
  typeRef: Type<A>,
  createRef: B,
  updateRef: C,
  deleteRef: D,
  searchRef: E,
  entityName: string,
  schemaValidation: JoiSchema
): any {

  @Resolver()
  abstract class BaseResolverHost {
    constructor(
      private readonly entityService: IEntityServicePromise<A, B, C, D, E>,
    ) { }

    @Mutation(() => typeRef, { name: `createOne${entityName}`, nullable: true })
    async createOne(
      @Args('entity', { type: () => createRef }, new GraphqlValidationPipe(schemaValidation.createOne))
      entity: B,
    ): Promise<Partial<A | null>> {
      return (await this.entityService.createOne({ entity })).entity;
    }

    @Mutation(() => typeRef, { name: `updateOne${entityName}`, nullable: true })
    async updateOne(
      @Args('entity', { type: () => updateRef }, new GraphqlValidationPipe(schemaValidation.updateOne))
      entity: C,
    ): Promise<Partial<A | null>> {
      return (await this.entityService.updateOne({ entity })).entity;
    }

    @Mutation(() => typeRef, { name: `deleteOne${entityName}`, nullable: true })
    async deleteOne(
      @Args('entity', { type: () => deleteRef }, new GraphqlValidationPipe(schemaValidation.deleteOne))
      entity: D,
    ): Promise<Partial<A | null>> {
      return (await this.entityService.deleteOne({ entity })).entity;
    }

    @Query(() => typeRef, { name: `searchOne${entityName}`, nullable: true })
    async searchOne(
      @Args('entity', { type: () => searchRef }, new GraphqlValidationPipe(schemaValidation.searchOne)) entity: E,
    ): Promise<Partial<A | null>> {
      return (await this.entityService.searchOne({ entity })).entity;
    }

    @Query(() => [typeRef], { name: `searchMany${entityName}`, nullable: true })
    async searchMany(
      @Args('entities', { type: () => [searchRef] }, new GraphqlValidationPipe(schemaValidation.searchMany))
      entities: [E],
    ): Promise<Partial<A>[] | null> {
      return (await this.entityService.searchMany({ entities })).entities;
    }
  }

  return BaseResolverHost;
}