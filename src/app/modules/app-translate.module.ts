import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';

import{TranslateCompiler, TranslateLoader, TranslateModule} from '@ngx-translate/core'
import{TranslateHttpLoader} from '@ngx-translate/http-loader'
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

//مسؤؤل يدور علي الملفات
// const httploaderFactory=(http:HttpClient)=>new TranslateHttpLoader(http, 'assets/i18n/', '.json')
const httploaderFactory=(http:HttpClient)=>new TranslateHttpLoader(http, "/assets/i18n/", '')

//This compiler expects ICU syntax and compiles the expressions with messageformat.js
const TranslateCompilerFactory=()=>new TranslateMessageFormatCompiler()


const translateLoader:Provider={
  provide:TranslateLoader,
  useFactory:httploaderFactory
  ,deps:[HttpClient]
}

const translateCompiler:Provider={
  provide:TranslateCompiler,
  useFactory:TranslateCompilerFactory

}
@NgModule()
export class AppTranslateModule { 


    static forRoot(): ModuleWithProviders<AppTranslateModule> {
return TranslateModule.forRoot({

  loader:translateLoader,
  compiler:translateCompiler
}
)
}
    static forChild(): ModuleWithProviders<AppTranslateModule> {
return TranslateModule.forRoot({

  loader:translateLoader,
  compiler:translateCompiler,
  isolate:false
}
)
}


}
