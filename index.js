// Solidify navbar on scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


// toogle menu

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".nav-menu");
    const menuBtn = document.querySelector("#open-menu-btn");
    const closeBtn = document.querySelector("#close-menu-btn");

    menuBtn.addEventListener("click", () => {
        menu.style.display = "flex";
        menuBtn.style.display = "none";
        closeBtn.style.display = "inline-block";
    });

    closeBtn.addEventListener("click", () => {
        menu.style.display = "none";
        menuBtn.style.display = "inline-block";
        closeBtn.style.display = "none";
    });
});


// loader js
