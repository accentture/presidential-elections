import { Candidate } from './candidate.interface';
import { Component, OnInit } from '@angular/core';
import { RenderCandidatesService } from './render-candidates.service';

@Component({
    selector: 'candidate-detail',
    templateUrl: './candidate-detail.component.html',
    styleUrls: ['./candidate-detail.component.scss'],
})
export class CandidateDetailComponent implements OnInit {
    candidate!: Candidate;
    constructor(private renderCandidatesService: RenderCandidatesService) {}

    ngOnInit(): void {
        this.obtainCandidate();
    }
    obtainCandidate() {
        this.renderCandidatesService.renderCandidate$.subscribe((response) => {
            this.candidate = response;
        });
    }
}
