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

  async getProjectById(id: number) : Promise<ProjectInfo | undefined>{
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  async getAllTags() : Promise<Map<string,number>>{ 
    const projects = await this.getAllProjects();
    const tagsSet = new Set<string>();

    const map = new Map<string, number>();

    projects.forEach(project => {
      project.tags?.forEach(tag => {
        tagsSet.add(tag);
      });
    });

    tagsSet.forEach(tag => {
      map.set(tag, (map.get(tag) || 0) + 1);
    });
    return map;

  }
}
