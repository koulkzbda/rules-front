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
  constructor(
    public label?: string,
    public comment?: string,
    public createdAt?: Date,
    public complianceRules?: ComplianceRule[]
  ) { }
}

