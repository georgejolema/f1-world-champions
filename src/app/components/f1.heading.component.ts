import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'f1-heading',
  templateUrl: 'f1.heading.component.html'
})
export class HeadingComponent implements OnInit{
  model: {[key: string]: number} = {};

  @Input() seasons: Array<number> = [];
  @Output() selectSeason = new EventEmitter<number>();

  onSelectSeason(): void {
    this.selectSeason.emit(this.model.season);
  }

  ngOnInit(): void {
    this.model = { season: this.seasons[0] };
  }
}
