//day 14-Both
var input = "xlqgujun",
	hashArray = [],
	oneCount = 0,
	regionCount = 0;
	
for(n = 0; n < 128; n++){
	hashArray.push(getBitHash(input + "-" + n));
}
console.log(oneCount);
for (n = 0; n < hashArray.length; n++){
	for (m = 0; m < hashArray[n].length; m++){
		if(hashArray[n][m] == 1){
			regionCount ++;
			regionSpread(n,m,regionCount+1);
		}
	}
}
console.log(regionCount);


function getBitHash(str){
	let list = [];

	for (i = 0; i < 256; i++){
		list.push(i);
	}


	let skip = 0,
		position = 0,
		rawInput = str,
		input = [];	

		for (i = 0; i < rawInput.length; i++){
			input.push(rawInput.charCodeAt(i));
		}
		input.push(17, 31, 73, 47, 23)

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
	var bitHash = "";
	for (i = 0; i < 16; i++){
		var blockBase2 = (denseHash[i]).toString(2);
		while (blockBase2.length < 8){blockBase2 = "0" + blockBase2;}
		bitHash += blockBase2;
	}
	for(m = 0; m < 128; m++){
		if(bitHash[m] == "1"){
			oneCount ++;
		}
	}
	bitHashArray = [];
	for(i = 0; i< 128; i++){
		bitHashArray.push(bitHash[i]);
	}
	return bitHashArray;
}

function regionSpread(n,m,regionNum){
	hashArray[n][m] = regionNum + "";
	if(n > 0 && hashArray[n-1][m] === "1"){
		regionSpread(n-1,m,regionNum);
	}
	if(n < 127 && hashArray[n+1][m] === "1"){
		regionSpread(n+1,m,regionNum);
	}
	if(m > 0 && hashArray[n][m-1] === "1"){
		regionSpread(n,m-1,regionNum);
	}
	if(m < 127 && hashArray[n][m+1] === "1"){
		regionSpread(n,m+1,regionNum);
	}
	
}