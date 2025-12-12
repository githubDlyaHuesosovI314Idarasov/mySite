import { Component, EventEmitter, inject, Output, AfterViewInit, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ProjectInfoService } from '../project-info-service';
import { CommonModule } from '@angular/common';
import { SearchCriteria } from '../search-criteria';

declare var bootstrap: any;

@Component({
  selector: 'app-search',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="d-flex justify-content-center mb-3">
      <div class="search-container">
          <div class="input-group">
            <div ngbDropdown class="dropdown">
              <button class="btn border btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" ngbDropdownToggle 
              style="border-right: 0; border-top-right-radius: 0; border-bottom-right-radius: 0;"> 
              <i class="bi bi-funnel"></i>
              </button>
              
              <ul ngbDropdownMenu class="dropdown-menu">
                @for(item of tagCounts | keyvalue; track item.key) {
                  <li class="dropdown-item">
                      <input class="form-check-input" type="checkbox" id="{{item.key}}" name="{{item.key}}" [checked]="selectedTags.has(item.key)" (change)="onTagChange(item.key, $event)"/>
                      <label class="form-check-label ms-1" for="{{item.key}}"> {{item.key}} ({{item.value}})</label>
                  </li>
                }
                @if(selectedTags.size > 0) {
                  <li><hr class="dropdown-divider"></li>
                  <li>
                    <button class="dropdown-item text-danger" (click)="clearTags()">
                      <i class="bi bi-x-circle"></i> Clear all filters
                    </button>
                  </li>
                }
              </ul>           
            </div>

          
            <input #searchBar type="text" class="form-control w-auto"  placeholder="Search project by title" (input)="onSearchInput(searchBar.value)"
            style="border-left: 0; border-top-left-radius: 0; border-bottom-left-radius: 0; border-top-right-radius: 0; border-bottom-right-radius: 0;  border-right: 0;"/>

            <button #searchButton class="btn border btn-outline-primary " type="button" (click)="onSearchClick()"
            style="border-left: 0; border-top-left-radius: 0; border-bottom-left-radius: 0">
            <i class="bi bi-search"></i>
            </button>

          </div>
            @if(selectedTags.size > 0) {
              <span class="badge bg-primary" >{{selectedTags.size}}</span>
            }
      </div>
    </div>
  `,
  styleUrl: './search.css',
})
export class SearchComponent implements OnInit, AfterViewInit {
  projectInfoService = inject(ProjectInfoService);
  tagCounts: Map<string, number> = new Map();

  @Output() searchCriteria = new EventEmitter<SearchCriteria>();
  @ViewChild('dropdownButton') dropdownButton!: ElementRef;
  selectedTags: Set<string> = new Set();
  currentSearchText: string = ''; 
  private dropdownInstance: any;

  async ngOnInit() {
    this.tagCounts = await this.projectInfoService.getAllTags()
  }

  ngAfterViewInit() {
    if (typeof bootstrap !== 'undefined') {
      this.dropdownInstance = new bootstrap.Dropdown(this.dropdownButton.nativeElement);
    }
  }
  
  onTagChange(tag: string, event: any){
    if(event.target.checked){
      this.selectedTags.add(tag);
    }
    else{
      this.selectedTags.delete(tag);
    }
    this.emitSearchCriteria();
  }

  clearTags() {
    this.selectedTags.clear();
    this.emitSearchCriteria();
  }

  onSearchInput(text: string) {
    this.currentSearchText = text;
  }

  onSearchClick() {
    this.emitSearchCriteria();
  }

  private emitSearchCriteria() {
    this.searchCriteria.emit({
      text: this.currentSearchText,
      tags: Array.from(this.selectedTags)
    });
  }

}

