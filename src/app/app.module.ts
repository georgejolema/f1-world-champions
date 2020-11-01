import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app.component';
import { FormsModule } from '@angular/forms';
import { ChampionsService } from './services/champions.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlagComponent } from './components/flag.component';

@NgModule({
  declarations: [
    AppComponent,
    FlagComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [ChampionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
