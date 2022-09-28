
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/LIstTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { getElement } from "./utilities/index.js";

// ****************(get elements)**********************************************************************************************





// ****************(get elements)**********************************************************************************************
const form = getElement("form") as HTMLFormElement;
const type=getElement("#type") as HTMLSelectElement;
const toFrom=getElement('#tofrom')  as HTMLInputElement
const details=getElement('#details')  as HTMLInputElement
const amount=getElement('#amount')  as HTMLInputElement
const button= getElement("button")as HTMLButtonElement
const ul= getElement("ul")as HTMLUListElement;
const li=new ListTemplate(ul)


// ****************(attatch Events)**********************************************************************************************
// amount.addEventListener("change",(e:Event)=>{
//     if((e.target as HTMLInputElement).value){
//         button.disabled=false
//     }
    
// })
form.addEventListener("submit",(e:Event)=>{ 
   
    e.preventDefault()
    let doc:HasFormatter;
    if(details.value && amount.value && toFrom.value){
        
        if(type.value==='invoice'){
            doc=new Invoice(toFrom.value,details.value,amount.valueAsNumber)  
        }else{
            doc=new Payment(toFrom.value,details.value,amount.valueAsNumber)
        }
        li.render(doc,type.value,'end')
        details.value=""
        amount.value=""
        toFrom.value=""
    }
    

})




