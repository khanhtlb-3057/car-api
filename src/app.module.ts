import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { I18nNestModule } from './i18n-nest.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmAsyncConfig } from './config/database/typeorm.config';
import { UsersModule } from './users/users.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    // TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    // UsersModule,
    // I18nNestModule,
  ],
  // controllers: [AppController],
  providers: [AppGateway],
})
export class AppModule {}
