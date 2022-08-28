import { HasFormatter } from "../interfaces/hasformatter.js"

export class Invoice implements HasFormatter{
  
    constructor(readonly client: string,
        readonly details: string, public amount: number){
    }

    format() { 
        return ` ${this.client} owes ${this.amount} for ${this.details}`;
    }
}
