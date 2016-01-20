/**
 * Created by vmuler on 23.12.2015.
 */
$(document).ready(function(){
    $('.bxslider').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 200,
        slideMargin: 100
    });
});

   $(document).ready(function(){ $('.logo-left, .text1').hover(function () {
        $('.test-logo').css('backgroundPosition', '0 -177px');
    }, function () {
        $('.test-logo').css('backgroundPosition', '0 0');
    });
    $('.logo-right, .text2').hover(function () {
        $('.test-logo').css('backgroundPosition', '0 -354px');
    }, function () {
        $('.test-logo').css('backgroundPosition', '0 0');
    });
       });
