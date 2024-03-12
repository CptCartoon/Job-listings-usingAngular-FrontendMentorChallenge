import { Component, Input, Output, input } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Job } from '../shared/interfaces/job.interface';
import { CommonModule } from '@angular/common';
import jobsList from './../../assets/data.json';
import { FilterService } from '../filter.service';


@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {

  constructor(private filterService: FilterService) {

  }

  getFilterArray(): string[] {
    return this.filterService.getFilterArray();
  }


  jobListing: Job[] = jobsList;

  showFilteredArray(): Job[] {

    if(this.filterService.getFilterArray().length > 0) {      
      return this.jobListing.filter(job => this.getFilterArray().every(tablet => this.filterService.getTablets(job).includes(tablet)));
    } 

    return this.jobListing;

  }

}
