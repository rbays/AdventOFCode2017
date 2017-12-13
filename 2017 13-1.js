//day 13-1
var input = document.body.children[0].innerText.trim();
var rawScanners = input.split('\n');
var points = 0;

for (i = 0; i < rawScanners.length; i++){
	let pos = +rawScanners[i].split(": ")[0];
	let range = +rawScanners[i].split(": ")[1];
	if (pos %(range*2) == 0){
		points += pos*range;
		console.log(pos);
	}
}
console.log(points);