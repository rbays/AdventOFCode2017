//day 13-2
var input = document.body.children[0].innerText.trim();
var rawScanners = input.split('\n');
var wait = 0;
var safe = false;

while(!safe){
	let points = 0;
	for (i = 0; i < rawScanners.length; i++){
		let pos = +rawScanners[i].split(": ")[0];
		let range = +rawScanners[i].split(": ")[1];
		if ((pos + wait) %((range-1)*2) == 0){
			points += 1;
			break;
		}
	}

	if(points == 0){safe = true;}
	else{wait += 1;}
}
console.log(wait);