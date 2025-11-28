import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-my-contacts',
  imports: [TranslateModule],
  template: `
    <div class="container mt-4">
      <h5>{{'CONTACT.TITLE' | translate}}</h5>
      <div class="container info">
        <ul class="list-unstyled">
          <li class="mb-2 d-flex align-items-center gap-2">
            <a href="https://github.com/githubDlyaHuesosovI314Idarasov">
            <img src="assets/githubIcon.svg" width="20" height="20"/>  
            {{'CONTACT.GITHUB' | translate}}
            </a>
          </li>
          <li class="mb-2 d-flex align-items-center gap-2">
            <a href="https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D0%B8%D0%B9-%D0%B4%D0%B5%D1%80%D1%8F%D0%B3%D0%B0-69a27b351/">
            <img src="assets/linkedInIcon.svg" alt="linkedIn" width="20" height="20"/>  
            {{'CONTACT.LINKEDIN' | translate}}
            </a>
          </li>
          <li class="mb-2 d-flex align-items-center gap-2">
            <a href="https://t.me/TheAirline">
            <img src="assets/telegramIcon.svg" width="20" height="20"/>  
            {{'CONTACT.TELEGRAM' | translate}}
            </a>
          </li>
          <li class="mb-2 d-flex align-items-center gap-2">
            <img src="assets/mailIcon.svg" width="20" height="20"/>
            anatolijderaga@gmail.com
          </li>
          <li class="mb-2 d-flex align-items-center gap-2">
            <img src="assets/phoneIcon.svg" width="20" height="20"/>
            +380 68 573 15 78
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrl: './my-contacts.css',
})
export class MyContacts {

}
