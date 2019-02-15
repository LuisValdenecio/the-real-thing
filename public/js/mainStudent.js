
(function ($) {
    "use strict";


    /*==================================================================
    [ Show / hide contact ]*/
    $('.btn-hide-contact100').on('click', function(){
      $('.container-contact100').fadeOut(300);



    });

    $(document).ready(function(){

      document.querySelector(".table").querySelector("tbody").onclick = function(event) {

        $('.container-contact100').fadeIn(300);

        //////////////////////////////////////////////////////////////////////////
        ///// seta os elementos deste modal para um estudante em particular //////
        //////////////////////////////////////////////////////////////////////////
        document.querySelector(".student_photo").src = event.target.parentElement.parentElement.parentElement.querySelector("img").src;

        //console.log(event.target.parentElement.parentElement.parentElement.querySelector("img").src);

        // Testimonial Slider
        var swiper = new Swiper('.testimonial-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            //effect: 'fade',
            speed: 800,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });

      };

    });




})(jQuery);
