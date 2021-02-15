import { Component, OnInit } from '@angular/core';

//local
import { UserRegisterModel } from './user-register.model';
import { UserApiService } from './user-api.service';

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
    user: UserRegisterModel;

    dayCollection: number[] = [];
    yearCollection: number[] = [];

    //to create date of birth
    birthday: number = 0;
    monthOfBirthday: string = 'Mes';
    yearOfBirthday: number = 1950;

    status: string = 'failed';

    constructor(private userApiService: UserApiService) {
        this.user = new UserRegisterModel('', '', '', '', '', '');
        this.dayCollection = Array(31)
            .fill(0)
            .map((value, index) => index);

        this.yearCollection = Array(61)
            .fill(1950)
            .map((value, index) => (value += index++));
    }

    ngOnInit(): void {}
    onSubmit(paramsFormContac: any) {
        this.user.dateOfBirth = `${this.birthday}-${this.monthOfBirthday}-${this.yearOfBirthday}`;
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
