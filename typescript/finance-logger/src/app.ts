import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
import { hasFormatter } from "./interfaces/hasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toForm = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let doc: hasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, "end");
});
