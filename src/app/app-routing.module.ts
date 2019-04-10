import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieCreateComponent } from './movie/movie-create/movie-create.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';

import { ActorListComponent } from './actor/actor-list/actor-list.component';
import { ActorCreateComponent } from './actor/actor-create/actor-create.component';
import { ActorDetailComponent } from './actor/actor-detail/actor-detail.component';
import { ActorEditComponent } from './actor/actor-edit/actor-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'movies/list', component: MovieListComponent },
  { path: 'movies/detail/:id', component: MovieDetailComponent },
  { path: 'movies/edit/:id', component: MovieEditComponent },
  { path: 'movies/create', component: MovieCreateComponent },

  { path: 'actors/list', component: ActorListComponent },
  { path: 'actors/detail/:id', component: ActorDetailComponent },
  { path: 'actors/edit/:id', component: ActorEditComponent },
  { path: 'actors/create', component: ActorCreateComponent },

  { path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
