import { Component, inject } from '@angular/core';
import { StackInfo } from '../stack-info';
import { StackInfoService } from '../stack-info-service';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  imports: [TranslateModule],
  template: `
    <div class="ms-5 mt-4">
      {{'EXPERIENCE.DESCRIPTION' | translate}}. 
      <p>
        {{'EXPERIENCE.COMMENT' | translate }}
      </p>
    </div>
    <div class="ms-5">
        <ul>
          {{'EXPERIENCE.PRIMARYSTACKS' | translate}}
          @for (stackInfo of primaryStackInfoList; track $index) {
          <li>
          <img [src]="stackInfo.photo" [width]="stackInfo.width" height="40"/>
          {{stackInfo.name}}
          </li>
          }
        </ul>
        <ul>
          {{'EXPERIENCE.SECONDARYSTACKS' | translate}}
          @for (stackInfo of secondaryStackInfoList; track $index) {
          <li>
          <img [src]="stackInfo.photo" [width]="stackInfo.width" height="40"/>
          {{stackInfo.name}}
          </li>
          }
        </ul>
      </div>
  `,
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  stackInfoService: StackInfoService = inject(StackInfoService);
  primaryStackInfoList: StackInfo[] = [];
  secondaryStackInfoList: StackInfo[] = [];

  constructor() {
      this.stackInfoService.getPrimaryStackList().then((list: StackInfo[] ) => {
        this.primaryStackInfoList = list;
      });

      this.stackInfoService.getSecondaryStackList().then((list: StackInfo[]) => {
        this.secondaryStackInfoList = list;
      });
    
  }
}
