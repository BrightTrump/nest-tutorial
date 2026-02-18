import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  log(message: any, context: string) {
    const entry = `${context}\t${message}`;
    
    super.log(message, context);
}

error(message: any, stackOrContext?: string | undefined) {
      const entry = `${stackOrContext}\t${message}`;
    super.error(message, stackOrContext) {

    };
  }
}
