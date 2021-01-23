import { TestBed } from '@angular/core/testing';

import { RenderCandidatesService } from './render-candidates.service';

describe('BrotherComunicationService', () => {
    let service: RenderCandidatesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RenderCandidatesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
