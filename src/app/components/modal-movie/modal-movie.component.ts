import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
// import { CalendarComponentOptions } from 'ion2-calendar'
// import { Calendar } from '@ionic-native/calendar/ngx';
import { MovieService } from '../../services/movie/movie.service';
import { NavParams } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-modal-movie',
  templateUrl: './modal-movie.component.html',
  styleUrls: ['./modal-movie.component.scss']
})
export class ModalMovieComponent implements OnInit {
  addMovie: FormGroup;
  movie:Movie;
  validationMovie = {
    name: [
      { type: 'required', message: 'Este campo es obligatorio.' },
    ],
    publicationDate: [
      { type: 'required', message: 'Este campo es obligatorio.' },
    ],
    state: [
      { type: 'required', message: 'Este campo es obligatorio.' },
    ],
  };
  // calendarTypeResult: string = 'string';
  // dateRange:any;
  // optionsRange: CalendarComponentOptions = {
  //   pickMode: 'range',
  //   weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  //   monthFormat: "MMMM, YYYY",
  //   weekStart: 1,
  //   monthPickerFormat: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  // };
  constructor(
    private fb: FormBuilder,
    private MovieService:MovieService,
    private navParams:NavParams,
    // private calendar: Calendar
  ){
      const defData = {
        name: '',
        publicationDate: '',
        state: '',
      };
      const changePassData = {
        name: '',
        publicationDate: '',
        state: '',
      };
      this.crearFormulario(defData,changePassData);

      // this.barcodeData = JSON.parse(this.navParams.data.movie);
      // this.rol = this.navParams.data.rol;
      // console.log("[movie param]",this.navParams.data.movie)
      if(this.navParams.data.movie)
        this.movie=this.navParams.data.movie;
   }

  ngOnInit(): void {
  }
  
  crearFormulario(defaultData: any,changePassData :any) {

    this.addMovie = this.fb.group({
      name: ['', [Validators.required]],
      publicationDate: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });

  }
  showSignInValidationMessage(validation: any, field: string) {
    return this.addMovie.get(field).hasError(validation.type)
      && (this.addMovie.get(field).dirty || this.addMovie.get(field).touched);
  }
  
  createMovie(){
    console.log("addMovie",this.addMovie.value)
    const obj={
      "name":this.addMovie.value.name,
      "publicationDate":this.addMovie.value.publicationDate,
      "state":this.addMovie.value.state=='01'?true:false,
    }
    console.log("obj ADD",obj)
    this.MovieService.addMovies(this.addMovie.value)
     .subscribe( resp=>{
       console.log("[add MOVIES]",resp);
     })
  }

  validateDateRange(){

  }
}
