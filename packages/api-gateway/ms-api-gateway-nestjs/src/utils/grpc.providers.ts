import { Provider } from '@nestjs/common';

import {
  GRPC_AUTH_PACKAGE_NAME,
  GRPC_MS1_PACKAGE_NAME,
  GRPC_MS2_PACKAGE_NAME,
  GRPC_MS3_PACKAGE_NAME,
  GRPC_MS4_PACKAGE_NAME,
} from '@gmahechas/common-erp';

import { baseGrpc } from '@ms-api-gateway/utils/base.grpc';

export const grpcAuth: Provider = baseGrpc(GRPC_AUTH_PACKAGE_NAME, {
  options: {
    url: 'auth-service.auth-namespace.svc.cluster.local:50000',
    package: ['user', 'auth'],
    protoPath: 'auth/index.proto',
  },
});

export const grpcMs1: Provider = baseGrpc(GRPC_MS1_PACKAGE_NAME, {
  options: {
    url: 'ms1-service.ms1-namespace.svc.cluster.local:50001',
    package: ['country', 'estate', 'city', 'address'],
    protoPath: '1/index.proto',
  },
});

export const grpcMs2: Provider = baseGrpc(GRPC_MS2_PACKAGE_NAME, {
  options: {
    url: 'ms2-service.ms2-namespace.svc.cluster.local:50002',
    package: ['company', 'office'],
    protoPath: '2/index.proto',
  },
});

export const grpcMs3: Provider = baseGrpc(GRPC_MS3_PACKAGE_NAME, {
  options: {
    url: 'ms3-service.ms3-namespace.svc.cluster.local:50003',
    package: ['type_person', 'type_identification', 'person'],
    protoPath: '3/index.proto',
  },
});

export const grpcMs4: Provider = baseGrpc(GRPC_MS4_PACKAGE_NAME, {
  options: {
    url: 'ms4-service.ms4-namespace.svc.cluster.local:50004',
    package: ['menu', 'profile', 'profile_menu', 'user_profile'],
    protoPath: '4/index.proto',
  },
});
