import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MasterService } from '../../master.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

interface buslocation {
  locationId: number;
  locationName: string;
  code: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  location$: Observable<buslocation[]> | undefined;
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.getAllLocation();
  }

  getAllLocation() {
    this.location$ = this.masterService.getlocations();
  }
}
