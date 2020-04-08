import { Component } from '@angular/core';
import {UsersService} from '../app/users.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private UserService : UsersService) { }

  ngOnInit() {
    this.loadUsers();
  }

  public loadUsers(){
    this.UserService.getAlluser().subscribe((data)=>{
       console.log('data', data);
    })
  }
}
