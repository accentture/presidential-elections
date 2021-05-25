import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//service
import { StateUserService } from './core/services/state-user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'presidentialElection';
    userLoged: any = false;

    constructor(private router: Router, private stateUserService: StateUserService) {}
    ngOnInit() {
        this.stateUserService.updateStateUser$.subscribe((response: boolean) => {
            this.userLoged = response;
        });
        this.checkUserInLocalStorage();
    }
    checkUserInLocalStorage() {
        console.log(JSON.parse(localStorage.getItem('data_user') || '{}').user)
        const user = JSON.parse(localStorage.getItem('data_user') || '{}').user;
        if (user) {
            this.userLoged = true;
        }
    }
    updateStateLogin(data?: any) {
        this.userLoged = data;
        this.stateUserService.removeLoginFromLocalStorage();
        this.router.navigate(['/iniciar-sesion']);
    }
}
