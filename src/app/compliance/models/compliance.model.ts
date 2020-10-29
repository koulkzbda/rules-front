import { NumericalFieldType } from '../../watchlist/models/fieldType.model';
import { Watchlist } from './../../watchlist/models/watchlist.model';
export class ComplianceRuleGroup {
  constructor(
    public label?: string,
    public watchlists?: Watchlist[]
  ) { }
}

export class ComplianceRule {
  constructor(
    public group?: ComplianceRuleGroup,
    public rule?: Watchlist,
    public aggregation?: NumericalFieldType,
    public condition?: string,
    public regulationThreshold?: string,
    public warning?: number,
    public breach?: number
  ) {

  }
}

export class Compliance {
  public label?: string;
  public comment?: string;
  public createdAt?: Date;
  public complianceRules?: ComplianceRule[];
  public id?: number;
  constructor(
    label?: string,
    comment?: string,
    createdAt?: Date,
    complianceRules?: ComplianceRule[],
    id?: number
  ) {
    this.label = label;
    this.comment = comment;
    this.createdAt = createdAt;
    this.complianceRules = complianceRules ? complianceRules : [];
    this.id = id;
  }
}

