import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, } from '@ngx-translate/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {

    //here we put (.json) and we delete from  const httploaderFactory=(http:HttpClient)=>new TranslateHttpLoader(http, "/assets/i18n/", '')
  this.translateFromServices.setDefaultLang("en.json")

}
  title = 'NGX-Translate';
  translateFromServices=inject(TranslationService)

}
