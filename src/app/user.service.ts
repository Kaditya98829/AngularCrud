import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get('https://pahadihume/users');
  }

  registerUser(payload: {email: string, password: string, name: string}) {
    return this.http.post('https://pahadihume/register', payload);
  }

  login(paylaod: { email: string, password: string}) {
    return this.http.post('https://pahadihume/login', paylaod);
  }
 
  updateUser(id: string, paylaod: object) {
    return this.http.put(`https://pahadihume/update/user/${id}`, paylaod);
  }

  deleteUser(id: string) {
    return this.http.delete(`https://pahadihume/delete/user/${id}`);
  }

 forgotPassword(payload: string) {
  return this.http.post('https://pahadihume/forgot/password', {email: payload});
 }

 resetPassword(token: string, payload: object) {
  return this.http.put(`https://pahadihume/reset/password/${token}`, payload)
 }
}
