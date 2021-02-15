import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserRegisterModel } from './user-register.model';

@Injectable({
    providedIn: 'root',
})
export class UserApiService {
    private apiUrl: string = 'http://localhost:3000/users';

    constructor(private http: HttpClient) {}

    saveUser(user: UserRegisterModel): Observable<any> {
        let params = JSON.stringify(user);
        console.log(params);

        let headers = new HttpHeaders().set('Content-type', 'application-json');

        return this.http.post(this.apiUrl, params);
    }
}
