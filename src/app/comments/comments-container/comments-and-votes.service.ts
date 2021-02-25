import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//app
import { GLOBAL } from 'src/app/core/global';

@Injectable({
    providedIn: 'root',
})
export class CommentsAndVotesService {
    private apiUrl: string = GLOBAL.url;
    constructor(private httpClient: HttpClient) {}
    checkUser(candidateId: string) {
        let user = localStorage.getItem('data_user');

        if (user) {
            this.saveVote(candidateId).subscribe(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    console.log(error);
                }
            );
        }
        console.log(user);
        return;
    }
    saveVote(candidateId: string) {
        console.log(candidateId);
        let user = {
            id: 1,
            names: 'Jonathan',
            surnames: 'Diaz Mollocondo',
            emailOrMobileNumber: 'lordgelsin26@gmail.com',
            password: 'ironman',
            dateOfBirth: '26/05/1996',
            gender: 'masculino',
            favorite: candidateId,
        };

        let candidatefavorite = {
            favorite: candidateId,
        };

        let params = JSON.stringify(candidatefavorite);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.httpClient.patch(this.apiUrl + 'users/1', params, { headers: headers });
    }
    obtainComments() {
        let candidate = {
            candidate_id: 1,
        };
        let params = JSON.stringify(candidate);

        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.httpClient.get(`${this.apiUrl}commet-collection/`);
    }
}
