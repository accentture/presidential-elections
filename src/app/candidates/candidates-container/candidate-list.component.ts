import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Candidate } from './candidate.interface';
import { RenderCandidatesService } from './render-candidates.service';

@Component({
    selector: 'candidate-list',
    templateUrl: './candidate-list.component.html',
    styleUrls: ['./candidate-list.component.scss'],
})
export class CandidateListComponent implements OnInit, AfterViewInit {
    @Input() candidates!: Candidate[];
    @Output() changeState = new EventEmitter<boolean>();

    constructor(private renderCandidatesService: RenderCandidatesService) {}

    ngOnInit(): void {}
    ngAfterViewInit(): void {}
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
