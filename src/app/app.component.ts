import { Component } from '@angular/core';
import { ChampionsService } from './services/champions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 years = [2015, 2016, 2017, 2018, 2019, 2020];

 showChampion(year: number): void {
  this.api.getChampions(year).subscribe(data=>{
    console.log(data);
  });
 }

 constructor(private api: ChampionsService) {}
}
