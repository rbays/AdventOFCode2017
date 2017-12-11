var list = [];

for (i = 0; i < 256; i++){
	list.push(i);
}


var skip = 0,
	position = 0,
	rawInput = document.body.children[0].innerText.trim(),
	input = [];
	//debug
	//rawInput = "1,2,3";
	for (i = 0; i < rawInput.length; i++){
		input.push(rawInput.charCodeAt(i));
	}
	input.push(17, 31, 73, 47, 23)
	
	//debug
	//input = [3, 4, 1, 5];
	//list = [0, 1, 2, 3, 4];

for (rounds = 0; rounds < 64; rounds++){	
	for (i = 0; i < input.length; i++){
		var sublist = [];
		for (j = 0; j < input[i]; j++){
			sublist.push(list[(position + j)%list.length]);
		}
		sublist.reverse();
		for (j = 0; j < input[i]; j++){
			list[(position + j)%list.length] = sublist[j];
		}
		position = (+position + +input[i] + +skip)%(list.length);
		
		skip += 1;
	}
}
var sparseHash = list;

var denseHash = [];

for (i = 0; i < 16; i++){
	let block = i*16;
	denseHash.push(
		sparseHash[block]^
		sparseHash[block+1]^
		sparseHash[block+2]^
		sparseHash[block+3]^
		sparseHash[block+4]^
		sparseHash[block+5]^
		sparseHash[block+6]^
		sparseHash[block+7]^
		sparseHash[block+8]^
		sparseHash[block+9]^
		sparseHash[block+10]^
		sparseHash[block+11]^
		sparseHash[block+12]^
		sparseHash[block+13]^
		sparseHash[block+14]^
		sparseHash[block+15]);
}
var hexHash = "";
for (i = 0; i < 16; i++){
	var blockBase16 = (denseHash[i]).toString(16);
	if (blockBase16.length == 1){blockBase16 = "0" + blockBase16;}
	hexHash += blockBase16;
}
console.log(hexHash);