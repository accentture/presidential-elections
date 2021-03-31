import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

//services
import { RenderCurrentCandidatesService } from '../../candidates/candidates-container/services/render-current-candidates.service';
import { Candidate } from 'src/app/candidates/candidates-container/candidate.interface';

@Component({
    selector: 'comments-container',
    templateUrl: './comments-container.component.html',
    styleUrls: ['./comments-container.component.scss'],
})
export class CommentsContainerComponent implements OnInit, AfterViewInit {
    @ViewChild('commentsCandidate', { static: false }) commentsCandidate!: ElementRef; //to solve problem between ngIf and template reference variable

    categoryComment: number = 1;
    candidate!: Candidate;
    namesLastCandidateViewed: any;
    lastCategoryBox!: ElementRef | any;

    constructor(private renderCandidatesService: RenderCurrentCandidatesService) {}
    ngOnInit(): void {}
    ngAfterViewInit() {
        this.obtainCandidate();
    }
    obtainCandidate() {
        this.renderCandidatesService.renderCandidate$.subscribe((response: Candidate) => {
            this.candidate = response;

            this.paintBoxCategory(false, response.names);
            this.settingLastCandidateClicked(response);
        });
        return;
    }
    settingLastCandidateClicked(response: Candidate | any) {
        if (this.namesLastCandidateViewed == undefined || this.namesLastCandidateViewed !== response['Prenombres']) {
            this.namesLastCandidateViewed = response.names;
        }
        return;
    }

    paintBoxCategory(event?: any, namesCandidate?: string) {
        if (this.lastCategoryBox) {
            this.lastCategoryBox.classList.remove('currentCategory');
        }

        //if click is used
        if (event) {
            this.lastCategoryBox = event.target;
        } else {
            this.paintBoxCategoryByDefaut(namesCandidate);
        }
        this.lastCategoryBox.classList.add('currentCategory');
        return;
    }
    paintBoxCategoryByDefaut(namesCandidate?: string) {
        //checking if  candidate never was not clicked  or the last candidate was not clicked again
        if (this.namesLastCandidateViewed === undefined || this.namesLastCandidateViewed !== namesCandidate) {
            const categoryByDefault = document.querySelector('.boxCategoryByDefaut');
            this.lastCategoryBox = categoryByDefault;
        }
        return;
    }
}
