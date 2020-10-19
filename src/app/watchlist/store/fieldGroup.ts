export abstract class FieldType {
  constructor(public label: string, public conditions: string[], public inputs?: string[]) { }
}

export class NumericalFieldType extends FieldType {
  constructor(public label: string) {
    super(label, ['TOP', 'BOTTOM', '<', '<=', '>', '>=', '=']);
  }
}

export class EnumerartionalFieldType extends FieldType {
  constructor(public label: string, public inputs: string[]) {
    super(label, ['IN', 'NOT IN'], inputs);
  }
}

export class IncidentFieldType extends EnumerartionalFieldType {
  constructor(public label: string) {
    super(label,
      [
        '1. Climate Change, GHG Emissions',
        '2. Local Pollution',
        '3.Controversial Product Use',
        '4. Violations of International Standards',
        '5. Supply Chain Issues',
        '6. Violations of National Legislation',
        '7. Products (Health and Environment Safety)',
        '8. Impacts on Environment',
        '9. Overuse and Wasting of Resources',
        '10. Animal Mistreatment',
        '11. Waste Issues',
        '12. Human Rights and Corporate Complicity',
        '13. Impacts on Communities',
        '14. Local Participation Issues',
        '15. Social Discriminations',
        '16. Freedom of Association and Collective Bargaining',
        '17. Discrimination in Employment',
        '18. Forced Labor',
        '19. Child Labor',
        '20. Occupational Health and Safety Issues',
        '21. Poor Employment Conditions',
        '22. Corruption, Bribery, Extortion, and Money Laundering',
        '23. Executive Compensation',
        '24. Fraud',
        '25. Misleading Communication',
        '26. Tax Evasion',
        '27. Tax Optimization',
        '28. Anti-Competitive Practices'
      ]
    );
  }
}

export class ControversyFieldType extends EnumerartionalFieldType {
  constructor(public label: string) {
    super(label,
      [
        '1. Abusive/Illegal Fishing',
        '2. Access to products and services',
        '3. Agricultural Commodity Speculation',
        '4. Airborne pollutants',
        '5. Alcohol',
        '6. Animal Transportation',
        '7. Artic Drilling',
        '8. Asbestos',
        '9. Automatic and semi-automatic weapons',
        '10. Biological Weapons',
        '11. Chemical Weapons',
        '12. Cluster Munitions',
        '13. Coal fired power plants',
        '14. Conflict Minerals',
        '15. Coral Reefs',
        '16. Cyberattacks',
        '17. Deep Sea Drilling',
        '18. Depleted Uranium Munitions',
        '19. Diamonds',
        '20. Drones',
        '21. Endangered Species',
        '22. Energy Management',
        '23. Epidemics/Pandemics',
        '24. Forest Burning',
        '25. Fracking',
        '26. Fur and Exotic Animal Skins',
        '27. Gambling',
        '28. Gender Inequality',
        '29. Genetically Modified Organisms',
        '30. Genocide/Ethnic Cleansing',
        '31. Greenhouse Gas Emissions',
        '32. High Conservation Value Forests',
        '33. Human Trafficking',
        '34. Hydropower (dams)',
        '35. Illegal Logging',
        '36. Indigenous People',
        '37. Involuntary Resettlement',
        '38. Land Grabbing',
        '39. Land Mines',
        '40. Lobbying',
        '41. Marijuana/ Cannabis',
        '42. Migrant Labor',
        '43. Monocultures',
        '44. Mountaintop Removal Mining',
        '45. Negligence',
        '46. Nuclear Power',
        '47. Nuclear Weapons',
        '48. Offshore Drilling',
        '49. Oil Sands',
        '50. Palm Oil',
        '51. Plastics',
        '52. Pornography',
        '53. Predatory Lending',
        '54. Privacy Violations',
        '55. Protected Areas',
        '56. Racism/Racial Inequality',
        '57. Rare Earths',
        '58. Sand Mining and Dredging',
        '59. Seabed Mining',
        '60. Security Service',
        '61. Ship Breaking and Scrapping',
        '62. Soy',
        '63. Tax Havens',
        '64. Tobacco',
        '65. Wastewater Management',
        '66. Water Management',
        '67. Water Scarcity',
      ]
    );
  }
}

export class FieldGroup {
  constructor(public label: string, public fields: FieldType[]) { }
}

export const FIELD_GROUP = [
  new FieldGroup('Positions',
    [new NumericalFieldType('ISIN'), new NumericalFieldType('MV'), new NumericalFieldType('MV Weight'), new EnumerartionalFieldType('Sector', ['IT', 'Communications', 'Staples', 'Discretionary', 'Financial', 'Real Estate', 'Industrials', 'Energy', 'Materials', 'Telecommunications', 'Health']), new EnumerartionalFieldType('Country', ['USA', 'China', 'Spain']), new EnumerartionalFieldType('Region', ['Europe', 'Asia Pacific', 'North America', 'Midde East & Africa', 'Latin America']), new NumericalFieldType('Weighted Return')]
  ),
  new FieldGroup('ESG', [new NumericalFieldType('ESG Score'), new NumericalFieldType('ESG Rating'), new NumericalFieldType('E Score'), new NumericalFieldType('S Score'), new NumericalFieldType('G Score'), new NumericalFieldType('Carbon Footprint'), new NumericalFieldType('Scope 1'), new NumericalFieldType('Scope 2'), new NumericalFieldType('Scope 3'), new NumericalFieldType('Weighted Average ESG'), new NumericalFieldType('Weighted Average E'), new NumericalFieldType('Weighted Average S'), new NumericalFieldType('Weighted Average G'), new NumericalFieldType('ESG Score Trend Monthly'), new NumericalFieldType('ESG Score Trend Yearly'), new NumericalFieldType('ESG BMK Diff'), new NumericalFieldType('E BMK Diff'), new NumericalFieldType('S BMK Diff'), new NumericalFieldType('G BMK Diff')]),
  new FieldGroup('Financial', [new NumericalFieldType('Negative MTD'), new NumericalFieldType('Negative YTD'), new NumericalFieldType('Negative P/E'), new NumericalFieldType('Negative EPS')]),
  new FieldGroup('Incidents', [new NumericalFieldType('Major Incidents'), new NumericalFieldType('Minor Incidents')]),
  new FieldGroup('Controversies', [new NumericalFieldType('Major Controversies'), new NumericalFieldType('Minor Controversies')]),
];


