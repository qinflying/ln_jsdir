window.onload = rolloverInit;

function rolloverInit(){
	for(var i = 0; i < document.links.length; i++){
		var linkObj = document.links[i];
		if(linkObj.id){
			var imgObj = document.getElementById(linkObj.id + "Img");
			if(imgObj){
				setupRollover(linkObj, imgObj);
			}
		}
	}
}

function setupRollover(linkObj, imgObj){
	linkObj.imgToChange = imgObj;
	linkObj.onmouseout = function(){
		this.imgToChange.src = this.outImage.src;
	}
	
	linkObj.onmouseover = function(){
		this.imgToChange.src = this.overImage.src;
	}
	
	linkObj.outImage = new Image();
	linkObj.outImage.src = imgObj.src;
	
	linkObj.overImage = new Image();
	linkObj.overImage.src = "images/"+linkObj.id + "_on.png";
}