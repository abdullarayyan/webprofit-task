

var menu_a = document.querySelector('#menu-a');
var menu_b = document.querySelector('#menu-b');
var mm = document.querySelector('.mm');
var content = document.querySelector('.content');


menu_a.addEventListener('click', () => {

    showblock();
})

menu_b.addEventListener('click', () => {
    showblock();
})

function closeNav() {
    content.style.display = "block";
    mm.style.height = "0%";
}

function showblock() {
    content.style.display = "none";
    mm.style.height = "100%";
}


// validation form//

var first_name = document.getElementById("first_name");
var last_name = document.getElementById("last_name");
var email = document.getElementById("email");
var phone_number = document.getElementById("phone");
var company_name = document.getElementById("company_name");
var company_website = document.getElementById("company_website");
var selectEmployees = document.getElementById("employees");

var jop_title = document.getElementById("jop_title");
var faild = [first_name, last_name, company_name, company_website, jop_title, email, phone_number];

var submit = document.getElementById("submit");
submit.addEventListener('click', () => {

    for (var index = 0; index < faild.length; index++) {
        if (faild[index].className == "notvalid") {
            faild[index].className = "valid";
        }
    }
    selectEmployees.style.border = "1px solid black";
    Eroor(faild);
});



function Eroor(faild) {

    for (var index = 0; index < user.length; index++) {
        if (faild[index].value == "")
        {
            faild[index].className = "notvaild";
        }
        else if (faild[index].id == 'email')
        {
            var matchEmail = isEmail(faild[index].value);
            if (matchEmail == false) {
                email.className = "notvaild";
            }
        }
        else if (faild[index].id == 'phone_number')
        {
            var matchPhone = isPhone(faild[index].value);
            if (matchPhone == false) {
                phone_number.className = "notvaild";
            }
        }
    }

}


function Input(inputIndex) {
    faild[inputIndex].className = "valid";
    if (faild[inputIndex].value == "")
    {
        faild[inputIndex].className = "notvaild";
    }
    else if (faild[inputIndex].id == "email")
    {
        var emailuser = faild[inputIndex].value;
        var matchEmail = isEmail(emailuser);
        if (matchEmail == false) {
            faild[inputIndex].className = "notvaild";
        }
    }
    else if (faild[inputIndex].id == "phone_number")
    {
        var phoneuser = faild[inputIndex].value;
        var matchPhone = isPhone(phoneuser);
        if (matchPhone == false) {
            faild[inputIndex].className = "notvaild";
        }
    }
}

function checkError() {
    if (selectEmployees.value == "Please select") {
        selectEmployees.style.border = "1px solid red";
    } else {
        selectEmployees.style.border = "1px solid black";
    }
}




//regular excepretion-preg-match
function isEmail(email) {
    var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(email);
}

function isPhone(input_str) {
    var regExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regExp.test(input_str);
}

