
$(window).on("load", function () {
  //$('body,html').scrollTop(0)
  $(".demo").fadeOut(500, function () {
      $(this).remove();
      $('body').css("overflow-y", "visible");


  });
});

  AOS.init();
  // new WOW().init();
  
  // if ($(window).width() < 992) {
  //   $(".img-conainer").unwrap()
  //   $(".our-work").addClass("owl-carousel owl-theme")
  //   $('.our-work').owlCarousel({
  //     loop: true,
  //     rtl: true,
  //     margin: 10,
  //     nav: false,
  //     responsive: {
  //       0: {
  //         items: 1
  //       },
  //       600: {
  //         items: 3,
  //         dots: true
  //       },
  //       1000: {
  //         items: 5
  //       }
  //     }
  //   })
  // }
  // if ($(window).width() < 481) {
  //   $(".for-now").wrap(".sm-icons")
    
  // }
  // //  $('#nav-icon3').click(function(){
  // //    $('#nav-icon3').toggleClass('open');

  // //  });

  // $("#nav-icon3").on("click", function () {
  //   if ($("#nav-icon3").hasClass("open")) {
  //     $(".animated-nav").fadeOut();
  //     $('#nav-icon3').removeClass('open');
  //   } else {
  //     $(".animated-nav").fadeIn();
  //     $('#nav-icon3').addClass('open');
  //   }
  // });
  // $(".animated-nav").on("click", function () {
  //   $(".animated-nav").fadeOut();
  //   $('#nav-icon3').removeClass('open');
  // });

  // $(".zx-header .scroll-icon").on("click", function () {

  //   $(window).scrollTop($(".zx-header").innerHeight(), "slow")

  // });
  // $(window).on("scroll", function () {
    
  // });





  

// });

$(function() {
  // $("#nav-icon3").on("click", function() {
  //   $(".animated-nav").addClass("open");
  // })


  $('a[data-scroll]').on("click",function (e){
    e.preventDefault();    
    
    $("html, body").animate({
      scrollTop: $($(this).attr("data-scroll")).offset().top
    }, 1000);
  });



  $('.healthy-project .owl-carousel').owlCarousel({
    loop: true,
    rtl: true,
    margin:30,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true,
            dots:true
        },
        800:{
          items:2,
          nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
    
});

// $(".owl-carousel").owlCarousel({
//   nav: true,
//   navText: ["<img src='../images/arrow-left.png'>","<img src='../images/arrow-left.png'>"]
// });

$( ".owl-prev").html('<img src="../images/arrow-right.png">');
$( ".owl-next").html('<img src="../images/arrow-left.png">');


var flkty = new Flickity( '.main-gallery', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  autoPlay: 5000,
  // freeScroll: true,
  // wrapAround: true
});


$('.our-latest .owl-carousel').owlCarousel({
  stagePadding: 320,
  loop: true,
  rtl: true,
  center:false,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:true
      },
      1000:{
          items:1,
          nav:true,
      }
  }
  
});


$(".zx-header .icons .search img").on("click", function() {
    $(".search-popup").fadeIn();
    $("html, body").css({"overflow-y":"hidden"});
});
$(".search-popup .close").on("click", function() {
  $(".search-popup").fadeOut();
  $("html, body").css({"overflow-y":"visible"});
});
$(".search-popup").on("click", function() {
  $(".search-popup").fadeOut();
  $("html, body").css({"overflow-y":"visible"});
});
$(".search-popup .search-form").on("click", function(e) {
  e.stopPropagation();
});

// $(".menu").on("click", function() {

//     $(".zx-header .menu .menu-bars #nav-icon3").addClass("open");
    

// });

$(".menu").on("click", function () {
  $("#nav-icon3").toggleClass("open");
  $(".menu-popup").fadeToggle();
  $(".menu").toggleClass("fixed");
});
$(".menu-popup").on("click", function() {
  $(".menu-popup").fadeOut();
  $("#nav-icon3").removeClass("open");
  $(".menu").removeClass("fixed");
});



$(".activity .news .sup-news .one").click(function(){
  // Change src attribute of image
  //var = $(".activity .news .sup-news .article img");
  $(".activity .news .sup-news .article").removeClass("active");
  $(this).addClass("active");
  $('.main-news img').attr('src', "images/news-img-one.png");
}); 
$(".activity .news .sup-news .two").click(function(){
  // Change src attribute of image
  //var = $(".activity .news .sup-news .article img");
  $(".activity .news .sup-news .article").removeClass("active");
  $(this).addClass("active");
  $('.main-news img').attr('src', "images/news-img-main.png");
}); 
$(".activity .news .sup-news .three").click(function(){
  // Change src attribute of image
  //var = $(".activity .news .sup-news .article img");
  $(".activity .news .sup-news .article").removeClass("active");
  $(this).addClass("active");
  $('.main-news img').attr('src', "images/news-img-three.png");
});    



$(".footer .input-container .one").on("focus", function() {
  $('.footer .input-container .one').attr('src', "images/user-icon-c.png");
});
$(".footer .input-container .one").on("blur", function() {
  $('.footer .input-container .one').attr('src', "images/user-icon1.png");
});
$(".footer .input-container .two").on("focus", function() {
  $('.footer .input-container .two').attr('src', "images/msg-icon-c.png");
});
$(".footer .input-container .two").on("blur", function() {
  $('.footer .input-container .two').attr('src', "images/msg-icon.png");
});
$(".footer .input-container .three").on("focus", function() {
  $('.footer .input-container .three').attr('src', "images/mopile-icon-c.png");
});
$(".footer .input-container .three").on("blur", function() {
  $('.footer .input-container .three').attr('src', "images/mopile-icon.png");
});
$(".footer .input-container .four").on("focus", function() {
  $('.footer .input-container .four').attr('src', "images/sms-icon-c.png");
});
$(".footer .input-container .four").on("blur", function() {
  $('.footer .input-container .four').attr('src', "images/sms-icon1.png");
});



$('#slider').cardSlider({
    slideTag:'div',
    slideClass:'slide'
  });
  
  $('#slider').cardSlider({
      slideTag:'div',
      slideClass:'slide',
      current: 0
    });
    

$(".our-latest .slider-navs .left").on("click", function() {
  $(".our-latest .ui-card-slider .slide").prev().click()
});
$(".our-latest .slider-navs .right").on("click", function() {
  $(".our-latest .ui-card-slider .slide").next().click()
});


});



// $('.custom1').owlCarousel({
//   loop: true,
//   rtl: true,
//   animateOut: 'slideOutDown',
//   animateIn: 'flipInX',
//   items:1,
//   margin:30,
//   stagePadding:30,
//   smartSpeed:450
// });

// $("#owl-example").owlCarousel({
//   nav: true,
//   navText: ["<img src='myprevimage.png'>","<img src='mynextimage.png'>"]
// });