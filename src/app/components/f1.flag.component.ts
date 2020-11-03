import { Component, Input, OnInit } from '@angular/core';
import { FLAGS_CDN_URL } from '../constants';
import countries from '../data/countries.json';

export interface Flag {
  cca2: string;
  cca3?: string;
  name?: string;
  nationality?: string;
}

@Component({
  selector: 'f1-flag',
  templateUrl: 'f1.flag.component.html',
  styleUrls: ['./f1.flag.component.scss'],
})
export class FlagComponent implements OnInit {
  @Input() nationality = '';
  flag: Flag;

  get flagUrl(): string | undefined {
    if (this.flag) {
      return `${FLAGS_CDN_URL}/${this.flag.cca2.toLowerCase()}.svg`;
    }

    return undefined;
  }

  ngOnInit(): void {
    this.flag = countries.find((data) => data.nationality === this.nationality);
  }
}
