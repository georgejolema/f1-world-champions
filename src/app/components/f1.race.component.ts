import { Component, Input } from '@angular/core';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Race } from '../model/Races';

@Component({
  selector: 'f1-race',
  templateUrl: './f1.race.component.html'
})
export class RaceComponent {
  @Input() race: Race | undefined;
  faTrophy = faTrophy;
  showDetails = true;
}
