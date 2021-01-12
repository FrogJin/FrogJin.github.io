var slideIndex = 1;

/******************************************
 * Setup page when ready
 ******************************************/
$(document).ready(function(){
  // First Arrow
  // $(".top-banner-arrow").on('click', function(event) {
  //   event.preventDefault();
  //   $('html, body').animate({scrollTop: $('.projects-container').offset().top}, 800);
  // });

  // TODO: Change px to % so element will auto resize when window is resized
  var pcw = $('.projects-container ul li').width()
  $('.projects-container ul li').css({
    'height': pcw + 'px'
  })

  // Second Arrow
  // $(".story-arrow").on('click', function(event) {
  //   event.preventDefault();
  //   $('html, body').animate({scrollTop: $('.career-banner').offset().top}, 800);
  // });
});


/******************************************
 * Modal boxes logic and functions
 ******************************************/
function demo(project_name) {
  // if (project_name == "me495") {
  //   document.getElementById("me495Modal").style.display = "block";
  // } else if (project_name == "me449") {
  //   document.getElementById("me449Modal").style.display = "block";
  // } else if (project_name == "ece498") {
  //   document.getElementById("ece498Modal").style.display = "block";
  // }
  document.getElementById(project_name.concat("Modal")).style.display = "block";
  showSlides(project_name, slideIndex = 1)
}

function closeDemo(project_name) {
  // if (project_name == "ece498") {
  //   document.getElementById("ece498Modal").style.display = "none";
  // } else if (project_name == "me449") {
  //   document.getElementById("me495Modal").style.display = "none";
  // } else if (project_name == "me495") {
  //   document.getElementById("me495Modal").style.display = "none";
  // }
  document.getElementById(project_name.concat("Modal")).style.display = "none";
}

// TODO: Hide body y scroll bar when modals are opened
// var modals = document.getElementsByClassName("modal");
// for (i = 0; i < modals.length; i++) {
//   $(modals[i].id).modal().on('shown', function(){
//     $('html').css('overflow-y', 'hidden');
//   }).on('hidden', function(){
//     $('html').css('overflow-y', 'auto');
//   })
// }

window.onclick = function(event) {
  if (event.target.className == "modal") {
    event.target.style.display = "none";
  }
}

/******************************************
 * Gallery logic and functions
 ******************************************/
function plusSlides(project_name, n) {
  showSlides(project_name, slideIndex += n);
}

function currentSlides(project_name, n) {
  showSlides(project_name, slideIndex = n)
}

function showSlides(project_name, n) {
  var i;
  var gallery = document.getElementById(project_name.concat("Gallery"));
  var slides = gallery.getElementsByClassName("slides");
  var dots = gallery.getElementsByClassName("gallery-demo");
  var captions = gallery.getElementsByClassName("demo-caption");
  var captionText = document.getElementById(project_name.concat("Caption"));
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = captions[slideIndex-1].innerHTML;
}

/******************************************
 * Footer logic and functions
 ******************************************/
document.getElementById("footerSubmitButton").onclick = function() {
  alert("Message Submitted!");
  document.getElementById("footerMessage").value = "";
}
