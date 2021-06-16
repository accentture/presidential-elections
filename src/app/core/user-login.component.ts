import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//local
import { UserApiService } from './services/user-api.service';
import { UserLoginModel } from './user-login.model';

//service
import { StateUserService } from './services/state-user.service';
import { UserResponse } from './interfaces/user-response.interface';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
    user: UserLoginModel;
    nameUserLocalStorage: string = 'data_user';

    constructor(
        private stateUserService: StateUserService,
        private userApiService: UserApiService,
        private router: Router
    ) {
        this.user = new UserLoginModel('', '');
    }

    ngOnInit(): void {}
    getDataForLogin(paramsFormContact: any) {
        this.userApiService.login(this.user).subscribe(
            (response: UserResponse) => {

                if (response.message == 'Correct authentication') {
                    this.userApiService.saveUserLocalStorage(response);
                    this.router.navigate(['/candidates']);
                    this.stateUserService.updateStateUser();
                }
            },
            (error) => {
                console.log(error);
            }
        );
        paramsFormContact.reset();
    }
    createLoginUser() {
        this.stateUserService.updateStateUser();
    }
}
