export class Electricity{
  id?: number;
  statementDate: Date;
  dayIndex: number;
  nightIndex: number;
  _links?: {
    self: {
      href: string
    },
    [s: string]: {
      href: string
    }
  };

}
