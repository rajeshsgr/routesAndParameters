import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {


  id: number;
  name: string = '';
  show: boolean = false;
  greeting: string = '';

  paramsSubscription: Subscription

  constructor(private route: ActivatedRoute,
    private router: Router) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];

    if (this.name) {

      this.show = true;

    }

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.name = params['name'];
      });

  }



  greetUser() {

    this.router.navigate(['greet', this.id, this.name], { relativeTo: this.route.parent })
  }

  reset(){
    this.router.navigate(['greet'], { relativeTo: this.route.parent });
  }

  resetText(){

   this.show=false;
  }

}
