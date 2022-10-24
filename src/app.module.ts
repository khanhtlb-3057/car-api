import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmAsyncConfig } from './config/database/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmAsyncConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
