import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL, BASE_URL_API } from 'src/environments/environment';
import { URLS } from '../constant';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public userId = localStorage.getItem('userId');
  constructor(private http: HttpClient, private router: Router) { }

  login(payload: any) {
    return this.http.post(`${BASE_URL_API}/${URLS.USERS}/${URLS.LOGIN}`, payload);
  }

  getPosts() {
    return this.http.get(`${BASE_URL}/${URLS.POSTS}`);
  }

  getAllChats() {
    return this.http.get(`${BASE_URL_API}/${URLS.CHATS}`);
  }

  getAllUsers() {
    return this.http.get(`${BASE_URL_API}/${URLS.USERS}`);
  }

  getSelectedChat(userId: string) {
    return this.http.get(`${BASE_URL_API}/${URLS.CHATS}/${userId}`);
  }

  sendMessage(payload:any){
    return this.http.post(`${BASE_URL_API}/${URLS.CHATS}/${payload.receiver_id}/${URLS.SEND}`,payload);
  }

  isLogin() {
    return !!localStorage.getItem('access-token');
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');

  }
}
