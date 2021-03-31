import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

//local
import { Candidate } from '../candidate.interface';

@Injectable({
    providedIn: 'root',
})
export class RenderCurrentCandidatesService {
    private renderCandidateSource = new Subject<Candidate>();
    renderCandidate$ = this.renderCandidateSource.asObservable();

    constructor() {}

    sendCandidate(dataCandidate: Candidate) {
        this.renderCandidateSource.next(dataCandidate);
    }
}
