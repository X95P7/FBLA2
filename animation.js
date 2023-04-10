//JS animation loader/initializer for all pages

function setAnimations(){
window.addEventListener('scroll', checkPosition);
}

//every scroll check if any  elements with fade in class have entered the screen, if so add a class that runs an animation
function checkPosition() {
	
	var elements = document.querySelectorAll('.Fadeleft');
    var winHeight = window.innerHeight;
	
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - winHeight <= 0) {
        element.classList.add('runLeft');
        element.classList.remove('Fadeleft');
      }
    }
	
		var elements2 = document.querySelectorAll('.Faderight');
    for (var i = 0; i < elements2.length; i++) {
      var element = elements2[i];
      var positionFromTop = elements2[i].getBoundingClientRect().top;

      if (positionFromTop - winHeight <= 0) {
        element.classList.add('runRight');
        element.classList.remove('Faderight');
      }
    }
	
	//HEader animation
	var header = document.getElementById('header');
	var MockHeader = document.getElementById('hiddenHeader');
	 var posFromTop = header.getBoundingClientRect().top;
	 console.log(posFromTop, winHeight);
		 if (Math.abs(posFromTop / winHeight) > 0.17) {
			 	   MockHeader.style.display = "flex";
       MockHeader.classList.add('headerMoveIn');
	  
      }
	  else{
		  MockHeader.classList.remove('headerMoveIn');
		   MockHeader.style.display = "none";
	  }
    }
  