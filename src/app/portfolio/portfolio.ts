import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTemplate } from "../project-template/project-template";
import { ProjectInfoService } from '../project-info-service';
import { ProjectInfo } from '../project-info';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectTemplate, CommonModule],
  standalone: true,
  template: `
    <div class="me-5 mt-4 ms-5">
      <div class="row">
        @for(projectInfo of projectList; track $index) {
          <div class="col-5 ms-5 me-5">
          <app-project-template [projectInfo]="projectInfo" > </app-project-template>
          </div>
        }
      </div>
    </div>
  `,
  styleUrl: './portfolio.css',
})
export class PortfolioComponent {

  projectInfoService = inject(ProjectInfoService);
  projectList: ProjectInfo[] = [];

  constructor() {
    this.projectInfoService.getAllProjects().then((list: ProjectInfo[]) => {
      this.projectList = list;
    });
    
  }
  
}
