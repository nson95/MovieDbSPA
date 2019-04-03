import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieCreateComponent } from './movie/movie-create/movie-create.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { ActorCreateComponent } from './actor/actor-create/actor-create.component';
import { ActorListComponent } from './actor/actor-list/actor-list.component';
import { ActorDetailComponent } from './actor/actor-detail/actor-detail.component';
import { ActorEditComponent } from './actor/actor-edit/actor-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieListComponent,
    MovieCreateComponent,
    MovieEditComponent,
    MovieDetailComponent,
    ActorCreateComponent,
    ActorListComponent,
    ActorDetailComponent,
    ActorEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
