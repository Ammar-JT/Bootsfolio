$(document).ready(function () {

    //Image filter
    let $btns = $('.project-area .button-group button');
    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })
    $('.project-area .button-group #btn1').trigger('click')

    //Magnific Pop Up
    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    })

    //Owl-carousel
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            544:{
                items:2
            }
        }
    })

    //sticky nav menu
    let nav_offset_top = $('.header_area').height() + 30;
    function navbarFixed(){
        if($('.header_area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll>= nav_offset_top){
                    $('.header_area .main-menu').addClass('navbar_fixed');
                }else{
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }
    navbarFixed();

});
