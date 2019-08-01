import { Component, OnInit } from '@angular/core';
import { Auth, Hub } from 'aws-amplify'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Hub.listen('auth', (data) => {
      console.log(data);
      Auth.currentAuthenticatedUser()
        .then(usr => { console.log(usr) })
        .catch(err => { console.log(err) })
    })
  }
}
