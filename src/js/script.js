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