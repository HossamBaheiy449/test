const btn = document.querySelector(".mobile-toggle-nav");
const toggleBar = document.querySelector(".primary-navigation");

let click = ()=> {
    toggleBar.classList.toggle("show");
    btn.classList.toggle('close')
}

btn.addEventListener('click',click)