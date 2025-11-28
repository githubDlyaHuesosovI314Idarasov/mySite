import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, inject, provideAppInitializer } from '@angular/core';
import { RouterLink, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import {provideTranslateService, TranslateService, provideTranslateLoader} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from '@ngx-translate/http-loader';
import routes from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({prefix: '/assets/translations/', suffix: '.json'})

    }),
    provideAppInitializer(() => {
      const translate = inject(TranslateService);
      translate.use(translate.getBrowserLang() || "en")
    }),
    provideRouter(routes),

    
  ]
};
