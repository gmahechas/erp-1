import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { logger } from '@gmahechas/common-erp';
import { ExceptionFilter } from '@gmahechas/common-erp-nestjs';

import { AppModule } from '@ms-1/app.module';
import config from '@ms-1/utils/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:'.concat(config.port),
        package: ['user', 'auth'],
        protoPath: join(
          __dirname,
          '../node_modules/@gmahechas/common-erp/src/modules/1/index.proto',
        ),
      },
    },
  );
  app.useGlobalFilters(new ExceptionFilter());
  await app.listenAsync();
  logger.debug(`MS-1 is listening on port ${config.port}`);
}
bootstrap();
