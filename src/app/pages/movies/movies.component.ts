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
      await this.MovieService.getMovies().then(
        (data:Movie[])=>{
          console.log("[MOVIES]",data);
          this.movies=data;
        }
      )
    }catch(e){
      e=>console.log("error getMovies",e)
    }

    console.log("[movies]",this.movies)
  }

  async openModalMovie(movie?,i?) {
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
      console.log("cierre de modal", closeModal.data);
      if(movie){
        this.movies[i]=closeModal.data;
      }else{
        let length=this.movies.length;
        this.movies[length]=closeModal.data;
      }
    }
  }

  async deleteMovie(movie){
    console.log("deleteMovie",movie,this.movies)
    try{
      await this.MovieService.deleteMovies(movie.id)
      this.movies=this.movies.filter(item=>item.id!=movie.id)
    }catch(e){
      e=>console.log("error deleteMovie",e)
    }
  }

}
