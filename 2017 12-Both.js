//day 12
var input = document.body.children[0].innerText.trim();
var rawPipes = input.split('\n');

var groupPipes = [];

function ProcessPipe(p){
	if(groupPipes.indexOf(p) < 0){
		groupPipes.push(p);
		let row = rawPipes[p];
		let cons = row.split('<-> ')[1].split(', ');
		let i = 0;
		for(; i < cons.length; i++){
			ProcessPipe(cons[i]);
		}
	}
}
ProcessPipe("0");
console.log(groupPipes.length);
groupPipes = [];

function getAllGroups(){
	var groupCount = 0;
	while (groupPipes.length < rawPipes.length){
		let j = 0;
		while (groupPipes.indexOf(j+"") >= 0 && j <= rawPipes.length){
			j += 1;
		}
		if(j > rawPipes.length){
			break;
		}else{
			groupCount += 1;
			ProcessPipe(j+"");
		}
	}
	console.log(groupCount);
}
getAllGroups();
