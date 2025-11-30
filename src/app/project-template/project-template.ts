import { Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInfo } from '../project-info';
import { RouterModule, RouterLink } from '@angular/router';
@Component({
  selector: 'app-project-template',
  imports: [RouterModule, CommonModule, RouterLink],
  standalone: true,
  template: `
  <div class="container mb-4">
    <div class="card border border-secondary rouded">

      <div class="card-header border-secondary">
        <div class="d-flex gap-3 align-items-start">
          <div class="flex-shrink-0">
            <img class="border border-4 border-secondary rounded" [src]="projectInfo.photo" [width]="projectInfo.width" [height]="projectInfo.height"/> 
          </div>
          <div class="flex-grow-1"> 
            <h2 class="card-tile">
            {{projectInfo.title}}
            </h2>
            <div class="row card-text">
              Tags here:
            </div>
          </div>
        </div>
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
