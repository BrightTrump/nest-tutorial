import { HttpException, HttpStatus, Logger } from '@nestjs/common';

export class DatabaseException extends HttpException {
  constructor(error: Error, status?: HttpStatus) {
    super(
      {
        message: 'Database error',
        error: error.message,
        statusCode: status || HttpStatus.INTERNAL_SERVER_ERROR,
      },
      status || HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}

export class AccessDeniedException extends HttpException {
  constructor(message?: string) {
    super(
      message || 'You do not have permission to access this resource.',
      HttpStatus.FORBIDDEN,
    );
  }
}

export class NotFoundException extends HttpException {
  constructor(message?: string) {
    super(message || 'User not found', HttpStatus.NOT_FOUND);
  }
}

export class InValidOTPException extends HttpException {
  constructor(message?: string) {
    super(
      message || 'Invalid or expired verification code try again later',
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class InSufficientFundException extends HttpException {
  constructor(message?: string) {
    super(
      message ||
        'Insufficient balance fund wallet to continue with this transaction',
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class ExceedStorageException extends HttpException {
  constructor(message?: string) {
    super(message || '', HttpStatus.INSUFFICIENT_STORAGE);
  }
}

export class CatchErrorException {
  private readonly logger = new Logger(CatchErrorException.name);
  constructor(error: Error) {
    throw error;
  }
}

export class BadRequestException extends HttpException {
  constructor(msg: string) {
    super(msg || 'Bad Request', HttpStatus.BAD_REQUEST);
  }
}

export class ConflictRequestException extends HttpException {
  constructor(msg: string) {
    super(msg || 'Bad Request', HttpStatus.CONFLICT);
  }
}
