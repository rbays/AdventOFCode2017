var inputs = document.body.children[0].innerText.trim().split('\n');
var mostAcc = 0;
var AccIndex = -1;

var minAcc = 100000;

for (i = 0; i < inputs.length; i++){

	let acc = inputs[i].substr(inputs[i].indexOf("a")+3,inputs[i].length - inputs[i].indexOf("a") - 4).split(',');
	let absAcc = Math.abs(acc[0]) + Math.abs(acc[1]) + Math.abs(acc[2]);
	if(absAcc < minAcc){
		minAcc = absAcc;
		AccIndex = i;
	}
}
console.log(minAcc);
console.log(AccIndex);


