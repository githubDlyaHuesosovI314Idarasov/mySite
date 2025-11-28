import { Component, inject } from '@angular/core';
import { StackInfo } from '../stack-info';
import { Description } from "../description/description";
import { StackInfoService } from '../stack-info-service';

@Component({
  selector: 'app-about-me',
  imports: [Description],
  template: `
      <app-description><app-description>

  `,
  styleUrl: './about-me.css',
})
export class AboutMeComponent {

}
