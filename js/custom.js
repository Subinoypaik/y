$(document).ready(function() {

// Wow //
    new WOW().init();

  

//  Sticky  //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.header').addClass("sticky");
        } else {
            $('.header').removeClass("sticky");
        }
    });


    // service //
    $('.service-slider').owlCarousel({
        loop: true,
        dots: false,
        center: false,
        margin:20,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots: false,
            },
            600:{
                items:2,
                nav:false,
                dots: false,
            },
            1200:{
                items:2,
                nav:false,
                dots: false,
                margin:20,
            }
        }
    });

    $('.client').owlCarousel({
        loop: true,
        dots: false,
        center: false,
        margin:20,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2,
                nav:false,
                dots: false,
            },
            600:{
                items:2,
                nav:false,
                dots: false,
            },
            1200:{
                items:6,
                nav:false,
                dots: false,
                margin:20,
            }
        }
    });
//blog-carousel

$('.blog-carousel').owlCarousel({
    loop: true,
    dots: false,
    center: false,
    margin:20,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots: false,
        },
        600:{
            items:2,
            nav:false,
            dots: false,
        },
        1200:{
            items:2,
            nav:false,
            dots: false,
            margin:20,
        }
    }
});


    if($(window).width() <= 991){
        $('.right-nav li.nav-item a.quick-link').each(function(){
            $(this).removeAttr('data-target');
            $(this).removeAttr('data-toggle');
        });
        };
    
});

