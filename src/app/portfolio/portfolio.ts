import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTemplate } from "../project-template/project-template";
import { ProjectInfoService } from '../project-info-service';
import { ProjectInfo } from '../project-info';
import { SearchComponent } from "../search/search";

@Component({
  selector: 'app-portfolio',
  imports: [ProjectTemplate, CommonModule, SearchComponent],
  standalone: true,
  template: `
    <div class="me-5 mt-4 ms-5">
      <div class="row">
       <app-search (searchText)="filterProjects($event)"></app-search>
      </div>
    
      <div class="row">
        @for(projectInfo of filteredProjectList; track $index) {
          <div class="col-5 g-2">
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
  filteredProjectList: ProjectInfo[] = [];

  constructor() {
    this.projectInfoService.getAllProjects().then((list: ProjectInfo[]) => {
      this.projectList = list;
      this.filteredProjectList = list;
    });

  }
    
  filterProjects(searchText: string) {
    if (!searchText || searchText.trim() === '') {
      this.filteredProjectList = this.projectList;
      return;
    }

    this.filteredProjectList = this.projectList.filter(project =>
      project.title?.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  

}
