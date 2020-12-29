import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { AppModule } from '@ms-6/app.module';
import config from '@ms-6/utils/config';
import { ExceptionFilter } from '@gmahechas/common-erp-nestjs';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:'.concat(config.port),
        package: ['menu', 'profile', 'profile_menu', 'user_profile'],
        protoPath: join(
          __dirname,
          '../node_modules/@gmahechas/common-erp/src/modules/6/index.proto',
        ),
      },
    },
  );
  app.useGlobalFilters(new ExceptionFilter());
  await app.listenAsync();
  console.log(`MS-6 is listening on port ${config.port}`);
}
bootstrap();
