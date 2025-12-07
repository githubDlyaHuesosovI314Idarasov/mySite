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
            <a [routerLink]="['/details', projectInfo.id]">
            <img class="border border-4 border-secondary rounded" [src]="projectInfo.primaryPhoto" [width]="projectInfo.width" [height]="projectInfo.height"/> 
            </a>
          </div>
          <div class="flex-grow-1"> 
            <h2 class="card-tile">
            {{projectInfo.title}}
            </h2>
            <div class="row card-text">
              @for(tag of projectInfo.tags; track projectInfo.id) {
                <span class="badge bg-primary m-1 w-auto"> {{tag}}</span>
              }
            </div>

            
          </div>
        </div>
      </div>

      <div class="card-body border-secondary">
          <div class="card-text">{{projectInfo.shortDescription}}</div>
          Want to know more?
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
