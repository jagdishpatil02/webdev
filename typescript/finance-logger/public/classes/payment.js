export class Payment {
    constructor(recipent, details, amount) {
        this.recipent = recipent;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return ` ${this.recipent} is owed ${this.amount} for ${this.details}`;
    }
}
