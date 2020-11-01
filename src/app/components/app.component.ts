import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RaceList } from '../model/Races';
import { ChampionsService } from '../services/champions.service';

@Component({
  selector: 'f1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  model: {[key: string]: number};
  data: Observable<RaceList>;
  years: Array<number>;
  isLoading = true;

  showChampion(): void {
    this.isLoading = true;
    this.api.selectYear(this.model.season);
  }

  constructor(private api: ChampionsService) {
   this.data = this.api.champions.pipe(tap((d) => {
     console.log(d);
     this.isLoading = false;
   }));

   this.years = this.api.seasons;
   this.model = { season: this.api.seasons[0] };
  }
}
