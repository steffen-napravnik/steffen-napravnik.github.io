// Main navigation background change
function scrollNavBar() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 50) {
        navbar.classList.remove('bg-black');
    } else {
        navbar.classList.add('bg-black');
    }
}
window.addEventListener('scroll', scrollNavBar);


// Skills popover initialize
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))