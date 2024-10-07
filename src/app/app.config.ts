import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AppTranslateModule } from './modules/app-translate.module';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)
    //import translate module
,importProvidersFrom(AppTranslateModule.forRoot())
//add httpclient module
,importProvidersFrom(HttpClientModule)


  ]
};


//note:don`t forget to import TranslateModule to any ary of imports[]