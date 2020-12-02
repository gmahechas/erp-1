import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as fs from 'fs';

import { HttpExceptionFilter } from '@gmahechas/common-erp-nestjs';

import { AppModule } from '@api-gateway-nestjs/app.module';

import config from '@api-gateway-nestjs/utils/config';

async function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const httpsOptions = {
    key: fs.readFileSync(__dirname + '/../src/utils/ssl/key.pem'),
    cert: fs.readFileSync(__dirname + '/../src/utils/ssl/cert.pem'),
    passphrase: 'Analu',
  };
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('trust proxy', 1);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(config.port, () =>
    console.log(`ApiGateway is listening on port ${config.port}`),
  );
}
bootstrap();
