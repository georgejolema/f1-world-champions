import { Component, Input, OnInit } from '@angular/core';
import { FLAGS_CDN_URL } from '../constants';
import countries from '../data/countries.json';

@Component({
  selector: 'f1-flag',
  templateUrl: 'flag.component.html',
  styleUrls: ['./flag.component.scss'],
})
export class FlagComponent implements OnInit{
  @Input() nationality = '';
  flag: any;

  get flagUrl(): string {
    return `${FLAGS_CDN_URL}/${this.flag?.cca2?.toLowerCase()}.svg`;
  }

  ngOnInit(): void {
    this.flag = countries.find((data) => data.nationality === this.nationality);
  }
}
