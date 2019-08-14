import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';

import { Router } from '@angular/router';
//import { AuthService } from '../auth.service';

import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState> , /*private authService: AuthService, private router: Router */) { }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}) )
  }

  ngOnInit() {
  }
  
  /*logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  } */
}
