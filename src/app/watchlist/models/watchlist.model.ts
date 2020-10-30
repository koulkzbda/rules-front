import { FieldType } from './fieldType.model';

export class Watchlist {
  public label?: string;
  public globalExpression?: string;
  public updatedAt?: Date;
  public mainContainer?: LogicalContainer;
  public ruleSet?: Rule[];
  public id?: number;
  constructor(
    label?,
    globalExpression?,
    updatedAt?,
    mainContainer?,
    ruleSet?,
    //backend will walk through the mainContainer tree to create this array
    //composed with each leaves
    id?
  ) {
    this.label = label;
    this.globalExpression = globalExpression;
    this.updatedAt = updatedAt;
    this.mainContainer = mainContainer == null ? new LogicalContainer() : mainContainer;
    this.ruleSet = ruleSet == null ? [] : ruleSet;
    this.id = id;
  }
  getId(): string {
    return this.id ? this.id.toString() : '';
  }

  updateSimpleWatchlistLabel(): void {
    this.label = `${this.ruleSet[0].fieldType.label} ${this.ruleSet[0].condition} ${this.ruleSet[0].getInputAsString()}`;
  }
}

export class LogicalContainer {
  static nbOfInstances = 0;
  public currentInstance: number;
  public type = 'AND';
  public rules = [];
  public containers = [];
  constructor(
    type?: string,
    rules?: Rule[],
    containers?: LogicalContainer[]
  ) {
    LogicalContainer.nbOfInstances += 1;
    this.currentInstance = LogicalContainer.nbOfInstances;
    this.type = type == null ? 'AND' : type;
    this.rules = rules == null ? [] : rules;
    this.containers = containers == null ? [] : containers;
  }

  getOppositeType(): string {
    return this.type === 'AND' ? 'OR' : 'AND';
  }
}

export class Rule {
  constructor(
    public fieldType?: FieldType,
    public condition?: string,
    public input?: string[]
  ) { }

  getInputAsString(): string {
    if (this.input.length > 1) {
      return this.input.join(', ');
    }
    return this.input[0];
  }
}
