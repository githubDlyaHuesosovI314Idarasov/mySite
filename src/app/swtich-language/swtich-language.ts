import { Component, inject } from '@angular/core';
import { TranslateService, } from '@ngx-translate/core';

@Component({
  selector: 'app-swtich-language',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <div class="flags">
        <button class="first" [class.active]="currentLanguage === 'en'" (click)="useLanguage('en')">
          <img src="/assets/flags/us.svg" class="flag" alt="Engligh"/>
        </button>
        <button class="second" [class.active]="currentLanguage === 'ua'" (click)="useLanguage('ua')">
          <img src="/assets/flags/ua.svg" class="flag" alt="Ukranian"/>
        </button>
      </div>
    </div>
  `,
  styleUrl: './swtich-language.css',
})
export class SwtichLanguage {
  private translate = inject(TranslateService);
  currentLanguage: string | null = '';

  useLanguage(language: string): void {
    localStorage.setItem('selectedLanguage', language);
    this.currentLanguage = localStorage.getItem('selectedLanguage');
    this.translate.use(language);
  }
}