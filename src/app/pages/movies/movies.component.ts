import { Component, OnInit } from '@angular/core';
import { ModalMovieComponent } from '../../components/modal-movie/modal-movie.component';
import { ModalController } from '@ionic/angular';
import { MovieService } from '../../services/movie/movie.service';
import { Movie } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies:Movie[];
  constructor(
    private modal: ModalController,
    private MovieService:MovieService
  ) { 
    this.getMovies();
  }

  ngOnInit(): void {
  }

  async getMovies(){
    try{
      await this.MovieService.getMovies()
      .subscribe( (resp:Movie[])=>{
        console.log("[MOVIES]",resp);
        this.movies=resp;
      })
    }catch(e){
      console.log("error",e)
    }
    
  }

  async openModalMovie(movie?) {
    const modal = await this.modal.create({
      component: ModalMovieComponent,
      cssClass: "movieModal",
      componentProps: {
        movie,
      },
    });
    await modal.present();
    let closeModal = await modal.onDidDismiss();
    if (closeModal.data) {
      console.log("CERRADO DE MODAL ORDER", closeModal.data["movie"]);
    }
  }

  deleteMovie(){
    console.log("deleteMovie")
  }

}
