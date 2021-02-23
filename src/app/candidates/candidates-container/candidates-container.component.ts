import { Component, OnInit } from '@angular/core';
import { Candidate } from './candidate.interface';
import { presidentialCandidates } from './candidates-mock';

@Component({
    selector: 'candidates-container',
    templateUrl: './candidates-container.component.html',
    styleUrls: ['./candidates-container.component.scss'],
})
export class CandidatesContainerComponent implements OnInit {
    candidates: Candidate[] = presidentialCandidates;
    stateDetailContainer: string;

    constructor() {
        this.stateDetailContainer = 'displayPhoto';
    }

    ngOnInit(): void {}
    updateState(currentState: boolean) {
        if (currentState === true) {
            this.stateDetailContainer = 'displayDetail';
        }
    }
}
