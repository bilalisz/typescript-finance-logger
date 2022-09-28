import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/LIstTemplate.js";
import { Payment } from "./classes/Payment.js";
import { getElement } from "./utilities/index.js";
// ****************(get elements)**********************************************************************************************
// ****************(get elements)**********************************************************************************************
const form = getElement("form");
const type = getElement("#type");
const toFrom = getElement('#tofrom');
const details = getElement('#details');
const amount = getElement('#amount');
const button = getElement("button");
const ul = getElement("ul");
const li = new ListTemplate(ul);
// ****************(attatch Events)**********************************************************************************************
// amount.addEventListener("change",(e:Event)=>{
//     if((e.target as HTMLInputElement).value){
//         button.disabled=false
//     }
// })
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (details.value && amount.value && toFrom.value) {
        if (type.value === 'invoice') {
            doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        }
        else {
            doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
        }
        li.render(doc, type.value, 'end');
        details.value = "";
        amount.value = "";
        toFrom.value = "";
    }
});
