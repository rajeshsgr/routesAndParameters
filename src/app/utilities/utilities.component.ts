import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.css']
})
export class UtilitiesComponent implements OnInit {


  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  loadGreet(){

    //this.router.navigate(['/greet']);


  }

}
