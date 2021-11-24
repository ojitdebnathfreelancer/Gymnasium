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

    // testimonail slider 
    $(".tesimonail-slider").slick({
        arrows:false,
        slidesToShow:2,
        dots:true,
        autoplay:true,
        pauseOnHover:false,
    });

    // counter up 
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });
});