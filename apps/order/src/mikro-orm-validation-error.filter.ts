import { ValidationError } from '@mikro-orm/core';

import {
  Catch,
  ExceptionFilter,
  UnprocessableEntityException,
} from 'framework/dist/nestjs/common';
import { throwError } from 'framework/dist/rxjs';

@Catch(ValidationError)
export class MikroOrmValidationErrorFilter implements ExceptionFilter {
  catch(exception: ValidationError) {
    return throwError(
      () => new UnprocessableEntityException(exception.message),
    );
  }
}
