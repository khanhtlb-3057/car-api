import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestExceptionFilter } from './common/filters/bad-request-exception.filter';
import { EntityNotFoundExceptionFilter } from './common/filters/entity-not-found-exception.filter';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { ValidationPipe } from './common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new LoggingInterceptor())
  app.useGlobalFilters(
    new HttpExceptionFilter(),
    new EntityNotFoundExceptionFilter(),
    new BadRequestExceptionFilter()
  )
  await app.listen(3000);
}
bootstrap();
