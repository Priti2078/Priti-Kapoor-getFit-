function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  var indexValue = 1;
  showImg(indexValue);
  function side_slide(e) {
    showImg(indexValue +=e);
  }
  function showImg(e) {
    var i;
    const img = document.querySelectorAll('img')
    if(e > img.length) {
        indexValue = 1  
    }
    if(e < 1) {
        indexValue = img.length
    }
    img[indexValue - 1].style.display = "block";
  }

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let img = document.getElementsByClassName("img");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    img[i].style.display = "block";
  }
  slides[slideIndex-1].style.display = "block";
}
