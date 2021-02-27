const first_name = document.getElementsByClassName('first_name')[0]
const last_name = document.getElementsByClassName("last_name")[0]
const email = document.getElementsByClassName("email")[0]
const phone_number = document.getElementsByClassName("phone")[0]
const company_name = document.getElementsByClassName("company_name")[0]
const company_website = document.getElementsByClassName('company_website')[0]
const jop_title = document.getElementsByClassName("jop_title")[0]
const selectEmployees = document.getElementsByClassName("employees")[0]
const user = [first_name, last_name, email, phone_number, company_name, company_website, jop_title,selectEmployees]

first_name.onblur = function (e){
    const validationName =  /^[a-zA-Z ]{2,30}$/;

    if(!validationName.test(e.target.value)){
        first_name.classList.add('not-valid')
    } else {
        first_name.classList.replace('not-valid','valid')
    }
}

last_name.onblur = function (e){
    const validationName =  /^[a-zA-Z ]{2,30}$/;

    if(!validationName.test(e.target.value)){
        last_name.classList.add('not-valid')
    } else {
        last_name.classList.replace('not-valid','valid')
    }
}

email.onblur = function (e){
    const validationEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!validationEmail.test(e.target.value)){
        email.classList.add('not-valid')
    }else {
        email.classList.replace('not-valid','valid')
    }
}

phone_number.onblur = function (e){
    const validationPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if(!validationPhone.test(e.target.value)){
        phone_number.classList.add('not-valid')
    }else {
        phone_number.classList.replace('not-valid','valid')
    }
}

company_name.onblur = function (e){
    const validationName =  /^[a-zA-Z ]{2,30}$/;

    if(!validationName.test(e.target.value)){
        company_name.classList.add('not-valid')
    } else {
        company_name.classList.replace('not-valid','valid')
    }
}

company_website.onblur = function (e){
    const validationUrl = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

    if(!validationUrl.test(e.target.value)){
        company_website.classList.add('not-valid')
    }else{
        company_website.classList.replace('not-valid','valid')
    }
}

jop_title.onblur = function (e){
    const validationName =  /^[a-zA-Z ]{2,30}$/;

    if(!validationName.test(e.target.value)){
        jop_title.classList.add('not-valid')
    } else {
        jop_title.classList.replace('not-valid','valid')
    }
}

selectEmployees.onblur =function (e){
    const valSelectEmp = selectEmployees.value
        // console.log(valSelectEmp)
    if(valSelectEmp==='disabled selected'){
        selectEmployees.classList.add('not-valid-select')
    } else {
        selectEmployees.classList.replace('not-valid-select','valid')
    }
}

const btn = document.getElementById("submit");
btn.addEventListener('click', () => {
    user.forEach(function (item) {
        const x = item.value
        if (x === '') {
            item.classList.add('not-valid')
        }else if(x === 'disabled selected' ){
            item.classList.add('not-valid-select')
        }
         // console.log(item.lastChild)
    });
});