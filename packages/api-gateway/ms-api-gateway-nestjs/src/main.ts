import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import redis from '@ms-api-gateway/utils/redis';

import { HttpExceptionFilter } from '@gmahechas/common-erp-nestjs';

import { AppModule } from '@ms-api-gateway/app.module';

import config from '@ms-api-gateway/utils/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('trust proxy', 1);
  app.use(redis);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(config.port, () =>
    console.log(`ApiGateway is listening on port ${config.port}`),
  );
}
bootstrap();
