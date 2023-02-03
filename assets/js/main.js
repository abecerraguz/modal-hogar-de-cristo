$(function () {

    window.onscroll = function(ev) {
       
        if ((window.innerHeight + window.scrollY) >= ((document.body.offsetHeight)/2)) {
            $('.contentPopUp').addClass('up');
        }else{
            $('.contentPopUp').removeClass('up');
        }
    };

    $('#close, #donar').click(function(){
        $('.contentPopUp').removeClass('up');
        setTimeout(() => {
            $('.contentPopUp').remove();
        }, 1000);
    })
     
});


