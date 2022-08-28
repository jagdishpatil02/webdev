import { HasFormatter } from "../interfaces/hasformatter.js"

export class Payment implements HasFormatter{
  
    constructor(readonly recipient: string,
        readonly details: string, public amount: number){
    }

    format() { 
        return ` ${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}
