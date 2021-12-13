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
        autoplay:false,
        pauseOnHover:false,
    });

   

    // brand slider 
    $(".company-slider").slick({
        slidesToShow:5,
        centerMode:true,
        centerPadding:"0px",
        prevArrow:'<i class="fas fa-chevron-left slick-arrow left-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slick-arrow right-arrow"></i>',
        pauseOnHover:false,
        // autoplay:true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll:1,
                  dots: false,
                  arrows:false,
                },
            },
        ],
    });

     // counter up 
     $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });
});