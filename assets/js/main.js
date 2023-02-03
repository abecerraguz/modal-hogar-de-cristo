$(function () {

    window.onscroll = function(ev) {
        console.log('Salida --->', window.innerHeight + window.scrollY,'>=',document.body.offsetHeight)
        if ((window.innerHeight + window.scrollY) >= ((document.body.offsetHeight)/2)) {
            console.log("Estas abajo de la página");
            $('.contentPopUp').addClass('up');
        }else{
            $('.contentPopUp').removeClass('up');
        }
    };

    $('#close').click(function(){
        $('.contentPopUp').removeClass('up');
    })
     
});


