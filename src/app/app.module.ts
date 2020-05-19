import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

// primero importamos RouterModule, Routes de @angular
import {RouterModule, Routes, } from '@angular/router';

// tslint:disable-next-line: one-variable-per-declaration
const routes: Routes = [
{path: '', component: HomeComponent },
{path: 'body', component: BodyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot (routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
