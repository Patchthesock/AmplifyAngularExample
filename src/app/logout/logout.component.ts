import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Auth.signOut();
  }
}
