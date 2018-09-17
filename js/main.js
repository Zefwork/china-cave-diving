$(function(){
	$('.burger-trigger, .nav-burger').click(function(){
		$('.nav-burger').toggleClass('nav-burger__on');
		$('.header').toggleClass('overlay');
	});
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 1300);
		return false;
	});
	$(document).click(function(event) {
		if ($(event.target).closest(".burger-trigger").length ) return;
		$('.nav-burger').removeClass('nav-burger__on');
		$('.header').removeClass('overlay');
		$('.burger-menu').removeClass('active');
		event.stopPropagation();
	})
});

$(document).ready(function() {
	$('.burger-menu').click(function(){
		$('.burger-menu').toggleClass('active');
	});
});

$(document).ready(function(){
      $('.slider').slick({
  		infinite: true,
  		speed: 2000,
  		fade: true,
  		autoplay: true,
  		autoplaySpeed: 3500,
  		focusOnSelect: true,
      arrows: false
  	});
});

$(document).ready(function(){
      $('.center-slider').slick({
  		infinite: true,
  		speed: 1000,
  		fade: true,
  		autoplay: true,
  		autoplaySpeed: 5500,
  		focusOnSelect: true,
    });
});

$(document).ready(function(){
      $('.team-slider').slick({
  		infinite: true,
  		speed: 1000,
  		fade: true,
  		autoplay: true,
  		autoplaySpeed: 7500,
  		focusOnSelect: true,
      prevArrow: '<div class="slider-emp-arrow"><i class="prev-emp-arrow fa fa-angle-left"></i></div>',
      nextArrow: '<div class="slider-emp-arrow"><i class="next-emp-arrow fa fa-angle-right"></i></div>'
  	});
});

$(window).scroll(function() {
  $('.faderight').each(function() {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+500) {
      $(this).addClass("fadeInRight");
    }
  });
});

$(window).scroll(function() {
  $('.fade').each(function() {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+500) {
      $(this).addClass("fadeIn");
    }
  });
});

$(window).scroll(function() {
  $('.fadeleft').each(function() {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+500) {
      $(this).addClass("fadeInLeft");
    }
  });
});

$(window).scroll(function() {
  $('.fadeup').each(function() {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+500) {
      $(this).addClass("fadeInUp");
    }
  });
});

$(window).scroll(function() {
  $('.fadedown').each(function() {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+500) {
      $(this).addClass("fadeInDown");
    }
  });
});

$(window).scroll(function() {
  $('.fadeby').each(function() {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+700) {
      $(this).addClass("fadeIn");
    }
  });
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}