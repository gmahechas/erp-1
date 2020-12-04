import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { AppModule } from '@ms1/app.module';
import config from '@ms1/utils/config';
import { ExceptionFilter } from '@gmahechas/common-erp-nestjs';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:'.concat(config.port),
        package: ['country', 'estate', 'city', 'address'],
        protoPath: join(
          __dirname,
          '../node_modules/@gmahechas/common-erp/src/modules/1/index.proto',
        ),
      },
    },
  );
  app.useGlobalFilters(new ExceptionFilter());
  await app.listenAsync();
  console.log(`MS1 is listening on port ${config.port}`);
}
bootstrap();
