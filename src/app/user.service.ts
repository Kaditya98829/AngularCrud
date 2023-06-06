import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get('https://pahadihume.in.net/users');
  }

  registerUser(payload: {email: string, password: string, name: string}) {
    return this.http.post('https://pahadihume.in.net/register', payload);
  }

  login(paylaod: { email: string, password: string}) {
    return this.http.post('https://pahadihume.in.net/login', paylaod);
  }
 
  updateUser(id: string, paylaod: object) {
    return this.http.put(`https://pahadihume.in.net/update/user/${id}`, paylaod);
  }

  deleteUser(id: string) {
    return this.http.delete(`https://pahadihume.in.net/delete/user/${id}`);
  }

 forgotPassword(payload: string) {
  return this.http.post('https://pahadihume.in.net/forgot/password', {email: payload});
 }

 resetPassword(token: string, payload: object) {
  return this.http.put(`https://pahadihume/reset.in.net/password/${token}`, payload)
 }
}
