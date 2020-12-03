import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import redis from '@api-gateway-nestjs/utils/database.modules';

import { HttpExceptionFilter } from '@gmahechas/common-erp-nestjs';

import { AppModule } from '@api-gateway-nestjs/app.module';

import config from '@api-gateway-nestjs/utils/config';

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
