import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

//app
import { UserRegisterModel } from '../user-register.model';
import { GLOBAL } from '../global';
import { UserLoginModel } from '../user-login.model';
import { UserResponse } from '../interfaces/user-response.interface';

@Injectable({
    providedIn: 'root',
})
export class UserApiService {
    private apiUrl: string = GLOBAL.url;
    private nameUserLocalStorage: string = 'data_user';

    constructor(
        private httpClient: HttpClient, 
        private router: Router
    ) {}

    saveUser(user: UserRegisterModel): Observable<any> {
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.httpClient.post(this.apiUrl + 'create-user/', params, { headers: headers });
    }
    login(user: UserLoginModel) {
        const formData = new FormData();
        formData.append('email', user.email);
        formData.append('password', user.password);

        return this.httpClient.post<any>(`${this.apiUrl}login-user/`, formData);
    }
    saveUserLocalStorage(dataUser: UserResponse) {
        localStorage.setItem(this.nameUserLocalStorage, JSON.stringify(dataUser));
    }
    checkUserInLocalStorage():UserResponse {
        const user = JSON.parse(localStorage.getItem('data_user') || '{}').user;
        return user
        
    }
}
