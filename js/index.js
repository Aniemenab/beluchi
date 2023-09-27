
'use strict'


// LOADER
$(window).on('load', function() {
	
	$(".loader").delay(2000).fadeOut(); 
	$("#preloader").delay(2000).fadeOut("slow");

});

var desktops = document.querySelectorAll('.desktop');

function hide(element) {
  element.style.setProperty('left', '-100%', element.style.getPropertyPriority('left'));
}

function hideAll() {
  for (var i = 0; i < desktops.length; i++) {
    hide(desktops[i]);
  }
}

function show(element) {
  element.style.setProperty('left', '0', element.style.getPropertyPriority('left'));
}

document.getElementById('link-one').addEventListener('click', function () {
  hideAll();
  show(document.getElementById('one'));
}, false);

document.getElementById('link-two').addEventListener('click', function () {
  hideAll();
  show(document.getElementById('two'));
}, false);

document.getElementById('link-three').addEventListener('click', function () {
  hideAll();
  show(document.getElementById('three'));
}, false);

document.getElementById('link-four').addEventListener('click', function () {
  hideAll();
  show(document.getElementById('four'));
}, false);

// document.getElementById('link-five').addEventListener('click', function () {
//   hideAll();
//   show(document.getElementById('five'));
// }, false);

show(document.getElementById('one'));



// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
