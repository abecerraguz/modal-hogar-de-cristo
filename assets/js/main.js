$(function () {

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
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


