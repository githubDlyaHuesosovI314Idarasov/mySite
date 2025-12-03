import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectInfoService } from '../project-info-service';
import { ProjectInfo } from '../project-info';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-fluid px-4 mt-4 mb-4">
      <div class="row mb-4">

        <div class="col-md-6">
          <div id="carouselExample" class="carousel slide  border border-secondary border-3" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img [src]="projectInfo?.primaryPhoto" class="d-block w-100" width="600" height="400" style="object-fit: cover;"/>  
              </div>

              @for(photo of projectInfo?.secondaryPhotosList; track $index) {
              <div class="carousel-item" data-bs-interval="2000">
                <img [src]="photo" class="d-block w-100" width="600" height="400" style="object-fit: cover;"/>
              </div>
              }

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="col">
          <h2>{{projectInfo?.title}}</h2>
          <div class="row mb-4 ">
            <h5>What stacks were used:</h5>
            @for(tag of projectInfo?.tags; track $index) {
              <span class="badge bg-primary m-1 w-auto"> {{tag}}</span>
            }
          </div>
          <div class="d-flex gap-2">
            @if(projectInfo?.liveDemoLink != "") {
              <div class="gap-2">
                <a class="btn btn-primary w-auto" [href]="projectInfo?.liveDemoLink" target="_blank">Live Demo</a>
              </div>
            }
            <div class="gap-2">
              <a class="btn btn-secondary w-auto" [href]="projectInfo?.sourceCodeLink" target="_blank">Source Code</a>
            </div>
            <!--
            <div class="col m-2">
              <a class="btn btn-secondary w-auto" routerLink="portfolio">Back to Portfolio</a>
            </div>
          -->
          </div>
        </div>

      </div>
    </div>
    
    <div class="row mb-4 ms-5">
      <div class="column">
        <p>{{projectInfo?.fullDescription}}</p>
      </div>
    </div>


  `,
  styleUrl: './details.css',
})
export class DetailsComponent {

  projectInfoService = inject(ProjectInfoService);
  route:ActivatedRoute = inject(ActivatedRoute);
  projectInfo:ProjectInfo | undefined;

  constructor() {
    const projectId = Number(this.route.snapshot.params['id']);
    this.projectInfoService.getProjectById(projectId).then(projectInfo => {
      this.projectInfo = projectInfo;
    })
  }
  
  
}
