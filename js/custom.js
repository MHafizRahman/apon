$(function(){

    // banner slider is here 
    // ====================================================
    $('.slide_active').slick({
        arrows: false,
        dots: true
    });

    $('.slick-dots li:nth-child(1) button').html('<i class="fa fa-home" aria-hidden="true"></i>');
    
     $('.venobox_active').venobox({
        spinner: 'double-bounce'
    });

    // screenshots area 
    // ========================================================

    $('.slider_active').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ] 
    });

    $('.text-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.img-active'
    });

    $('.img-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.text-active',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        centerPadding: 0,
        autoplay: false,
        responsive: [
            
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ] 
    });



















  // preloader is here
// ===========================================================
$(window).load(function(){
    $('.preloader').delay(2000).fadeOut();
});

// sticky menu is here 
// ===========================================================

$(window).scroll(function(){
var scrollAmount = $(window).scrollTop();

if(scrollAmount > 400){
   $('.navbar').addClass('sticky');

}
else{
    $('.navbar').removeClass('sticky');
}


});











});