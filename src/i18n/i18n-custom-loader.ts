import { I18nLoader, I18nTranslation } from 'nestjs-i18n';
import { Observable } from 'rxjs';

import { appConstant } from '../common/constants/app.constant';
import en from './en';
import vi from './vi';

export class I18nCustomLoader extends I18nLoader {
  async languages(): Promise<string[] | Observable<string[]>> {
    return appConstant.languages;
  }

  async load(): Promise<I18nTranslation | Observable<I18nTranslation>> {
    return {
      en: en,
      vi: vi,
    } as I18nTranslation
  }
}
