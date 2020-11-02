import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RaceList } from '../model/Races';
import { ChampionsService } from '../services/champions.service';

@Component({
  selector: 'f1-root',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.scss'],
})
export class AppComponent {
  data: Observable<RaceList>;
  seasons: Array<number>;
  isLoading = true;

  selectSeason(season: number): void {
    this.isLoading = true;
    this.api.selectYear(season);
  }

  constructor(private api: ChampionsService) {
   this.data = this.api.champions.pipe(tap(() => {
     this.isLoading = false;
   }));

   this.seasons = this.api.seasons;

  }
}
