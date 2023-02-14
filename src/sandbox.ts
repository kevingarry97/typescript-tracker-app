// Interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): void;
// }

// const me: IsPerson = {
//     name: 'Shaun',
//     age: 30,
//     spend(amount: number): number {
//         console.log('Amount ', amount)
//         return amount;
//     },
//     speak(language: string): string {
//         console.log('Language ', language)
//         return language
//     }
// }

import { ListTemplate } from "./classes/listTemplate.js";
import { Invoice } from "./classes/Invoice.js";
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/hasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'Web Work', 500);
// docTwo = new Payment('mario', 'plumbing work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// const invOne = new Invoice('mario', 'work on mario website', 250);
// const invTwo = new Invoice('luigi', 'work on luigi website', 300);

// let invoices: Invoice[] = [];

// invoices.push(invOne);
// invoices.push(invTwo)

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end');
})