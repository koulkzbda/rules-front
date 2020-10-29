import { ComplianceRuleGroup } from './../models/compliance.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { compliance1, ESGGroup, UCITSGroup, CustomGroup } from './../mocks/compliance.mock';
import { Compliance } from 'src/app/compliance/models/compliance.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplianceService {

  protected compliance = new BehaviorSubject<Compliance>(new Compliance());

  get complianceObs(): Observable<Compliance> {
    return this.compliance.asObservable();
  }

  constructor(private http: HttpClient) { }

  transmitCompliance(complianceTransmitted: Compliance): void {
    this.compliance.next(complianceTransmitted);
  }

  getCompliance(complianceId: string): Compliance {
    return compliance1;
  }

  getComplianceNames(projectId: string): string[] {
    return ['Compliance 1'];
  }

  getComplianceGroup(projectId: string): ComplianceRuleGroup[] {
    return [ESGGroup, UCITSGroup, CustomGroup];
  }
}
