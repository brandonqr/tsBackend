import { CustomError } from 'errors/customError';


export class GenericError extends CustomError {


  constructor(private reason: string, public statusCode: number) {
    super('Generic error');

    Object.setPrototypeOf(this, GenericError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}

