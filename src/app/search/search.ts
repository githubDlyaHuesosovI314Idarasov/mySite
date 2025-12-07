import { Component, EventEmitter, inject, Output,  OnInit } from '@angular/core';
import { ProjectInfoService } from '../project-info-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="d-flex justify-content-center  mb-3">
      <div class="search-container">
        <div class="row"> 
          <div class="col">
            <div class="dropdown">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> 
              <i class="bi bi-funnel"></i>
              </button>
              <ul class="dropdown-menu">
                @for(item of tagCounts | keyvalue; track item.key) {
                  <li>
                    <a class="dropdown-item" href="#"> 
                      <input type="checkbox" id="{{item.key}}" name="{{item.key}}" value="{{item.key}}"/>
                      <label for="{{item.key}}">{{item.key}} ({{item.value}})</label>
                    </a>
                  </li>
                }
                <li>
                  <a class="dropdown-item" href="#">Item 1 </a>
                </li>
              </ul>           
            </div>

          </div>
          <div class="col">
            <input #searchBar  type="text" class="form-control w-auto"  placeholder="Search project by title" />
          </div>
          <div class="col">
            <button #searchButton class="btn btn-outline-primary ms-1" type="button" (click)="onSearch(searchBar.value)">
            <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './search.css',
})
export class SearchComponent implements OnInit {
  projectInfoService = inject(ProjectInfoService);
  @Output() searchText = new EventEmitter<string>();

  tagCounts: Map<string, number> = new Map();

  async ngOnInit() {
      const tags = await this.projectInfoService.getAllTags();
      this.countTags(Array.from(tags.keys()));
    }

  onSearch(text: string) {
    this.searchText.emit(text);
  }

  countTags(tags: string[]) {
    tags.forEach(tag => {
      this.tagCounts.set(tag, (this.tagCounts.get(tag) || 0) + 1);
    });
  }
}

