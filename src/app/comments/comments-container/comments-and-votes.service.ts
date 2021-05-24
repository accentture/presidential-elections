import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

//app
import { GLOBAL } from 'src/app/core/global';

@Injectable({
    providedIn: 'root',
})
export class CommentsAndVotesService {
    private apiUrl: string = GLOBAL.url;
    private nameUserLocalStorage: string = 'data_user';
    private lastVoteLocalStorage: string = 'last_vote_id';

    constructor(private http: HttpClient) {}
    checkUser(candidateId: string) {
        const user = this.getUserFromLocalStorage();

        if (user) {
            this.saveVote(candidateId, user.user_profile.id).subscribe(
                (response: Object | any) => {
                    console.log(response);
                    if (response.vote) {
                        this.saveLastVoteInLocalStorage(response.vote);
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
        }
        return;
    }
    private saveLastVoteInLocalStorage(lastVoteId: number) {
        const previousVote = JSON.parse(localStorage.getItem(this.lastVoteLocalStorage) || '{}');
        console.log(previousVote);
        if (previousVote !== '{}') {
            localStorage.removeItem(this.lastVoteLocalStorage);
        }
        localStorage.setItem(this.lastVoteLocalStorage, JSON.stringify(lastVoteId));
    }
    getLastVoteFromLocalStorage() {
        const lastVote: any = JSON.parse(localStorage.getItem(this.lastVoteLocalStorage) || '{}');
        return lastVote;
    }
    getUserFromLocalStorage() {
        const user: any = JSON.parse(localStorage.getItem(this.nameUserLocalStorage) || '{}');
        return user;
    }
    saveVote(candidateId: string, userId: number) {
        //behavior of formData is equal to body of POSTMAN
        const formData = new FormData();
        formData.append('vote', candidateId);

        //without headers
        return this.http.patch(`${this.apiUrl}favorite-candidate/${userId}/`, formData);
    }
    obtainCommentsFromAPI(candidateId: number, category_comment: number | undefined) {
        return this.http.get<any>(`${this.apiUrl}commet-collection/${candidateId}/${category_comment}/`);
    }

    saveComment(comment: string, candidateId: string, category_comment: number) {
        const user = this.getUserFromLocalStorage();
        const createComment = {
            email: user.user.email,
            candidate_id: candidateId,
            content_comment: comment,
            category_comment_id: category_comment,
        };

        const params = JSON.stringify(createComment);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post(`${this.apiUrl}create-comment/`, params, { headers: headers });
    }
}

