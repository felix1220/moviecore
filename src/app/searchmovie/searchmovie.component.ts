import { Component, OnInit } from '@angular/core';
import { IMovie } from '../models/movie.model'
import { MovieserviceService } from 'src/app/services/movieservice.service';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MockExercise } from '../contactmanager/models/MockExercise.model';



@Component({
  selector: 'app-searchmovie',
  templateUrl: './searchmovie.component.html',
  styleUrls: ['./searchmovie.component.scss']
})
export class SearchmovieComponent implements OnInit {

  title = '';
   exercises: MockExercise[];
 
  //title: string
  _movies: IMovie[]
  displayedColumns: string[] = ['title', 'plot', 'director', 'actors', 'poster'];
  private host: any;
  dataSource:any;
  showTable:boolean;
  phoneVal:string;

  constructor(private movieSvc:MovieserviceService, private firestore: AngularFirestore) { 
   /* db.collection("MockExercises").add({
      calories:2,
      duration: 60,
      name:"walking"
    });*/
    /*this.temp = db.collection("Temp").valueChanges();
    this.temp.subscribe( t => {
        console.log(t);
    })*/
   
  }

  ngOnInit() {
      this._movies = new Array<IMovie>();
      this.dataSource = this._movies;
      this.showTable = false;
      this.firestore.collection('MockExercises').snapshotChanges().subscribe( data => {
        this.exercises = data.map( e =>{
          return {
            ...e.payload.doc.data()
          } as MockExercise
        })
      });

      let phone = "3051021234";
      this.phoneVal = "3051021234";
      let newPhone = "(" + phone.substring(0,3) + ")" + phone.substring(3,6) + '-' + phone.substring(6, phone.length);
      console.log(newPhone);
    
  }
  searchMovie():void{
    this.showTable = false;
    console.log(this.phoneVal);
    console.log(this.exercises);
    this.movieSvc.GetMovie(this.title).subscribe((movie:IMovie) => {
        console.log(movie);
        this._movies.push(movie);
        this.showTable = true;
    })
 }
 onBlurValidate(val:string, chkVal:string, errorMsgId:string){
      let regExpr = new RegExp(chkVal);
      if(regExpr.test(val)){
             console.log(chkVal, val, 'Valid Phone');
      }
      else{
        console.log(chkVal, val, 'Not Valid Phone');
      }
 }
 

}
