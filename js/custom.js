$(document).ready(function(){
    // banner sliders 
    $(".banner-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        dots:true,
    });

    // about video play 
    $('.venobox').venobox();
});