import { hasFormatter } from "../interfaces/hasFormatter";

export class Payment implements hasFormatter {
  constructor(
    readonly recipent: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return ` ${this.recipent} is owed ${this.amount} for ${this.details}`;
  }
}
