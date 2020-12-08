import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GRPC_MENU_SERVICE_NAME } from '@gmahechas/common-erp';

import { menuSchema } from '@ms4/modules/menu//client/mongodb/menu.schema';
import { MenuGrpcController } from '@ms4/modules/menu/server/grpc/menu-grpc.controller';
import { MenuMongodbService } from '@ms4/modules/menu/client/mongodb/menu-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'menu',
        name: GRPC_MENU_SERVICE_NAME,
        schema: menuSchema,
      },
    ]),
  ],
  controllers: [MenuGrpcController],
  providers: [MenuMongodbService],
})
export class MenuModule {}
