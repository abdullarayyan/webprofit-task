//declare variable
const form = document.getElementById('form')
const first_name = document.getElementById('first_name')
const last_name = document.getElementById("last_name")
const email = document.getElementById("email")
const phone_number = document.getElementById("phone")
const company_name = document.getElementById("company_name")
const company_website = document.getElementById('company_website')
const job_title = document.getElementById("job_title")
const employees = document.getElementById("employees")

//declare regular expression
const validationName =  /^[a-zA-Z ]{2,30}$/; //regular expression for name & title
//regular expression for email
const validationEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validationPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; //regular expression for mobile_number
//regular expression for Url website
const validationUrl = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
// console.log(form.classList)

// onblur function validation
form.addEventListener("blur", function (event){
    event.target.className=('valid')
    //validation fname ,lastnme ,coSize and job_title
     if(event.target.id=='first_name'||
         event.target.id=='last_name'||
         event.target.id=='company_name'||
         event.target.id=='job_title'){
        if(!validationName.test(event.target.value)){
            event.target.className=('not-valid')
        }
     }
     //validation email
     else if(event.target.id=='email'){
         if(!validationEmail.test(event.target.value)){
             event.target.className=('not-valid')
         }
     }
     //validation phone
     else if(event.target.id=='phone'){
         if(!validationPhone.test(event.target.value)){
             event.target.className=('not-valid')
         }
     }
     //validation company_website
     else if(event.target.id=='company_website'){
         if(!validationUrl.test(event.target.value)){
             event.target.className=('not-valid')
         }
     }
     //validation option employees selector
     else if(event.target.id=='employees'){
         const valSelectEmp = employees.value
         // console.log(valSelectEmp)
         if(valSelectEmp==='disabled selected'){// disabled selected mean: values select option
             event.target.className=('not-valid-select')
         }
     }
 },true);

const user = [first_name, last_name, email, phone_number, company_name, company_website, job_title,employees] //array of all field form
const btn = document.getElementById("submit");
btn.addEventListener('click', () => {//onclick button submit
    user.forEach(function (item) {//foreach of all field
        // console.log(item.value)
        const inputValue = item.value    //give a default value at all element
        if (inputValue === '') {
            item.classList.add('not-valid')
        }else if(inputValue === 'disabled selected'){
            item.classList.add('not-valid-select')
        }
    });
});


