import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private http: HttpClient) {console.log('service running'); }


  getAlluser(){
    return this.http.get('http://localhost:5000/user/getall');
  }
  
  createUser(user){
    console.log('user', user);
    return this.http.post('http://localhost:5000/user/create', {f_name: user.f_name, l_name :user.f_name, mobile: user.mobile, email:user.email});
  } 

  getUserById(email){
    return this.http.post('http://localhost:5000/user/userdetails',{email:email} )
  }

  deleteUser(user){
    console.log('deleting user', user)
    return this.http.post('http://localhost:5000/user/delete', {mobile:user});
  }

}
