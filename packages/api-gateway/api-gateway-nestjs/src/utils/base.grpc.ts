import { Provider } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  GrpcOptions,
} from '@nestjs/microservices';
import { join } from 'path';

export const baseGrpc = (
  provide: string,
  { options }: GrpcOptions,
): Provider => ({
  provide,
  useFactory: (): ClientProxyFactory => {
    return ClientProxyFactory.create({
      transport: Transport.GRPC,
      options: {
        ...options,
        loader: {
          keepCase: true,
          longs: String,
          enums: String,
          defaults: true,
          oneofs: true,
        },
        protoPath: join(
          __dirname,
          '../../node_modules/@gmahechas/common-erp/src/modules/',
          options.protoPath.toString(),
        ),
      },
    });
  },
});
