import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from './core/interfaces/user-response.interface';

//service
import { StateUserService } from './core/services/state-user.service';
import { UserApiService } from './core/services/user-api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'presidentialElection';
    userLoged: any = false;

    constructor(
        private router: Router, 
        private stateUserService: StateUserService,
        private userApiService:UserApiService) {}
    ngOnInit() {
        this.toLogUser()
        this.isUserLoged();
    }
    toLogUser(){
        this.stateUserService.stateUserUpdated().subscribe((response: boolean) => {
            this.userLoged = response;
        });
    }
    isUserLoged(){
        const user:UserResponse = this.userApiService.checkUserInLocalStorage()
        if (user) this.userLoged = true;
    }
    
    closeSession(newStateUser: boolean) {
        this.userLoged = newStateUser;
        this.stateUserService.removeLoginFromLocalStorage();
        this.router.navigate(['/iniciar-sesion']);
    }
}
