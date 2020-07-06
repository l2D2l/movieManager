import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
// import { CalendarComponentOptions } from 'ion2-calendar'
// import { Calendar } from '@ionic-native/calendar/ngx';
import { MovieService } from '../../services/movie/movie.service';
import { NavParams, ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-modal-movie',
  templateUrl: './modal-movie.component.html',
  styleUrls: ['./modal-movie.component.scss']
})
export class ModalMovieComponent implements OnInit {
  addMovie: FormGroup;
  movie:Movie;
  title:string='Nueva Película';
  buttonName:string='Añadir Película';
  state:boolean=false;
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
    private modal: ModalController
    // private calendar: Calendar
  ){
      let defData = {
        name: '',
        publicationDate: '',
        state: '',
      };
      // const changePassData = {
      //   name: '',
      //   publicationDate: '',
      //   state: '',
      // };
      if(this.navParams.data.movie){
        defData=this.navParams.data.movie;
        this.movie=this.navParams.data.movie;
        console.log("modal",this.movie)
        this.title='Actualizar Película';
        this.state=true;
        this.buttonName='Editar Película'
      }
      this.createForm(defData);

      // this.barcodeData = JSON.parse(this.navParams.data.movie);
      // this.rol = this.navParams.data.rol;
      // console.log("[movie param]",this.navParams.data.movie)
      
   }

  ngOnInit(): void {
  }
  
  createForm(defaultData: any) {

    this.addMovie = this.fb.group({
      name: [defaultData.name, [Validators.required]],
      publicationDate: [defaultData.publicationDate, [Validators.required]],
      state: [defaultData.state, [Validators.required]],
    });

  }
  showSignInValidationMessage(validation: any, field: string) {
    return this.addMovie.get(field).hasError(validation.type)
      && (this.addMovie.get(field).dirty || this.addMovie.get(field).touched);
  }
  
  async createMovie(){
    console.log("addMovie",this.addMovie.value)
    

    try{
      
      if(this.state){
        
        const objMovie={
          "name":this.addMovie.value.name,
          "publicationDate":this.addMovie.value.publicationDate.substr(0,10),
          "state":this.addMovie.value.state,
          "id":this.movie.id,
        }

        console.log("objMovie",objMovie)
        this.MovieService.editMovies(objMovie)
         .then( resp=>{
           console.log("[EDIT MOVIES]",resp);
           this.modal.dismiss(objMovie);
         })
      }else{
        const objMovie={
          "name":this.addMovie.value.name,
          "publicationDate":this.addMovie.value.publicationDate.substr(0,10),
          "state":this.addMovie.value.state,
          "id":'',
        }
        console.log("objMovie",objMovie)

        this.MovieService.addMovies(objMovie)
         .then( (resp:any)=>{
          console.log("[ADD MOVIES]",resp);
          objMovie.id=resp.id;
          this.modal.dismiss(objMovie);
        })
      }
    }catch(e){
      console.log("error",e)
    }
    
  }

  // close() {
  // }
}
