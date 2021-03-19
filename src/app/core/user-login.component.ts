import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//local
import { UserApiService } from './services/user-api.service';
import { UserLoginModel } from './user-login.model';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
    user: UserLoginModel;
    nameUserLocalStorage: string = 'data_user';

    constructor(private userApiService: UserApiService, private router: Router) {
        this.user = new UserLoginModel('', '');
    }

    ngOnInit(): void {}
    getDataLogin(paramsFormContac: any) {
        this.userApiService.login(this.user);
        paramsFormContac.reset();
    }
}
