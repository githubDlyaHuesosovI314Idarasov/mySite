import { Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInfo } from '../project-info';
import { RouterModule, RouterLink } from '@angular/router';
@Component({
  selector: 'app-project-template',
  imports: [RouterModule, CommonModule],
  standalone: true,
  template: `
  <div class="container-fluid mb-4">
    <div class="card border border-secondary rouded">
      <div class="card-header border-secondary">
        <img [src]="projectInfo.photo", [width]="projectInfo.width" [height]="projectInfo.height"/> 
        <h3 class="card-title">{{projectInfo.title}}</h3> 
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
