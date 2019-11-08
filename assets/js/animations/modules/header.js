const header = document.querySelector('header');
const fulcrum_image = document.getElementById('fulcrum-img');
let lastScrollTop = 0;

export function initHeader() {
    if (window.pageYOffset > 0) {
        header.classList.add('stickie');
        fulcrum_image.src = "assets/img/fulcrum_logo.c89019ae-dark.svg";
    }
}

export default function toggleHeader() {
    const currentScrollTop = window.pageYOffset;
    if (currentScrollTop > 0) {
        header.classList.add('stickie');
        fulcrum_image.src = "assets/img/fulcrum_logo.c89019ae-dark.svg";
    } else {
        header.classList.remove('stickie');
        fulcrum_image.src = "assets/img/fulcrum_logo.c89019ae.svg";
    }
    lastScrollTop = currentScrollTop;
}