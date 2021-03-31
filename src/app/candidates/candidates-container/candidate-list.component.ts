import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Candidate } from './candidate.interface';
import { RenderCurrentCandidatesService } from './services/render-current-candidates.service';

@Component({
    selector: 'candidate-list',
    templateUrl: './candidate-list.component.html',
    styleUrls: ['./candidate-list.component.scss'],
})
export class CandidateListComponent implements OnInit {
    @Input() candidates!: Candidate[];
    @Output() changeState = new EventEmitter<boolean>();
    private lastCandidateClicked!: ElementRef | any;

    constructor(private renderCandidatesService: RenderCurrentCandidatesService) {}

    ngOnInit(): void {}

    displayDataDetailed(names: string) {
        let candidate = this.candidates.filter((candidate: Candidate) => candidate.names == names);

        this.renderCandidatesService.sendCandidate(candidate[0]);
    }
    loadDetailComponent() {
        this.changeState.emit(true);
    }
    paintCandidateClicked(event: any) {
        const candidateClicked = event.target;
        if (this.lastCandidateClicked) {
            this.lastCandidateClicked.classList.remove('candidateClicked');
        }
        this.lastCandidateClicked = candidateClicked;
        this.lastCandidateClicked.classList.add('candidateClicked');
    }
}
