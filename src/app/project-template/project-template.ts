import { Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInfo } from '../project-info';
import { RouterModule, RouterLink } from '@angular/router';
@Component({
  selector: 'app-project-template',
  imports: [RouterModule, CommonModule, RouterLink],
  standalone: true,
  template: `
  <div class="container-fluid mb-4">
    <div class="card border border-secondary rouded">
      <div class="card-header border-secondary">
        <h2 class="card-title">
          <img class="border border-4 border-secondary rounded" [src]="projectInfo.photo" [width]="projectInfo.width" [height]="projectInfo.height"/> {{projectInfo.title}}
        </h2> 
      </div>
      <div class="card-body border-secondary">
        <div class="card-text">{{projectInfo.description}} here descriprion</div>
        <a [routerLink]="['/details', projectInfo.id]">Learn More</a>
      </div>
    </div>
  </div>
  `,
  styleUrl: './project-template.css',
})
export class ProjectTemplate {
  @Input() projectInfo!:ProjectInfo;

}
