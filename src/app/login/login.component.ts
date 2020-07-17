import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any[]= []
  title = 'Luisa Siliceo'

  constructor(protected userService: UserService) { }

  ngOnInit() {
    this.userService.getUserLogin()
    .subscribe(
      (data)=> {
        //sucess
        this.users= data['results']
      },
      (error)=>{
        console.error(error)
      }
    )
  }

}
