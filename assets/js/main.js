jQuery(document).ready(function ($) {

    var nav_offset_top = $("header").height() + 120;

    function navbarFixed() {
        if ($(".mt-header").length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop(),
                    slowscroll = scroll / 2;
                if (scroll >= nav_offset_top) {
                    $(".mt-header").addClass("header_fixed");

                } else {
                    $(".mt-header").removeClass("header_fixed");
                    //   $('.billboard').css({
                    //  transform: "translateY(0)"
                    //  });
                }
            });
        }
    }

    navbarFixed();
    $(document).on('click', '.ham-menu', function () {
        $('.mt-header__wrapper').toggleClass('active');
        $('.ham-menu').toggleClass('active');
        $('.mt-header__menu ul').slideToggle();
    });



    $('.mt-testimonial-slider').slick({
        dots: false,
        infinite: true,
        speed: 3000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // responsive: [
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 4,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 800,
        //         settings: {
        //             slidesToShow: 4,
        //         }
        //     }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        // ]
    });
    $('.mt-client-slider').slick({
        dots: false,
        infinite: true,
        speed: 5000,
        autoplay: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });




});