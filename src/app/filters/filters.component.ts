import { Component, Input, Output } from '@angular/core';
import { ListItemsComponent } from '../list-items/list-items.component';
import { CommonModule } from '@angular/common';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, ListItemsComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  
  constructor(private filterService: FilterService) {

  }

  getFilterArray(): string[] {
    return this.filterService.getFilterArray();
  }

  clearFilters(): void {
    this.filterService.clearFilters();
  }

  removeFilter(e: number): void {
    this.filterService.removeFilter(e);
  }


}
