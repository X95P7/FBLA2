var buttonA;
var ButtonB;
var img;
var socials;
var contactFormMessage;
var contactFormOrder;

function onLoad(){
buttonA = document.getElementById("SBmessage");
buttonB =  document.getElementById("SBorder");
img = document.getElementById("large"); 
socials = document.getElementById("contactSocial");
contactFormMessage = document.getElementById("message");
contactFormOrder = document.getElementById("order");

console.log(buttonA);

buttonA.style.backgroundColor  = "lightblue";
buttonB.style.backgroundColor  = "lightgray";

img.style.opacity = 0;
socials.style.opacity = 1;


contactFormMessage.style.display = "block"; 
contactFormOrder.style.display = "none";
}


function clickOrder(){
	buttonA.style.backgroundColor  = "lightgray";
	buttonB.style.backgroundColor  = "lightblue";
	
img.style.opacity = 1;
socials.style.opacity = 0;

contactFormMessage.style.display = "none"; 
contactFormOrder.style.display = "block";
}

function clickMessage(){
	buttonA.style.backgroundColor  = "lightblue";
img.style.opacity = 0;

socials.style.opacity = 1;
buttonB.style.backgroundColor = "lightgray";

contactFormMessage.style.display = "block"; 
contactFormOrder.style.display = "none";
}