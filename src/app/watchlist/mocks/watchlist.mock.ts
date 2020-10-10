import { LogicalContainer, Rule, Watchlist } from './../models/watchlist.model';

export let watchlist1 = new Watchlist(
  'Watchlist 1',
  '(`ESG Score` < 50 && `Sector` IN (\'Communications\', \'IT\') && `ESG BMK Diff` < 0 && `E BMK Diff` < 0) || (`S BMK Diff` < 0 && `Child Labor` > 0 && `ESG Score` BOTTOM 5)',
  new Date(2020, 8, 22, 15, 0, 0),
  new LogicalContainer(
    'OR',
    null,
    [
      new LogicalContainer(
        'AND',
        [
          new Rule('ESG Score', '<', '50'),
          new Rule('Sector', 'IN', '(\'Communications\', \'IT\')'),
          new Rule('ESG BMK Diff', '<', '0'),
          new Rule('E BMK Diff', '<', '0'),
        ]
      ),
      new LogicalContainer(
        'AND',
        [
          new Rule('S BMK Diff', '<', '0'),
          new Rule('Child Labor', '>', '0'),
          new Rule('ESG Score', 'BOTTOM', '5'),
        ]
      )
    ]
  ),
  [
    new Rule('ESG Score', '<', '50'),
    new Rule('Sector', 'IN', '(\'Communications\', \'IT\')'),
    new Rule('ESG BMK Diff', '<', '0'),
    new Rule('E BMK Diff', '<', '0'),
    new Rule('S BMK Diff', '<', '0'),
    new Rule('Child Labor', '>', '0'),
    new Rule('ESG Score', 'BOTTOM', '5'),
  ]
);
