import { EnumerartionalFieldType, FieldGroup, NumericalFieldType } from "../models/fieldType.model";

export const FIELD_GROUP = [
  new FieldGroup('Positions',
    [new NumericalFieldType('ISIN'), new NumericalFieldType('MV'), new NumericalFieldType('MV Weight'), new EnumerartionalFieldType('Sector', ['IT', 'Communications', 'Staples', 'Discretionary', 'Financial', 'Real Estate', 'Industrials', 'Energy', 'Materials', 'Telecommunications', 'Health']), new EnumerartionalFieldType('Country', ['USA', 'China', 'Spain']), new EnumerartionalFieldType('Region', ['Europe', 'Asia Pacific', 'North America', 'Midde East & Africa', 'Latin America']), new NumericalFieldType('Weighted Return')]
  ),
  new FieldGroup('ESG', [new NumericalFieldType('ESG Score'), new NumericalFieldType('ESG Rating'), new NumericalFieldType('E Score'), new NumericalFieldType('S Score'), new NumericalFieldType('G Score'), new NumericalFieldType('Carbon Footprint'), new NumericalFieldType('Scope 1'), new NumericalFieldType('Scope 2'), new NumericalFieldType('Scope 3'), new NumericalFieldType('Weighted Average ESG'), new NumericalFieldType('Weighted Average E'), new NumericalFieldType('Weighted Average S'), new NumericalFieldType('Weighted Average G'), new NumericalFieldType('ESG Score Trend Monthly'), new NumericalFieldType('ESG Score Trend Yearly'), new NumericalFieldType('ESG BMK Diff'), new NumericalFieldType('E BMK Diff'), new NumericalFieldType('S BMK Diff'), new NumericalFieldType('G BMK Diff')]),
  new FieldGroup('Financial', [new NumericalFieldType('Negative MTD'), new NumericalFieldType('Negative YTD'), new NumericalFieldType('Negative P/E'), new NumericalFieldType('Negative EPS')]),
  new FieldGroup('Incidents', [new NumericalFieldType('Major Incidents'), new NumericalFieldType('Minor Incidents')]),
  new FieldGroup('Controversies', [new NumericalFieldType('Major Controversies'), new NumericalFieldType('Minor Controversies')]),
];
