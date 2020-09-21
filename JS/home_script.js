$(document).ready(function(){
  $(".top-banner-arrow").on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: $('.story').offset().top}, 800);
  });

  $(".story-arrow").on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: $('.career-banner').offset().top}, 800);
  });
});

document.getElementById("footerSubmitButton").onclick = function() {
  alert("Message Submitted!")
  document.getElementById("footerMessage").value = "";
}
