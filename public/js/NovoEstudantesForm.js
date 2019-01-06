


$(window).bind("load", function() {
    // code goes here

    "use strict";


    /*==================================================================
    [ Show / hide contact ]*/
    $('.btn-hide-contact100').on('click', function(){
        $('.container-contact100').fadeOut(300);
    });

    $('.modal-btn-holder .modal-btn').on('click', (event)=> {
        $('.container-contact100').fadeIn(300);

        var studentRow = event.target.parentElement.parentElement.parentElement;

        document.querySelector(".student_photo").setAttribute("src", studentRow.querySelector(".img-avatar").src);

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

        // the graph for the student modal
        var chartOne = new Chart(document.querySelector('#chart1'), {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgba(255,255,255,.2)',
              borderColor: 'rgba(255,255,255,.55)',
              data: [108, 81, 80, 45]
            }]
          },
          options: {
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: false,
                barPercentage: 0.6
              }],
              yAxes: [{
                display: false
              }]
            }
          }
        });

    });


});
