import { Component, OnInit, Output, EventEmitter } from '@angular/core';

//images
import { IMAGE_LOGOUT } from './user-logout.const';

@Component({
    selector: 'user-logout',
    templateUrl: './user-logout.component.html',
    styleUrls: ['./user-logout.component.scss'],
})
export class UserLogoutComponent implements OnInit {
    @Output() stateLogin = new EventEmitter<boolean>();

    imageForLogout = IMAGE_LOGOUT;
    constructor() {}

    ngOnInit(): void {}
    sendLogout() {
        this.stateLogin.emit(false);
    }
}
