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
  constructor(
    public type?: string,
    public rules?: Rule[],
    public containers?: LogicalContainer[]
  ) { }
}

export class Rule {
  constructor(
    public field?: string,
    public condition?: string,
    public input?: string
  ) { }
}
