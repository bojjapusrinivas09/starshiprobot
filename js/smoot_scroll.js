  $(document).ready(function () {

      var scrollLink = $('.scroll');

      // Smooth scrolling
      scrollLink.click(function (e) {
          e.preventDefault();
          $('body,html').animate({
              scrollTop: $(this.hash).offset().top
          }, 1000);
      });

      // Active link switching
      $(window).scroll(function () {
          var scrollbarLocation = $(this).scrollTop();

          scrollLink.each(function () {

              var sectionOffset = $(this.hash).offset().top - 20;

              if (sectionOffset <= scrollbarLocation) {
                  $(this).parent().addClass('active');
                  $(this).parent().siblings().removeClass('active');
              }
          })

      })

  })

  // owl carousel
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 35,
      responsiveClass: true,
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      navSpeed: 3000,
      responsive: {
          0: {
              items: 1,
              nav: true
          },
          600: {
              items: 3,
              nav: false
          },
          1000: {
              items: 5,
              nav: true,
              loop: false
          }
      }
  })
