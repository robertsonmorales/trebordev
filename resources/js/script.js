function navSelected(id){
    let navbar = document.getElementsByClassName('navbar');
    for (let i = 0; i < navbar.length; i++) {
        navbar[i].classList.remove('nav-selected');
    }

    let el = document.getElementById(id);
    el.classList.add('nav-selected');
}

$(document).ready(function(){

    $('#name').on('keyup', function(){
        validator('name', $(this).val());
    });

    $('#email').on('keyup', function(){
        validator('email', $(this).val());
    });

    $('#address').on('keyup', function(){
        validator('address', $(this).val());
    });

    $('#message').on('keyup', function(){
        validator('message', $(this).val());
    });

    function validator(inputName, inputValue){
        let value = inputValue.trim();
        
        if(value == null || value == undefined || value == ""){
            $('#error-'+inputName).html(inputName.charAt(0).toUpperCase() + inputName.substr(1) + ' field is required.');
        }else{
            $('#error-'+inputName).empty();
        }
    }

    $('#btn-submit').on('click', function(event){
        event.preventDefault()
        var name = validator('name', $('#name').val());
        var email = validator('email', $('#email').val());
        var address = validator('address', $('#address').val());
        var message = validator('message', $('#message').val());

        if(name && email && address && message){
            $(this).prop('disabled', true);
            $('#submit-message').html('Submitting Message..');
            $('#spinner').removeClass('d-none');
        }
    });
});