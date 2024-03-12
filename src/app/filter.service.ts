import { Injectable } from '@angular/core';
import { Job } from './shared/interfaces/job.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { 

  }

  getTablets(listingItem: Job): string[] {
    return  [listingItem.role, listingItem.level, ...listingItem.languages,...listingItem.tools]
  }

  getFilterArray(): string[] {
    return this.filterArray;
  }

  clearFilters(): void {
    this.filterArray = [];
  }

  removeFilter(e: number): void {
    this.filterArray.splice(e, 1);
  }

  filterArray: string[] = [];
}
