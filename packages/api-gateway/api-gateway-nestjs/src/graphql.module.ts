import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

import { CustomError } from '@gmahechas/common-erp';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      debug: false,
      formatError: (error: GraphQLError): any => {
        const originalError = error.originalError as CustomError;
        return originalError.serializeErrors();
      },
    }),
  ],
})
export class GraphqlModule {}
