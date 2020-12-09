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
      context: ({ req, res }) => ({ req, res }),
      cors: {
        credentials: true,
        origin: true,
      },
    }),
  ],
})
export class GraphqlModule {}
