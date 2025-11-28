import { Injectable } from '@angular/core';
import { StackInfo } from './stack-info';

@Injectable({
  providedIn: 'root',
})

export class StackInfoService {
  
  primaryUrl = "http://localhost:3000/primaryStackList";
  secondaryUrl = "http://localhost:3000/secondaryStackList";

  async getPrimaryStackList() : Promise<StackInfo[]>{
    var data = (await fetch(this.primaryUrl)).json();
    return data ?? [];
  }

  async getSecondaryStackList() : Promise<StackInfo[]>{
    var data = (await fetch(this.secondaryUrl)).json();
    return data ?? [];
  }
}
