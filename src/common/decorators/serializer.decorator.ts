import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { map, Observable } from "rxjs";

export function Serializer(value?: any) {
  return UseInterceptors(new SerializerInterceptor(value));
}

class SerializerInterceptor implements NestInterceptor {
  constructor(private value: any) {}
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(map( (data) =>  plainToInstance(this.value, data)))
  }
}
