import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilitiesComponent } from './utilities/utilities.component';
import { GreetComponent } from './greet/greet.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  {
    path: 'utilities', component: UtilitiesComponent,
    children:
      [
        { path: 'greet', component: GreetComponent },
        { path: 'greet/:id/:name', component: GreetComponent }
      ]
  }]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UtilitiesComponent, GreetComponent];
