import { HasFormatter } from '../interfaces/hasFormatter.js'

// ### Approach 2
export class Payment implements HasFormatter {
    amount: number;
    
    constructor(readonly recipient: string, private details: string, a: number) {
        this.amount = a;
    }

    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`
    }
}