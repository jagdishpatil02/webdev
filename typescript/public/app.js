import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/listTemplate.js";
// let docOne : HasFormatter;
// let docTwo : HasFormatter;
// docOne = new Invoice ("tata", "web work", 2500);
// docTwo = new Payment("adani", "design work", 2000);
// let docs : HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs)
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value == "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, 'end');
});
