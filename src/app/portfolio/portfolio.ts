import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTemplate } from "../project-template/project-template";
import { ProjectInfoService } from '../project-info-service';
import { ProjectInfo } from '../project-info';
import { SearchComponent } from "../search/search";
import { SearchCriteria } from '../search-criteria';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectTemplate, CommonModule, SearchComponent],
  standalone: true,
  template: `
    <div class="me-5 mt-4 ms-5">
      <div class="row">
       <app-search (searchCriteria)="filterProjects($event)"></app-search>
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
    
  filterProjects(criteria: SearchCriteria) {
    const searchText = criteria.text.trim().toLowerCase();
    const searchTags = criteria.tags;

    if (searchText === '' && searchTags.length === 0) {
      this.filteredProjectList = this.projectList;
      return;
    }

    this.filteredProjectList = this.projectList.filter(project => {
      const matchesText = searchText === '' || 
        project.title?.toLowerCase().includes(searchText);

      const matchesTags = searchTags.length === 0 || 
        searchTags.every(tag => project.tags?.includes(tag));

      return matchesText && matchesTags;
    });
  }
  

}
