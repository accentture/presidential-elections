import { Candidate } from './candidate.interface';
import { Component, OnInit } from '@angular/core';

//services
import { ThreatCareerPathService } from './services/threat-career-path.service';
import { RenderCurrentCandidatesService } from './services/render-current-candidates.service';

@Component({
    selector: 'candidate-detail',
    templateUrl: './candidate-detail.component.html',
    styleUrls: ['./candidate-detail.component.scss'],
})
export class CandidateDetailComponent implements OnInit {
    candidate!: Candidate;
    constructor(
        private renderCandidatesService: RenderCurrentCandidatesService,
        private threatCareerPathService: ThreatCareerPathService
    ) {}

    ngOnInit(): void {
        this.obtainCandidate();
    }
    obtainCandidate() {
        this.renderCandidatesService.renderCandidate$.subscribe((response: Candidate) => {
            this.candidate = response;
            this.whatever(response.career_path);
        });
    }
    whatever(career_path: string) {
        this.threatCareerPathService.orderAllLaboralExperiencies(career_path);
    }
}
