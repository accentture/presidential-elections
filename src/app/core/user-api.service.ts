import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

//app
import { UserRegisterModel } from './user-register.model';
import { GLOBAL } from './global';
import { UserLoginModel } from './user-login.model';

@Injectable({
    providedIn: 'root',
})
export class UserApiService {
    private apiUrl: string = GLOBAL.url;
    private nameUserLocalStorage: string = 'data_user';
    private headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private httpClient: HttpClient, private router: Router) {}

    saveUser(user: UserRegisterModel): Observable<any> {
        let params = JSON.stringify(user);

        return this.httpClient.post(this.apiUrl + 'users', params, { headers: this.headers });
    }
    login(user: UserLoginModel) {
        let data = {
            username: user.email,
            password: user.password,
        };
        let params = JSON.stringify(data);
        console.log(params);
        return this.httpClient
            .post<any>(`${this.apiUrl}login-user/`, { params: params }, { headers: this.headers })
            .subscribe(
                (response) => {
                    console.log(response);
                    if (response[0] !== undefined) {
                        this.setUserLocalStorage(response[0]);
                        this.router.navigate(['/candidates']);
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    setUserLocalStorage(dataUser: object) {
        localStorage.setItem(this.nameUserLocalStorage, JSON.stringify(dataUser));
    }
}
