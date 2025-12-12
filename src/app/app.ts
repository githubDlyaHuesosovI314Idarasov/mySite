import { Component, inject, OnInit, signal} from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd} from '@angular/router';
import { MyContacts } from './my-contacts/my-contacts';
import { SwtichLanguage } from './swtich-language/swtich-language';
import { TranslatePipe, TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MyContacts, SwtichLanguage, TranslatePipe],
  standalone: true,
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border-5 pt-2">
    <div class="container-fluid">

      <div class="navbar-header d-flex justify-content-start">
        <div class="flex-row p-2">
          <img class="myPhoto" src="" alt="My photo"/>
        </div>
        <div class="flex-row p-2">
          <div class="flex-column">
            <h2>{{'HEADER.TITLE' | translate}}</h2>
          </div>
          <div class="flex-columm">
            <h4>Fullstack/Backend Engineer</h4>
          </div>
        </div>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav me-auto mb-lg-0 flex-row"> 
            <li class="nav-item p-2">
              <a routerLink="" class="nav-link rounded-top align-items-center justify-content-center">
                {{'HEADER.ABOUT' | translate}}
              </a>
            </li>
            <li class="nav-item p-2">
              <a routerLink="experience" class="nav-link rounded-top w-auto">
                My skills & stacks <!-- {{'HEADER.EXPERIENCE' | translate}} -->
              </a>
            </li>
            <li class="nav-item p-2">
              <a routerLink="portfolio" class="nav-link rounded-top align-items-center justify-content-center">
                {{'HEADER.PORTFOLIO' | translate}}
              </a>
            </li>
            <li class="nav-item ms-auto p-2">
              <app-swtich-language></app-swtich-language>
            </li>
          </ul>
       </div>

    </div>
  </nav>

  <div class="d-flex flex-row">
    <div class="flex-col">
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
