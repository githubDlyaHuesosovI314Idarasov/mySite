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
      @for( projectInfo of projectList; track projectInfo){
        <app-project-template [projectInfo]="projectInfo"> </app-project-template>
      }

    </div>
  `,
  styleUrl: './portfolio.css',
})
export class PortfolioComponent {

  projectInfoService = inject(ProjectInfoService);
  projectList: ProjectInfo[] = [];

  constructor() {
    this.projectInfoService.getAllProjects().then((projectList: ProjectInfo[]) => {
      this.projectList = projectList;
    });
    
  }
  
}
