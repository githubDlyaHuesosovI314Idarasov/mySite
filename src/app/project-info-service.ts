import { Injectable } from '@angular/core';
import { ProjectInfo } from './project-info';

@Injectable({
  providedIn: 'root',
})
export class ProjectInfoService {

  url = "http://localhost:3000/projectList";

  async getAllProjects() : Promise<ProjectInfo[]>{
    const data = await fetch(this.url);
    return await data.json() ?? '';
  }
}
