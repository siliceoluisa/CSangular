import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users: any[]= []
  infor: any;
  title = 'Luisa Siliceo'
  constructor(protected userService: UserService) { }

  ngOnInit() {
    this.userService.getUser()
    .subscribe(
      (data)=> {
        //sucess
        this.users= data['results']
      },
      (error)=>{
        console.error(error)
      }
    ),

    this.getInfo();
  }

  getInfo(){
    this.userService.getUser()
    .subscribe(
        //sucess
        (data)=> {
          //sucess
          this.infor= data['info']
        },
        (error)=>{
          console.error(error)
        }
        //(infor:any)=> this.infor= infor['info']
    )
  }

}
