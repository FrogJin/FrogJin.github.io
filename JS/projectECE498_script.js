window.onload = function() {
  document.getElementById("pic").style.backgroundImage = "url(../projects/ece498_walk_distance/demo.jpg)";
}

document.getElementById("pic").onclick = function() {
  var picurl = document.getElementById("pic").style.backgroundImage.slice(4, -1).replace(/"/g, "");
  window.open(picurl,"_blank");
}

document.getElementById("pic1").onclick = function() {
  document.getElementById("pic").style.backgroundImage = "url(../projects/ece498_walk_distance/demo.jpg)";
}

document.getElementById("pic2").onclick = function() {
  document.getElementById("pic").style.backgroundImage = "url(../projects/ece498_walk_distance/Yaw-Pitch-Roll-800px.jpg)";
}

document.getElementById("pic3").onclick = function() {
  document.getElementById("pic").style.backgroundImage = "url(../projects/ece498_walk_distance/Tilt_angle-800px.jpg)";
}
