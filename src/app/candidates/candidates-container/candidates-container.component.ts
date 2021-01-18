import { Component, OnInit } from '@angular/core';
import { Candidate } from './candidate.interface';
import { presidentialCandidates } from './candidates-mock';

@Component({
    selector: 'candidates-container',
    templateUrl: './candidates-container.component.html',
    styleUrls: ['./candidates-container.component.scss'],
})
export class CandidatesContainerComponent implements OnInit {
    candidate: Candidate[] = presidentialCandidates;
    constructor() {}

    ngOnInit(): void {}
}
