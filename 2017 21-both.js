//
var img = [".#.","..#","###"];

var input = document.body.children[0].innerText.trim().split("\n");
var inst_2 = [];
var inst_3 = [];

for (i = 0; i < input.length; i++){
	let row = input[i].split(' => ');
	if (row[0].length == 5){
		inst_2.push([row[0],row[1]]);
	}
	else{
		inst_3.push([row[0],row[1]]);
	}
}


for (i = 0; i < 18; i++){
//split image up
	let pixelSize;
	if(img[0].length%2 == 0){
		pixelSize = 2;
	}
	else{
		pixelSize = 3;
	}
	let imageSize = img[0].length / pixelSize;
	let pixeledImage = [];
	for (j = 0; j < imageSize; j++){//j for each pixel line
		let pixelRow = [];
		for (k = 0; k < imageSize; k++){// k for each pixel in a line
			let pixel = [];
			for (l = 0; l < pixelSize; l++){//l for each line within a single pixel
				pixel.push(img[(j*pixelSize)+l].substr(k*pixelSize,pixelSize));
			}
			pixelRow.push(pixel);
		}
		pixeledImage.push(pixelRow);
	}

	//rotate and compare pixels
	for (j = 0; j < pixeledImage.length; j++){
		for (k = 0; k < pixeledImage[j].length; k ++){
			let pixel = pixeledImage[j][k];
			pixel = comparePixel(pixel,pixelSize);
			pixeledImage[j][k] = pixel;
		}
	}
	
	
	//piece back together
	img = [];
	for (j = 0; j < pixeledImage.length; j++){
		for (s = 0; s < pixelSize+1; s++){
			let newline = "";
			for (t = 0; t < pixeledImage.length; t++){
				newline += pixeledImage[j][t][s];
			}
			img.push(newline);
		}
	}

	if(i == 4 || i == 17){
		
		var string = img.join('');
var count = 0;
for (j = 0; j < string.length; j++){
	if (string[j] == "#"){
		count += 1;
	}
}
	console.log("After " + (i+1) + " iterations:");
	console.log(count);}
	
}


function comparePixel(pixel, size){
	let comparitor;
	if(size == 2){
		comparitor = inst_2;
	}else{
		comparitor = inst_3;
	}
	for (f = 0; f < 2; f++){
		for (r = 0; r < 4; r++){
			for (c = 0; c < comparitor.length; c++){
				if(pixel.join('/') == comparitor[c][0]){
					return comparitor[c][1].split('/');
				}
			}
			pixel = rotate(pixel,size);
		}
		pixel.reverse();
	}
	console.log("no match!!!");
	

}

function rotate(pixel,size){
	if(size == 2){
		return [pixel[1][0] + pixel[0][0], pixel[1][1] + pixel[0][1] ]
	}else{
		return [
			pixel[2][0] + pixel[1][0] + pixel[0][0],
			pixel[2][1] + pixel[1][1] + pixel[0][1],
			pixel[2][2] + pixel[1][2] + pixel[0][2]			
		]
	}
}



