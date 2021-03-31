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
        const user = JSON.parse(localStorage.getItem('data_user') || '{}').user.email;
        if (user) {
            this.userLoged = true;
        }
    }
    updateStateLogin(data?: any) {
        this.userLoged = data;
        this.router.navigate(['/iniciar-sesion']);
    }
}
