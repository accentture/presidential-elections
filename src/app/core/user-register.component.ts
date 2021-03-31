import { Component, OnInit } from '@angular/core';

//local
import { UserRegisterModel } from './user-register.model';
import { UserApiService } from './services/user-api.service';

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
    user: UserRegisterModel;
    status: string = 'failed';

    constructor(private userApiService: UserApiService) {
        this.user = new UserRegisterModel('', '', '', '', '', '');
    }

    ngOnInit(): void {}

    onSubmit(paramsFormContac: any) {
        //this.user.birthday = `${this.birthday}-${this.monthOfBirthday}-${this.yearOfBirthday}`;
        this.userApiService.saveUser(this.user).subscribe(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(<any>error);
            }
        );

        paramsFormContac.reset();
        this.status = 'success';
    }
}
