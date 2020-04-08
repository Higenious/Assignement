import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import {UsersService} from '../users.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];
  myData: any;
  constructor(private UserService : UsersService, private _router: Router) { }

  ngOnInit() {
    this._router.navigate(['/users']);
    this.loadUsers();
  }

  loadUsers(){
    this.UserService.getAlluser().subscribe(
        (data: any) => {
          this.myData = data.data;
        },
        error => {
          alert("ERROR");
        });
  }



  registerUser(){
    this._router.navigateByUrl('/adduser');
  }


  
  public delete(items) {
    swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover!",
    icon: "warning",
    dangerMode: true,
  })
  .then((willDelete) => {
   this.UserService.deleteUser(items).subscribe(res=>{
    if(confirm("Are you sure to delete ")) {
      console.log("Implement delete functionality here");
    }
   })
  });
}

  public editUser(user){
    alert('editing');
  }

}
