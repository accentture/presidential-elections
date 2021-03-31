import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThreatCareerPathService {
    constructor() {}
    orderAllLaboralExperiencies(laboralExperiencies: string) {
        const laboralExperiencieSplited: string[] = laboralExperiencies.split(',');
        this.serializateLaboralExperiencie(laboralExperiencieSplited);
    }
    serializateLaboralExperiencie(laboralExperiencieCollection: string[]) {
        let laboralExperiencieSerialized: any = {};

        for (let job in laboralExperiencieCollection) {
            let descriptionValueCollection = laboralExperiencieCollection[job].split('%');
            laboralExperiencieSerialized[job] = descriptionValueCollection;

            laboralExperiencieSerialized[job] = this.addDescriptionToJobs(laboralExperiencieSerialized[job]);
        }
        console.log(laboralExperiencieSerialized);
        return laboralExperiencieSerialized;
    }
    addDescriptionToJobs(valueDescriptionCollection: string[]) {
        const descriptionsCollection = ['Centro de trabajo', 'Ocupación', 'Periodo'];
        let jobDescribed: any = {};

        for (let description in valueDescriptionCollection) {
            jobDescribed[descriptionsCollection[description]] = valueDescriptionCollection[description].trim();
        }
        return jobDescribed;
    }
}
