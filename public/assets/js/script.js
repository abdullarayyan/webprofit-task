let menu_a = document.querySelector('#menu-a');
let menu_b = document.querySelector('#menu-b');
let mm = document.querySelector('.mm');
let content = document.querySelector('.content');


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

//animation text
let typed = new Typed(".typing",{
    strings:["Logitech's", "Canon's", "LJ Hooker's", "Bellamy's", "Nimble's"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});





