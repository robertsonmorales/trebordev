function navSelected(id){
    let navbar = document.getElementsByClassName('navbar');
    for (let i = 0; i < navbar.length; i++) {
        navbar[i].classList.remove('nav-selected');
    }

    let el = document.getElementById(id);
    el.classList.add('nav-selected');
}