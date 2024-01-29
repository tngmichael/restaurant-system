import { Response } from 'express';

import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from 'framework/dist/nestjs/common';

@Catch(BadRequestException)
export class ValidationExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(ValidationExceptionFilter.name);

  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const errors = (exception.getResponse() as any)?.message || [];

    this.logger.error(`statusCode:${status} error:${exception.message}`);

    response.status(status).json({
      statusCode: status,
      message: 'Validation failed',
      error: HttpStatus[status],
      errors,
    });
  }
}
