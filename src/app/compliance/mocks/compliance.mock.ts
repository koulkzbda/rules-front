import { watchlist1 } from './../../watchlist/mocks/watchlist.mock';
import { EnumerartionalFieldType, NumericalFieldType } from './../../watchlist/models/fieldType.model';
import { LogicalContainer, Rule, Watchlist } from '../../watchlist/models/watchlist.model';
import { Compliance, ComplianceRule, ComplianceRuleGroup } from '../models/compliance.model';

export let ESGGroup = new ComplianceRuleGroup(
  'ESG',
  [
    new Watchlist(
      'Oil & Gas',
      'Sector IN (`Oil & Gas`)',
      new Date(2020, 9, 21, 13, 0, 0),
      new LogicalContainer(
        'AND',
        [new Rule(
          new EnumerartionalFieldType(
            'Sector',
            ['IT', 'Communications', 'Staples', 'Discretionary', 'Financial', 'Real Estate', 'Industrials', 'Energy', 'Materials', 'Telecommunications', 'Health', 'Oil & Gas']
          ),
          'IN',
          ['Oil & Gas']
        )]
      )
    ),
    new Watchlist(
      'ESG Score < 50',
      'ESG Score < 50',
      new Date(2020, 9, 21, 14, 0, 0),
      new LogicalContainer(
        'AND',
        [new Rule(new NumericalFieldType('ESG Score'), '<', ['50'])]
      )
    ),
    new Watchlist(
      'Carbon Footprint > 200',
      'Carbon Footprint > 200',
      new Date(2020, 9, 21, 14, 15, 0),
      new LogicalContainer(
        'AND',
        [new Rule(new NumericalFieldType('Carbon Footprint'), '>', ['200'])]
      )
    ),
    new Watchlist(
      'Child Labor',
      'Child Labor',
      new Date(2020, 9, 21, 14, 25, 0),
      new LogicalContainer(
        'AND',
        [new Rule(new NumericalFieldType('Child Labor'), '>', ['0'])]
      )
    ),
    new Watchlist(
      'Weighted Average ESG',
      'Weighted Average ESG',
      new Date(2020, 9, 21, 14, 35, 0),
      new LogicalContainer(
        'AND',
        [new Rule(new NumericalFieldType('Weighted Average ESG'), '<', ['50'])]
      )
    ),
  ]
);

export let UCITSGroup = new ComplianceRuleGroup(
  'UCITS',
  [
    new Watchlist(
      'TOP MV',
      'TOP MV 1',
      new Date(2020, 9, 21, 19, 0, 0),
      new LogicalContainer(
        'AND',
        [new Rule(new NumericalFieldType('MV'), 'TOP', ['1'])]
      )
    ),
    new Watchlist(
      'TOP MV 3',
      'TOP MV 3',
      new Date(2020, 9, 21, 19, 0, 0),
      new LogicalContainer(
        'AND',
        [new Rule(new NumericalFieldType('MV'), 'TOP', ['3'])]
      )
    ),
    new Watchlist(
      'TOP MV 5',
      'TOP MV 5',
      new Date(2020, 9, 21, 19, 0, 0),
      new LogicalContainer(
        'AND',
        [new Rule(new NumericalFieldType('MV'), 'TOP', ['5'])]
      )
    ),
  ]
);

export let CustomGroup = new ComplianceRuleGroup(
  'Custom Group',
  [watchlist1]
);

export let compliance1 = new Compliance(
  'Compliance 1',
  'Combination of ESG and UCITS',
  new Date(2020, 9, 21, 19, 0, 0),
  [
    new ComplianceRule(ESGGroup,
      ESGGroup.watchlists[0],
      new NumericalFieldType('MV Weight'),
      '>',
      'N/A',
      null,
      5),
    new ComplianceRule(ESGGroup, ESGGroup.watchlists[1], new NumericalFieldType('MV Weight'), '>', 'N/A', null, 10),
    new ComplianceRule(ESGGroup, ESGGroup.watchlists[2], new NumericalFieldType('MV Weight'), '>', 'N/A', null, 20),
    new ComplianceRule(ESGGroup, ESGGroup.watchlists[3], new NumericalFieldType('MV Weight'), '>=', 'N/A', null, 10),
    new ComplianceRule(ESGGroup, ESGGroup.watchlists[4], new NumericalFieldType('ESG Score'), '<', 'N/A', 70, 65),
    new ComplianceRule(UCITSGroup, UCITSGroup.watchlists[0], new NumericalFieldType('MV Weight'), '>=', 'N/A', null, 10),
    new ComplianceRule(UCITSGroup, UCITSGroup.watchlists[1], new NumericalFieldType('MV Weight'), '>=', 'N/A', null, 30),
    new ComplianceRule(UCITSGroup, UCITSGroup.watchlists[2], new NumericalFieldType('MV Weight'), '>=', 'N/A', 35, 40),
    new ComplianceRule(CustomGroup, CustomGroup.watchlists[0], new NumericalFieldType('MV Weight'), '>=', 'N/A', 55, 60),
  ],
  1
);
