export class Watchlist {
  constructor(
    public label?: string,
    public globalExpression?: string,
    public updatedAt?: Date,
    public mainContainer?: LogicalContainer,
    public ruleSet?: Rule[]
    //backend will walk through the mainContainer tree to create this array
    //composed with each leaves
  ) { }
}

export class LogicalContainer {
  static nbOfInstances = 0;
  public currentInstance: number;
  constructor(
    public type?: string,
    public rules?: Rule[],
    public containers?: LogicalContainer[]
  ) {
    LogicalContainer.nbOfInstances += 1;
    this.currentInstance = LogicalContainer.nbOfInstances;
  }
}

export class Rule {
  constructor(
    public field?: string,
    public condition?: string,
    public input?: string
  ) { }
}
