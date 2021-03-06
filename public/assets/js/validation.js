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

let fields_validations = new Object();
fields_validations.first_name = /^[a-zA-Z ]{2,30}$/;
fields_validations.last_name = /^[a-zA-Z ]{2,30}$/;
fields_validations.job_title = /^[a-zA-Z ]{2,30}$/;
fields_validations.company_name = /^[a-zA-Z ]{2,30}$/;
fields_validations.employees = /disabled selected/; // disabled selected mean: values select option
fields_validations.phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; //regular expression for mobile_number
fields_validations.email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
fields_validations.company_website = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i');// fragment locator
// obj = new Object();

// onblur function validation
form.addEventListener("blur", function (event) {
    let regex = (fields_validations[event.target.id].test(event.target.value))
    // console.log(re)
    // console.log(event.target.value)
    if (Object.is(regex, false)) {
        event.target.className = ('not-valid')
    } else {
        event.target.className = ('valid')
    }
}, true);
//send data as JSON
const user = [first_name, last_name, email, phone_number, company_name, company_website, job_title, employees] //array of all field form
const btn = document.getElementById('submit');
btn.addEventListener('click', (registerUser) => {//onclick button submit
    const first = first_name.value
    const second_name = last_name.value
    const mail = email.value
    const phone = phone_number.value
    const company = company_name.value
    const companysite = company_website.value
    const job = job_title.value
    const emp = employees.value
    user.forEach(async function (item) {//foreach of all field
        // console.log(item.value)
        const inputValue = item.value
        
        if (inputValue === '') {
            item.classList.add('not-valid')
        } else if (item.value === 'disabled selected') {
            item.classList.add('not-valid-select')
        }
        
        const result = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first, second_name, mail, phone, company, companysite, job, emp
            })
        }).then((res) => res.json())
        console.log(result)
    });
});

