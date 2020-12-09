import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { AppModule } from '@ms-2/app.module';
import config from '@ms-2/utils/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:'.concat(config.port),
        package: ['company', 'office'],
        protoPath: join(
          __dirname,
          '../node_modules/@gmahechas/common-erp/src/modules/2/index.proto',
        ),
      },
    },
  );
  await app.listen(() =>
    console.log(`MS2 is listening on port ${config.port}`),
  );
}
bootstrap();
