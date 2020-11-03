import { Component, Input } from '@angular/core';
import { Result } from '../model/Races';

@Component({
  selector: 'f1-result',
  templateUrl: './f1.result.component.html',
  styleUrls: ['./f1.result.component.scss'],
})
export class ResultComponent {
  @Input() result: Result;
}
