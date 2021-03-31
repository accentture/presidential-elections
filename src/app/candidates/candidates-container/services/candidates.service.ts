import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

//app
import { GLOBAL } from 'src/app/core/global';
import { Candidate } from '../candidate.interface';

@Injectable({
    providedIn: 'root',
})
export class CandidatesService {
    private apiUrl: string = GLOBAL.url;

    constructor(private http: HttpClient) {}
    getCandidates(): Observable<Candidate[] | any> {
        return this.http.get(this.apiUrl + 'get-information-candidates/');
    }
}
