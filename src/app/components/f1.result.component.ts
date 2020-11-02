import { Component, Input } from '@angular/core';
import { Result } from '../model/Races';

@Component({
  selector: 'f1-result',
  templateUrl: 'f1.result.component.html'
})
export class ResultComponent {
  @Input() result: Result;
}
