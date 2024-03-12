import { Component, Input, Output } from '@angular/core';
import { Job } from '../shared/interfaces/job.interface';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, FiltersComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() listingItem!: Job;
  @Input() filterArray!: string[];
  
  getTablets(listingItem: Job): string[] {
    return  [listingItem.role, listingItem.level, ...listingItem.languages,...listingItem.tools]
  }

  addFilterTag(tablet: string): void {
    if(this.filterArray.find(item => item === tablet)) {
      this.filterArray;
    } else {
      this.filterArray.push(tablet);
    }
  }
  
}
