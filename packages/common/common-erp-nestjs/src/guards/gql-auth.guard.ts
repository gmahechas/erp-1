import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { UnAuthenticatedError } from '@gmahechas/common-erp';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const gqlContext = GqlExecutionContext.create(context).getContext();
    if (!gqlContext.req.session.auth) {
      gqlContext.res.clearCookie('qid');
      throw new UnAuthenticatedError();
    }
    return true;
  }
}
