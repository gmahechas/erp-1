import { Observable } from 'rxjs';

import { IAuthSigninRequest } from '../modules/1/auth/auth.input';
import { IAuthSigninResponse } from '../modules/1/auth/auth.interface';

export interface IAuthService {
  signin(data: IAuthSigninRequest): Observable<IAuthSigninResponse>;
}