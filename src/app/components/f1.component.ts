import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RacesService } from '../services/races.service';
import { getRaces, isLoading } from '../state/app.selectors';
import { RaceState } from '../state/app.state';

@Component({
  selector: 'f1-root',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.scss'],
})
export class AppComponent {
  data = this.store.select(getRaces);
  isLoading = this.store.select(isLoading);

  constructor(private store: Store<RaceState>) {}
}
