import { Module } from '@nestjs/common';
import { I18nModule, AcceptLanguageResolver } from 'nestjs-i18n';
import path from 'path';

import { appConstant } from './common/constants/app.constant';
import { I18nCustomLoader } from './i18n/i18n-custom-loader';

@Module({
  imports: [
    I18nModule.forRootAsync({
      useFactory: () => ({
        fallbackLanguage: appConstant.fallbackLanguage,
        fallbacks: appConstant.fallbacks,
        loaderOptions: {
          path: path.join(__dirname, appConstant.i18nDirectory),
          watch: true,
        }
      }),
      resolvers: [AcceptLanguageResolver],
      loader: I18nCustomLoader,
    }),
  ],
})
export class I18nNestModule {}
