import { CandidatesService } from './services/candidates.service';
import { Component, OnInit } from '@angular/core';
import { Candidate } from './candidate.interface';

@Component({
    selector: 'candidates-container',
    templateUrl: './candidates-container.component.html',
    styleUrls: ['./candidates-container.component.scss'],
})
export class CandidatesContainerComponent implements OnInit {
    candidates?: Candidate[];
    stateDetailContainer: string;

    constructor(private candidatesService: CandidatesService) {
        this.stateDetailContainer = 'displayPhoto';
    }

    ngOnInit(): void {
        this.obtainCandidates();
    }
    obtainCandidates() {
        this.candidatesService.getCandidates().subscribe(
            (response: Candidate[]) => {
                console.log(response);
                this.candidates = response;
            },
            (error) => {
                console.log(error);
            }
        );
    }
    updateState(currentState: boolean) {
        if (currentState === true) {
            this.stateDetailContainer = 'displayDetail';
        }
    }
}
