jQuery(document).ready(function ($) {

    var nav_offset_top = $("header").height() + 120;

    function navbarFixed() {
        if ($(".ph-header").length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop(),
                    slowscroll = scroll / 2;
                if (scroll >= nav_offset_top) {
                    $(".ph-header").addClass("header_fixed");

                } else {
                    $(".ph-header").removeClass("header_fixed");
                    //   $('.billboard').css({
                    //  transform: "translateY(0)"
                    //  });
                }
            });
        }
    }

    navbarFixed();

    $(document).on('click', '.ph-team__social--trigger', function () {
        $('.ph-team__social--trigger').toggleClass('active');
    });







});