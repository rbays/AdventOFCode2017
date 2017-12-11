var list = [];

for (i = 0; i < 256; i++){
	list.push(i);
}


var skip = 0,
	position = 0,
	input = document.body.children[0].innerText.trim().split(',');

	//debug
	//input = [3, 4, 1, 5];
	//list = [0, 1, 2, 3, 4];

	
for (i = 0; i < input.length; i++){
	var sublist = [];
	for (j = 0; j < input[i]; j++){
		sublist.push(list[(position + j)%list.length]);
	}
	sublist.reverse();
	for (j = 0; j < input[i]; j++){
		list[(position + j)%list.length] = sublist[j];
	}
	position = (+position + +input[i] + +skip)%list.length;
	
	skip += 1;
}
console.log(list[0]*list[1]);