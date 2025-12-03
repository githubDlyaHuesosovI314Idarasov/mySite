import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MyContacts } from './my-contacts/my-contacts';
import { SwtichLanguage } from './swtich-language/swtich-language';
import { TranslatePipe, TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MyContacts, SwtichLanguage, TranslatePipe],
  standalone: true,
  template: `
  <div class="container-fluid">
      <div class="row bg-light">
        <div class="col-12">
            <div id="line" class="row mb-0 mt-4">
              <div class="ms-5 col col-1">
                <img class="myPhoto" src="" alt="My photo"/>              
              </div>
              <div class="col col-2">
                <h2>{{'HEADER.TITLE' | translate}}</h2>
                <h4>Fullstack/Backend Engineer</h4>
              </div>
              <div class="d-flex col-4 align-items-end">
                <a routerLink="" class="ms-2 me-2 pt-2 pb-2 rounded-top d-flex align-items-center justify-content-center">
                  {{'HEADER.ABOUT' | translate}}
                </a>
                <a routerLink="experience" class="ms-2 me-2 pt-2 pb-2 rounded-top d-flex align-items-center justify-content-center" style="width: 200px;">
                  {{'HEADER.EXPERIENCE' | translate}}
                </a>
                <a routerLink="portfolio" class="ms-2 me-2 pt-2 pb-2 rounded-top d-flex align-items-center justify-content-center">
                  {{'HEADER.PORTFOLIO' | translate}}
                </a>
              </div>
              <div class="d-flex col-1 ms-auto align-items-center">

                <input type="text" class="form-control" placeholder="Search by title" [disabled]=""/>
                <i class="bi bi-search"></i>
              </div>

              <div class="col-1 ms-auto">
                <app-swtich-language></app-swtich-language>
              </div>
            </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
          <div class="d-flex gap-3">
            <div class="content flex-grow-1" >
              <router-outlet/>
            </div>
            
            <div class="flex-shrink-0" style="width: 280px;">
              <app-my-contacts ></app-my-contacts>
            </div>
          </div>
      </div>
    </div>
  </div>
  
  `,
  styleUrl: './app.css',
})
export class App implements OnInit 
{
  private translate = inject(TranslateService);
  protected readonly title = signal('MySite');

  ngOnInit(): void {
    this.translate.addLangs(['en', 'ua']);

    const savedLang = localStorage.getItem('selectedLanguage');
    const browserLang = this.translate.getBrowserLang();

    const languageToUse = savedLang || (browserLang?.match(/en|ua/) ? browserLang : 'en');
    
    this.translate.use(languageToUse);
  }

}
