//day 2.1
function checkSum1(){
var input = document.body.children[0].innerText.trim();
var rows = input.split("\n");

var checks = 0,
	min,
	max;
for(var i = 0; i< rows.length;i++){
	row = rows[i].split("\t");
	min = row[0];
	max = row[0];
	for(var j = 0;j< row.length;j++){
		if(+row[j]<+min){
			min = row[j];
		}
		if(+row[j]>+max){
			max = row[j];
		}
	}
	checks = checks + +max - +min;
} 

return checks;
}

checkSum1();
