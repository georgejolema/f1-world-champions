import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getRaces, isLoading } from '../state/app.selectors';
import { RaceState } from '../state/app.state';
import { map } from 'rxjs/operators';
import { Race } from '../model/Races';

@Component({
  selector: 'f1-root',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.scss'],
})
export class AppComponent {
  data = this.store.select(getRaces);
  champion = this.store
    .select(getRaces)
    .pipe(
      map((data) =>
        AppComponent.highestDriver(AppComponent.fromArrayToObject(data.items))
      )
    );

  isLoading = this.store.select(isLoading);

  private static fromArrayToObject(items: Race[]): {} {
    return items.reduce((prev, curr) => {
      const { name } = curr.winner.driver;
      return {
        ...prev,
        [name]: prev[name]
          ? curr.winner.points + prev[name]
          : curr.winner.points,
      };
    }, {});
  }

  private static highestDriver(winnerList: {}): string {
    let highest = 0;

    return Object.keys(winnerList).reduce((prev, curr) => {
      if (winnerList[curr] > highest) {
        highest = winnerList[curr];
        return curr;
      } else {
        return prev;
      }
    }, '');
  }

  constructor(private store: Store<RaceState>) {}
}
