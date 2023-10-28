import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomePage } from './home-page/home-page.component';
import { Page404 } from './page-404/page-404.component';
import { Detail } from './detail/detail.component';

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'detail', component: Detail },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Page404 },  
];// sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }