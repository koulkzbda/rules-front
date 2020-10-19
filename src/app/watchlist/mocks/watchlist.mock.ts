import { EnumerartionalFieldType, NumericalFieldType } from '../store/fieldGroup';
import { LogicalContainer, Rule, Watchlist } from './../models/watchlist.model';

export let watchlist1 = new Watchlist(
  'Watchlist 1',
  '(`ESG Score` < 50 && `Sector` IN (\'Communications\', \'IT\') && `ESG BMK Diff` < 0 && `E BMK Diff` < 0) || (`S BMK Diff` < 0 && `Major Incidents` > 0 && `ESG Score` BOTTOM 5)',
  new Date(2020, 8, 22, 15, 0, 0),
  new LogicalContainer(
    'OR',
    null,
    [
      new LogicalContainer(
        'AND',
        [
          new Rule(new NumericalFieldType('ESG Score'), '<', ['50']),
          new Rule(
            new EnumerartionalFieldType(
              'Sector',
              ['IT', 'Communications', 'Staples', 'Discretionary', 'Financial', 'Real Estate', 'Industrials', 'Energy', 'Materials', 'Telecommunications', 'Health']
            ),
            'IN',
            ['Communications', 'IT']
          ),
          new Rule(new NumericalFieldType('ESG BMK Diff'), '<', ['0']),
          new Rule(new NumericalFieldType('E BMK Diff'), '<', ['0']),
        ]
      ),
      new LogicalContainer(
        'AND',
        [
          new Rule(new NumericalFieldType('S BMK Diff'), '<', ['0']),
          new Rule(new NumericalFieldType('Major Incidents'), '>', ['0']),
          new Rule(new NumericalFieldType('ESG Score'), 'BOTTOM', ['5']),
        ]
      )
    ]
  ),
  [
    new Rule(new NumericalFieldType('ESG Score'), '<', ['50']),
    new Rule(
      new EnumerartionalFieldType(
        'Sector',
        ['IT', 'Communications', 'Staples', 'Discretionary', 'Financial', 'Real Estate', 'Industrials', 'Energy', 'Materials', 'Telecommunications', 'Health']
      ),
      'IN',
      ['Communications', 'IT']
    ),
    new Rule(new NumericalFieldType('ESG BMK Diff'), '<', ['0']),
    new Rule(new NumericalFieldType('E BMK Diff'), '<', ['0']),
    new Rule(new NumericalFieldType('S BMK Diff'), '<', ['0']),
    new Rule(new NumericalFieldType('Major Incidents'), '>', ['0']),
    new Rule(new NumericalFieldType('ESG Score'), 'BOTTOM', ['5']),
  ]
);
