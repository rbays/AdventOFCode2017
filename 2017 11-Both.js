//day 11
var input = document.body.children[0].innerText.trim();
var ne = 0,nw = 0,n = 0;

var dir = input.split(',');
var dist = 0, maxDist = 0;

for (i = 0; i < dir.length; i++){
	switch(dir[i]){
		case "n":
			n += 1;
			break;
		case "ne":
			ne += 1;
			break;
		case "nw":
			nw += 1;
			break;
		case "s":
			n -= 1;
			break;
		case "se":
			nw -= 1;
			break;
		case "sw":
			ne -= 1;
			break;
	}
	dist = Math.abs(ne) + Math.abs(nw) + Math.abs(n) - Math.min(Math.abs(ne), Math.abs(nw), Math.abs(n));
	maxDist = Math.max(dist, maxDist);
}
console.log("1: " + dist);
console.log("2: " + maxDist);
