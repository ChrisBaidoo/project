function toggleRed(event) {
  event.preventDefault();
  var h1 = document.querySelector(".h1");
  if (h1.className.includes("bg-red")) {
    h1.classList.remove("bg-red");
  } else {
    h1.classList.add("bg-red");
  }
}

function showImage(element){
  var src = element.src;
  var overlay = document.querySelector(".overlay");
  overlay.querySelector('.overlay-img').src = src;
  overlay.classList.remove("hidden");
}

function hideImage(){
  var overlay = document.querySelector(".overlay");
  overlay.classList.add("hidden");
}
