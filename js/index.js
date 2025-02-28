const links = document.querySelectorAll('.scroll-link');


links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();


        const targetId = link.getAttribute('data-target');

        const targetEl = document.getElementById(targetId);


        if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" })
        }
    })
});


const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector('.menu');
const menuLinksBtn = document.querySelectorAll(".close-menu");

function openMenu() {

}

function closeMenu() {
    menu.classList.add("open");
    menu.classList.remove("open-animation");
    menu.classList.add("close-animation");
    menu.style.left = "100%";
}

menuBtn.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        menu.classList.add("close-animation");
        menu.style.left = "-100%";
        return;
    }

    menu.classList.add("open");
    menu.classList.remove("close-animation");
    menu.classList.add("open-animation");
    menu.style.left = "0px";
    return;
})

menuLinksBtn.forEach(m => {
    m.addEventListener("click", () => {
        if (menu.classList.contains("open")) {
            menu.classList.remove("open");
            menu.classList.add("close-animation");
            menu.style.left = "-100%";
            return;
        }
    })
})