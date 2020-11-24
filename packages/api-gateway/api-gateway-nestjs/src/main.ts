import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';

import { AppModule } from '@api-gateway-nestjs/app.module';

import config from '@api-gateway-nestjs/utils/config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const httpsOptions = {
    key: fs.readFileSync(__dirname + '/../src/utils/ssl/key.pem'),
    cert: fs.readFileSync(__dirname + '/../src/utils/ssl/cert.pem'),
    passphrase: 'Analu',
  };
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.set('trust proxy', 1);
  await app.listen(config.port, () =>
    console.log(`ApiGateway is listening on port ${config.port}`),
  );
}
bootstrap();
