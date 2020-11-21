function navSelected(id){
    let navbar = document.getElementsByClassName('navbar');
    for (let i = 0; i < navbar.length; i++) {
        navbar[i].classList.remove('nav-selected');
    }

    let el = document.getElementById(id);
    el.classList.add('nav-selected');
}

$(document).ready(function(){
    $( function(){
        var path = window.location.href;
        var newPath = path.split('/').reverse();
        var nav = newPath[0].replace('#', 'nav-');

        if(!nav){
            $('#nav-home').addClass('nav-selected');
        }else{
            $('#'+nav).addClass('nav-selected');
        }
    });
});