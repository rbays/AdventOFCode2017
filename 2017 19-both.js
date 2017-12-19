var x = 1, y = 0, input = " " + document.body.children[0].innerText.trim(); //first line is 1 shorter than the others

var direction = "down";
var valid = true;
var sights = "";

var rows = input.split('\n');
var grid = [];

for (i = 0; i < rows.length; i++){
	grid.push(rows[i].split(''));
}
var stepCount = 0;

while (valid){
	
	
	if (grid[y][x] == "-" || grid[y][x] == "|"){
		//do nothing
	}
	else if (grid[y][x] == " "){
		valid = false;
					console.log("empty space");

	}
	
	else if (grid[y][x] == "+"){
		console.log(y + "," + x);
		turn();
	}
	else{
		sights += grid[y][x];
	}
	travel(direction);
	
	//gone off the end of the grid
	if(!grid[y] || !grid[y][x]){
		valid = false;
		console.log("grid edge");

	}
	stepCount ++;
}

console.log(sights);
console.log(stepCount - 1);

function travel(d){
	if (d == "down"){y += 1;}
	if (d == "up"){y -= 1;}
	if (d == "left"){x -= 1;}
	if (d == "right"){x += 1;}
}

function turn(){
	console.log("from " + direction + " at " + y + "," + x);
	if(direction == "down" || direction == "up"){
		if (grid[y][x-1] == "-"){
			direction = "left";
		}else if (grid[y][x+1] == "-"){
			direction = "right";
		}else{
			valid = false;
			console.log("turned off");
		}
		
	}
	
	else if(direction == "left" || direction == "right"){
		if (grid[y-1] && grid[y-1][x] == "|"){
			direction = "up";
		}else if (grid[y+1] && grid[y+1][x] == "|"){
			direction = "down";
		}else{		
			valid = false;
		}
	}
	
	console.log("to " + direction);
	
}
