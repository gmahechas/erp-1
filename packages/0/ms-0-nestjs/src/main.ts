import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import redis from '@ms-0/utils/redis';

import { logger } from '@gmahechas/common-erp';
import { HttpExceptionFilter } from '@gmahechas/common-erp-nestjs';

import { AppModule } from '@ms-0/app.module';
import config from '@ms-0/utils/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'warn', 'debug', 'verbose'],
  });
  app.set('trust proxy', 1);
  app.use(redis);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(config.port, () =>
    logger.debug(`MS-0 is listening on port ${config.port}`),
  );
}
bootstrap();
