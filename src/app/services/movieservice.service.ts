import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMovie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private http: HttpClient) { }

  GetMovie(title: string):Observable<IMovie>{
       return this.http.get<IMovie>('https://moviedemotest1.azurewebsites.net/api/movie/' + title)
   }
}
