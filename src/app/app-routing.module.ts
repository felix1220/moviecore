import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchmovieComponent} from '../app/searchmovie/searchmovie.component'

const routes: Routes = [
 {path: 'movie', component: SearchmovieComponent},
 {path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule'},
 {path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
 {path: '', redirectTo:'/movie', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }