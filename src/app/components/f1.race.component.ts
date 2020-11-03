import { Component, Input } from '@angular/core';
import { icons } from '../constants';
import { Race } from '../model/Races';

@Component({
  selector: 'f1-race',
  templateUrl: './f1.race.component.html',
  styleUrls: ['./f1.race.component.scss']
})
export class RaceComponent {
  @Input() race: Race | undefined;
  icons = icons;
  showDetails = true;
}
