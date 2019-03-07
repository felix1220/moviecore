import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchmovieComponent } from './searchmovie/searchmovie.component';
import { MovieserviceService } from './services/movieservice.service';
import { FormsModule} from '@angular/forms'
import { MaterialModule } from './shared/material.module';
import { DthreechartComponent } from './dthreechart/dthreechart.component';
import { AngularCanvasComponent } from './angular-canvas/angular-canvas.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {NgxMaskModule} from 'ngx-mask';

const firebaseConfig = {
  apiKey: "AIzaSyCrCMHvW14sJnwcZvdDhazs43iTx5IOPY0",
  authDomain: "mock-a9f1c.firebaseapp.com",
  databaseURL: "https://mock-a9f1c.firebaseio.com",
  projectId: "mock-a9f1c",
  storageBucket: "mock-a9f1c.appspot.com",
  messagingSenderId: "339129684072"
}

@NgModule({
  declarations: [
    AppComponent,
    SearchmovieComponent,
    DthreechartComponent,
    AngularCanvasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig, 'SimpleMovieDemo'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    NgxMaskModule.forRoot({})
  ],
  providers: [MovieserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
