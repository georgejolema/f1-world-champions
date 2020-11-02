import { Component, Input } from '@angular/core';
import { faEllipsisH, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Race } from '../model/Races';

@Component({
  selector: 'f1-race',
  templateUrl: './f1.race.component.html',
  styleUrls: ['./f1.race.component.scss']
})
export class RaceComponent {
  @Input() race: Race | undefined;
  faTrophy = faTrophy;
  faEllipsis = faEllipsisH;
  showDetails = true;
}
