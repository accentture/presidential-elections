import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Candidate } from './candidate.interface';
import { RenderCandidatesService } from './render-candidates.service';

@Component({
    selector: 'candidate-list',
    templateUrl: './candidate-list.component.html',
    styleUrls: ['./candidate-list.component.scss'],
})
export class CandidateListComponent implements OnInit {
    @Input() candidates!: Candidate[];
    @Output() changeState = new EventEmitter<boolean>();

    constructor(private renderCandidatesService: RenderCandidatesService) {}

    ngOnInit(): void {}

    displayDataDetailed(prenombresCandidate: string) {
        let candidate = this.candidates.filter(
            (candidate: Candidate) => candidate['Prenombres'] == prenombresCandidate
        );

        this.renderCandidatesService.sendCandidate(candidate[0]);
    }
    loadDetailComponent() {
        this.changeState.emit(true);
    }
}
