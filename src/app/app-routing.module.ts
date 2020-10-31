import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChampionsService } from './services/champions.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, HttpClientModule ],
  exports: [RouterModule, BrowserModule, HttpClientModule],
  providers: [ChampionsService],
})
export class AppRoutingModule { }
