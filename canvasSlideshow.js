var windowPXLength = window.innerWidth;
var windowPXHeight = window.innerHeight;
var canvas;
var canvasWidth = 0.88; //in percenatges
var canvasHeight = 0.3;
var ctx;
var tick = 0;

var imagePool = ["Slideshow/ss1.jpg","Slideshow/ss2.jpg","Slideshow/ss3.jpg","Slideshow/ss4.jpg","Slideshow/ss5.jpg","Slideshow/ss6.jpg"];
var poolUsage = 2;
var hold1 = "Slideshow/ss5.jpg"
var hold2 = "Slideshow/ss6.jpg";


function pTpG(pres, w){ //wanted precentage vaule, width(t) of height(f);
	var val;
	pres = pres /100;
		if(w == true || w == "w"){
		val = pres * canvas.width;
		}
		else{
			val = pres * canvas.height; 
		}
	return val;
}

function resizeCanvasG(){
	windowPXLength = window.innerWidth;
    windowPXHeight = window.innerHeight;
	
	canvas.width =  canvasWidth * windowPXLength;  //percent of screen to be taken up
	canvas.height = canvasHeight *  windowPXHeight;
	
	//redraw static graph 
	drawMain();
}

function onLoad(){
	//change proportions for qol
	window.addEventListener('resize', resizeCanvasG, false);
	window.addEventListener('orientationchange', resizeCanvasG, false); 
	
	//get document elements
	canvas = document.getElementById("slideshowCanvas");
	canvas.width =  canvasWidth * windowPXLength;  
	canvas.height = canvasHeight *  windowPXHeight;
	ctx = canvas.getContext("2d");
	console.log("main");
	drawMain();
	setInterval(drawMain, 25);
}

function drawMain(){
	
	var img = document.createElement('img');
	
	var imgXval = (tick % (2 * canvas.width)) - canvas.width;
		if(Math.abs(imgXval-1032) < 0.5){
			hold1 = randomImg();
			console.log("change");
	}
		img.src = hold1
		img.height = (canvas.width / img.width) * img.height;
	
	ctx.drawImage(img, imgXval, img.height / -2, 0.98 * canvas.width, img.height * 1.833333);
	
	
	
	var img2 = document.createElement('img');
	var img2Xval =(tick + canvas.width) % (2 * canvas.width) - canvas.width;
				if(Math.abs(img2Xval-1032) < 0.5){
			hold2 = randomImg();
			console.log("change2");
		}
		img2.src = hold2;
		img2.height =  canvas.width / img2.width * img2.height;
		ctx.drawImage(img2, img2Xval, img2.height / -1.3, 0.95 * canvas.width, img2.height * 1.833333);
	
	
	
	var c = 1 + (Math.abs(((( tick) % canvas.width) - canvas.width) / (canvas.width)) - 0.95);
	tick +=  c * 16;
	
	ctx.globalAlpha = 0.5;
	ctx.fillStyle = "#ababab";
	ctx.fillRect(0,0, pTpG(100, "w"),pTpG(100, "h"));
	
	
	ctx.font = pTpG(5,"w") + "px Oswald";
				ctx.globalAlpha = 1;
				ctx.fillStyle = "white";
				var adjust = ctx.measureText("Photography").width;
				ctx.fillText("Photography", (pTpG(100,"w") / 4.3) - (adjust / 2),pTpG(55,"h"));
}

function randomImg(){
	var rand =  Math.floor(Math.random() * imagePool.length - 1) + 1;
	var tempt = imagePool.splice(rand,1);
	imagePool.splice(0,0,tempt[0]);
	return imagePool[0];
}

	