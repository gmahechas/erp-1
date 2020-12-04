import { DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import config from '@ms1/utils/config';

export const databasesModules: DynamicModule[] = [
  MongooseModule.forRootAsync({
    useFactory: async () => ({
      uri: config.mongodb_uri,
      user: config.mongodb_user,
      pass: config.mongodb_pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  }),
];
