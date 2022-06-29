// Code to display and remove the text

// Text in array form
var text_to_display = [ "HI!! I AM AYUSH KILEDAR", "WELCOME TO MY WEBSITE", "HERE YOU WILL GET TO KNOW MY SKILLS AND PROJECTS", "AND ALSO MY CONTACT DETAILS :)" ];

// Current sentence from array
var curr = 0;

// Character of current sentence
var index = 0;

// For intervals
var intervals;


var text_area = document.querySelector("#text");

// Types the text
function Type() { 
	var text =  text_to_display[curr].substring(0, index + 1);
	text_area.innerHTML = text;
	index++;

	if(text === text_to_display[curr]) {
		clearInterval(intervals);
		setTimeout(function() {
			intervals = setInterval(Delete, 50);
		}, 1000);
	}
}

// Deletes the text
function Delete() {
	var text =  text_to_display[curr].substring(0, index - 1);
	text_area.innerHTML = text;
	index--;

	if(text === '') {
		clearInterval(intervals);

		if(curr == (text_to_display.length - 1))
			curr = 0;
		else
			curr++;
		index = 0;

		//A minute pause after a sentence gets completed 
		setTimeout(function() {
			intervals = setInterval(Type, 100);
		}, 200);
	}
}

intervals = setInterval(Type, 100);

//Code to swipe/slideshow the project images

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("swiping");
  let dots = document.getElementsByClassName("dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  // Change image every 5 seconds
  setTimeout(showSlides, 5000); 
}