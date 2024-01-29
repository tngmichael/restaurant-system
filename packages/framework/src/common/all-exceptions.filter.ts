import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  catch(exception: unknown, host: ArgumentsHost) {
    // do your magic
  }
}
