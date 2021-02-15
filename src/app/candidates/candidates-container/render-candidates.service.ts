import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Candidate } from './candidate.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RenderCandidatesService {
    private renderCandidateSource = new Subject<Candidate>();
    renderCandidate$ = this.renderCandidateSource.asObservable();

    private url: string = 'http://localhost:3000/users';

    constructor(private http: HttpClient) {}

    sendCandidate(dataCandidate: Candidate) {
        this.renderCandidateSource.next(dataCandidate);
    }
    connectWithFakeServer(): Observable<any> {
        return this.http.get(this.url);
    }
}
