import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilitiesComponent } from './utilities/utilities.component';
import { GreetComponent } from './greet/greet.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponentComponent } from './home-component/home-component.component';



const routes: Routes = [

  { path: '', component: HomeComponentComponent },

  {path: 'utilities', component: UtilitiesComponent,
    children:
      [
        { path: 'greet', component: GreetComponent },
        { path: 'greet/:id/:name', component: GreetComponent }
      ]
  },
  {path: '**', component: PageNotFoundComponent}
]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponentComponent,UtilitiesComponent, GreetComponent,PageNotFoundComponent];
