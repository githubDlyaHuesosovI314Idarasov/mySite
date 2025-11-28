import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-description',
  imports: [TranslateModule],
  template: `
  <div class="ms-5 mt-4 me-5">
      {{'ABOUT.DESCRIPTION' | translate}}
    <p>
      {{'ABOUT.EXPERIENCE' | translate}}
    </p>
    <p>
      {{'ABOUT.HOBBIES' | translate}}
    </p>
  </div>
  `,
  styleUrl: './description.css',
})
export class Description {

}
