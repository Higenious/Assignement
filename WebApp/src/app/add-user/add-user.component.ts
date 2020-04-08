import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {UsersService} from '../users.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newUser: any = {};
  myData:any
  constructor(private http:HttpClient, private UserService :UsersService, private router:Router ) { }

  ngOnInit() {
    this.loadUsers();
  }

 adduser(newUser){
   console.log('new USer', newUser);
   this.UserService.createUser(newUser).subscribe(result=>{
    var keys = Object.keys(result);
    if(keys[0] == 'errors'){
      alert('failed to add');
    }else{
      alert('succesfully added user');
    }
    this.loadUsers();
    this.router.navigateByUrl('/users');
  }, error => {
    alert("ERROR");
 });
    
 }



 public loadUsers(){
  this.UserService.getAlluser().subscribe(
      (data: any) => {
        this.myData = data.data;
      },
      error => {
        alert("ERROR");
      });
}

}
