function toggleHeight(obj){
	
	var num = obj.id.substring(1);
	console.log(num);
	var wrapper = document.getElementById("port" + num + "wrapper" + num);
	
	//var remove = document.getElementById("port" + num + "Title").classList.remove("h40");;
	
	if(wrapper.classList.contains("h80")){
		wrapper.classList.remove("h80");
		wrapper.classList.add("h40");
		document.getElementById("b" + num).style.height = "40vh";
		document.getElementById("port" + num + "Slideshow").style.height = "0%";
		//document.getElementById("port" + num + "Slideshow").classList.add("hidden");
	}
	else{
		wrapper.classList.remove("h40");
		wrapper.classList.add("h80");
		document.getElementById("b" + num).style.height = "25%";
		document.getElementById("port" + num + "Slideshow").style.height = "45vw";
		//document.getElementById("port" + num + "Slideshow").classList.remove("hidden");
		
	}
}


function slideshow(me){ 
	var id= me.id;
	var length = id.length;
	
	var portId = id.substring(length-1);
	var port = document.getElementById("port" + portId + "Images");
	var portChildren = port.childNodes;
	
	var dir = id.substring(length-2,length-1);
	
	//var circle = document.getElementById("port" + portId + "Circles");
	//var circleChildren = circle.childNodes;
	
	//find chirldren with class images
	var withinReason = [];
	//var withinCircle = [];
	for(var i = 0; i < portChildren.length - 1; i++){
		if(i % 2 == 1){
			withinReason[withinReason.length] = portChildren[i];
			//withinCircle[withinCircle.length] = circleChildren[i];
		}
	}
	
	//find whihc one is not hidden
	var shown  = 0;
	for(var i = 0; i < withinReason.length; i++){
		if(!withinReason[i].classList.contains("hidden")){
			withinReason[i].classList.remove("show");
			withinReason[i].classList.add("hidden");
			
			//withinCircle[i].classList.remove("green");
			shown = i;
		}
	}

	//cycle to next image
	if(dir == "R"){
		if(shown == withinReason.length - 1){
			shown = 0;
		}
		else{
			shown += 1;
		}
	}
	else{
		if(shown == 0){
			shown = withinReason.length - 1;
		}
		else{
			shown -= 1;
		}
	}

	 withinReason[shown].classList.remove("hidden");
	 withinReason[shown].classList.add("show");
	 
	 //withinCircle[shown].classList.add("green");
	
}




