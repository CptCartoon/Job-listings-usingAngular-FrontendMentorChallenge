import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListItemsComponent } from './list-items/list-items.component';
import { FiltersComponent } from './filters/filters.component';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListItemsComponent, FiltersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'job-listings';

}
