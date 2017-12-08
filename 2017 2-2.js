//day 2.2

function checkSum2(){
var input = document.body.children[0].innerText.trim();
var rows = input.split("\n");

var checks = 0;
var rowCheck;
for(var i = 0; i< rows.length;i++){
	row = rows[i].split("\t");
	rowCheck = 0;
	col1 = 0;
	col2 = 1;
	while(rowCheck == 0){
		if(row[col1] % row[col2] == 0){
			rowCheck = row[col1]/row[col2];
		}else if(row[col2] % row[col1] == 0){
			rowCheck = row[col2]/row[col1];
		}else{
			
		}
		if(col2 < row.length){
			col2 += 1;
		}else{		
			col1 += 1;
			col2 = col1+1;
		}		
		}
	checks += +rowCheck;
	}
return checks;
}

checkSum2();