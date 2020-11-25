import { Observable } from 'rxjs';

import { IAuthSigninRequest } from '../modules/auth/auth/auth.input';
import { IAuthSigninResponse } from '../modules/auth/auth/auth.interface';

export interface IAuthService {
  signin(data: IAuthSigninRequest): Observable<IAuthSigninResponse>;
}