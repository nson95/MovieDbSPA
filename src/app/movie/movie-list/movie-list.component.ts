import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies : Movie [];

  constructor(
    private mvsvc: MovieService
  ) { 

  }

  ngOnInit() {
    this.mvsvc.list()
    .subscribe(resp => {
      console.log("Movies: ", resp);
      this.movies = resp.data;
    });
  }

}
