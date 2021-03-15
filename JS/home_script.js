var slide_idx = 1;

/******************************************
 * Setup page when ready
 ******************************************/
$(document).ready(function(){
  // TODO: Change px to % so element will auto resize when window is resized
  var pcw = $('.projects-container ul li').width()
  $('.projects-container ul li').css({
    'height': 0.5*pcw + 'px'
  })

  // Setup state based on url
  var url = window.location.href;
  if (url.includes("?")) {
    var base_url = url.split("?")[0];
    var project_name = url.split("?")[1].split("=")[1];
    history.pushState({project: "none"}, "none", base_url);
    demo(project_name);
  }
});

/******************************************
 * Modal boxes logic and functions
 ******************************************/
function demoOnClick(event, project_name) {
  event.preventDefault;
  demo(project_name);
}

function demo(project_name) {
  history.pushState({project: project_name}, project_name, "?project=" + project_name);
  document.getElementById(project_name.concat("Modal")).style.display = "block";
  showSlides(project_name, slide_idx = 1);
}

function closeDemo(project_name) {
  document.getElementById(project_name.concat("Modal")).style.display = "none";
  history.back();
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
  // Hide modals
  if (event.target.className == "modal") {
    event.target.style.display = "none";
    history.back();
  }
}

/******************************************
 * Gallery logic and functions
 ******************************************/
function plusSlides(project_name, n) {
  showSlides(project_name, slide_idx += n);
}

function currentSlides(project_name, n) {
  showSlides(project_name, slide_idx = n);
}

function showSlides(project_name, n) {
  var i;
  var gallery = document.getElementById(project_name.concat("Gallery"));
  var slides = gallery.getElementsByClassName("slides");
  var dots = gallery.getElementsByClassName("gallery-demo");
  var captions = gallery.getElementsByClassName("demo-caption");
  var captionText = document.getElementById(project_name.concat("Caption"));
  if (n > slides.length) {slide_idx = 1}
  if (n < 1) {slide_idx = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide_idx-1].style.display = "block";
  dots[slide_idx-1].className += " active";
  captionText.innerHTML = captions[slide_idx-1].innerHTML;
}

/******************************************
 * Footer logic and functions
 ******************************************/
// document.getElementById("footerSubmitButton").onclick = function() {
//   alert("Message Submitted!");
//   document.getElementById("footerMessage").value = "";
// }
