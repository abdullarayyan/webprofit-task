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

const fields_validations = {
    'first_name'        : /^[a-zA-Z ]{2,30}$/,
    'last_name'         : /^[a-zA-Z ]{2,30}$/,
    'job_title'         : /^[a-zA-Z ]{2,30}$/,
    'company_name'      : /^[a-zA-Z ]{2,30}$/,
    'employees'         : /disabled selected/, // disabled selected mean: values select option
    'phone_number'      : /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, //regular expression for mobile_number
    'email'             : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'company_website'   : new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'), // fragment locator
}
// onblur function validation
form.addEventListener("blur", function (event){
    event.target.className=('valid')//initial validation
    //validation fname ,lastnme ,coSize and job_title
     if(event.target.id=='first_name'||
         event.target.id=='last_name'||
         event.target.id=='company_name'||
         event.target.id=='job_title'){
        if(!fields_validations.first_name.test(event.target.value)||
            !fields_validations.last_name.test(event.target.value)||
            !fields_validations.company_name.test(event.target.value)||
            !fields_validations.job_title.test(event.target.value)){
            event.target.className=('not-valid')
        }
     }
    //validation email
     else if(event.target.id=='email'){
         if(!fields_validations.email.test(event.target.value)){
             event.target.className=('not-valid')
         }
     }
     //validation phone
     else if(event.target.id=='phone'){
         if(!fields_validations.phone_number.test(event.target.value)){
             event.target.className=('not-valid')
         }
     }
     //validation company_website
     else if(event.target.id=='company_website'){
         if(!fields_validations.company_website.test(event.target.value)){
             event.target.className=('not-valid')
         }
     }
     //validation option employees selector
     else if(event.target.id=='employees'){
         const valSelectEmp = employees.value
         // console.log(valSelectEmp)
         if(fields_validations.employees.test(event.target.value)){
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


