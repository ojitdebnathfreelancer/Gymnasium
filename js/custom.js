$(document).ready(function(){

    // color picker 
    $(".color-button").on("click",function(){
        $(".color-picker").toggleClass("color-picker-pos");
    });
    
    $(".color-picker .orange").on("click",function(){
        $("body").addClass("orange").removeClass("blue").removeClass("aqua").removeClass("green");
    });

    $(".color-picker .blue").on("click",function(){
        $("body").addClass("blue").removeClass("orange").removeClass("aqua").removeClass("green");
    });

    $(".color-picker .aqua").on("click",function(){
        $("body").addClass("aqua").removeClass("orange").removeClass("blue").removeClass("green");
    });

    $(".color-picker .green").on("click",function(){
        $("body").addClass("green").removeClass("orange").removeClass("blue").removeClass("aqua");
    });

    $(".color-picker .defulat").on("click",function(){
        $("body").removeClass("green").removeClass("orange").removeClass("blue").removeClass("aqua");
    });

    $(".color-picker .body-them .light").on("click",function(){
        $("body").removeClass("blackclick");
    });

    $(".color-picker .body-them .black").on("click",function(){
        $("body").addClass("blackclick");
    });

    // preloader 
    $('.loadcounter').counterUp({
        delay: 10,
        time: 1500,
    });

    $(".preloader").delay(2000).fadeOut();

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
        responsive:[
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll:1,
                  dots: false,
                  arrows:false,
                },
            },
        ],
    });

   

    // brand slider 
    $(".company-slider").slick({
        slidesToShow:5,
        centerMode:true,
        centerPadding:"0px",
        prevArrow:'<i class="fas fa-chevron-left slick-arrow left-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slick-arrow right-arrow"></i>',
        pauseOnHover:false,
        autoplay:true,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                  slidesToShow:4,
                  slidesToScroll:1,
                  dots: false,
                  arrows:true,
                },
            },

            {
                breakpoint: 992,
                settings: {
                  slidesToShow:3,
                  slidesToScroll:1,
                  dots: false,
                  arrows:true,
                },
            },

            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll:1,
                  dots: false,
                  arrows:true,
                },
            },

            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
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