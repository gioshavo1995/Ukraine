window.onload = function () {
  function offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    };
  }
  var chappie_anim = function () {
    var elements = document.querySelectorAll(".chappie_anim");
    for (var i = 0; i < elements.length; i++) {
      var elementData = elements[i].dataset.chappie;
      if (window.scrollY > offset(elements[i]).top - window.innerHeight) {
        elements[i].classList.add("active_chappie");
        if (elementData != undefined) {
          elements[i].classList.add(elementData);
        }
      } else {
        elements[i].classList.remove("active_chappie");
      }
    }
  };
  chappie_anim();

  window.addEventListener("scroll", chappie_anim);
  window.addEventListener("resize", function () {
    setTimeout(function () {
      chappie_anim();
    }, 500);
  });

  if ($(window).scrollTop() > 0) {
    $("body").addClass("scrolled");
  } else {
    $("body").removeClass("scrolled");
  }
  // document.querySelector('#loader-fragment').style.opacity = '0';
  // document.querySelector('body').classList.add('loaded');
};

$(document).ready(function () {
  var slava = new Swiper(".slava", {
    spaceBetween: 0,
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  $('.add_post').click(function(){
    $('body').toggleClass('active');
    $('.add_form').toggleClass('active');
  });
  $('.add_form .close_bars').click(function(){
    $('body').toggleClass('active');
    $('.add_form').toggleClass('active');
  });
  $('.find_form').click(function(){
    $('body').toggleClass('active');
    $('.take_form').toggleClass('active');
  });
  $('.take_form .close_bars').click(function(){
    $('body').toggleClass('active');
    $('.take_form').toggleClass('active');
  });
  $('.view_form').click(function(){
    $('body').toggleClass('active');
    $('.detail_page').toggleClass('active');
  });
  $('.detail_page .close_bars').click(function(){
    $('body').toggleClass('active');
    $('.detail_page').toggleClass('active');
  });
});
