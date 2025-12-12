import { Component, inject } from '@angular/core';
import { StackInfo } from '../stack-info';
import { StackInfoService } from '../stack-info-service';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  imports: [TranslateModule],
  template: `
  <div class="mt-4 mb-2">
    <h4> C#/.NET, ASP.NET Core, EntityFramework Core </h4>
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 90%">90%</div>
    </div>
  </div> 
  <div class="mb-2">
   <h4> HTML, CSS, Javascript, Typescript, Angular, Bootstrap </h4> 
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 80%">80%</div>
    </div>
  </div>
  <div class="mb-2">
   <h4> MS SQL Server, PostgreSQL, T-SQL</h4>
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 70%">70%</div>
    </div>
  </div>
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
