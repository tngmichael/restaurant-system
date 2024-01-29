import { Response } from 'express';

import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from 'framework/dist/nestjs/common';

@Catch()
export class InternalServerErrorFilter implements ExceptionFilter {
  private readonly logger = new Logger(InternalServerErrorFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    this.logger.error(`statusCode:${status} error:${exception.message}`);

    response.status(status).json({
      statusCode: status,
      message: exception.message,
      error: HttpStatus[status],
    });
  }
}
