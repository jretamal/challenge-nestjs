import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
        const responseObj = exceptionResponse as Record<string, unknown>;
        const messageVal = responseObj.message;
        if (messageVal) {
          if (Array.isArray(messageVal)) {
            message = messageVal.join(', ');
          } else {
            message =
              typeof messageVal === 'string'
                ? messageVal
                : JSON.stringify(messageVal);
          }
        } else {
          message = exception.message;
        }
      } else {
        message =
          typeof exceptionResponse === 'string'
            ? exceptionResponse
            : JSON.stringify(exceptionResponse);
      }
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    // Log the error
    this.logger.error(
      `HTTP Status: ${status} Error Message: ${JSON.stringify(message)} Path: ${request.url}`,
    );

    // Return structured JSON error response
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message:
        status === HttpStatus.NOT_FOUND
          ? `Ruta inexistente: ${request.url}`
          : message,
    });
  }
}
