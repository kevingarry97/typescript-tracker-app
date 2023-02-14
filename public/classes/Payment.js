// ### Approach 2
export class Payment {
    constructor(recipient, details, a) {
        this.recipient = recipient;
        this.details = details;
        this.amount = a;
    }
    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}
