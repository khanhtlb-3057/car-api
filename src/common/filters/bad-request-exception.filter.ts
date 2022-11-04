import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter } from "@nestjs/common";
import { ValidationError } from "class-validator";
import { commonError } from "../../errors/constants/common.constant";
import data from '../../errors/data';
import { Error } from "../types/error.type";

type Constraint = {
  constraint: string;
  property: string;
};

type ExceptionRes = {
  message: Constraint[];
};

type TargetConstructor = {
  resource: string;
};

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter<BadRequestException> {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const exceptionRes = exception.getResponse() as ExceptionRes | Error;
    const status = exception.getStatus();
    const errors: Error[] = [];

    if (exceptionRes.message){
      const messages = exceptionRes.message as ValidationError[];

      errors.push(
        ...messages.reduce((arr, { constraints, target, property }) => {
          const code = commonError[`${Object.keys(constraints)[0]}`];

          arr.push({
            resource: (target.constructor as unknown as TargetConstructor)
              .resource,
            field: property,
            code,
            message: data[code],
          });
          return arr;
        }, []),
      );
    } else {
      const { resource, field, code } = exceptionRes as Error;

      errors.push({
        resource,
        field,
        code,
        message: data[code],
      });
    }

    response.status(status).json({
      success: false,
      errors,
    });
  }
}
