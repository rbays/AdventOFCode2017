var instructions = document.body.children[0].innerText.trim().split('\n');
var sent;
var debugCount = 0;

for (count = 0; count < instructions.length; count++){
	let instruction = instructions[count].split(' ');
	if (isNaN(instruction[1])){
		window[instruction[1]] = 0;
	}
}	

for (count = 0; count < instructions.length && debugCount < 2000; count++){
	let instruction = instructions[count].split(' ');
	let meth = instruction[0];
	if (meth == "set"){
		if(window.hasOwnProperty(instruction[2])){
			window[instruction[1]] = window[instruction[2]];
		}else{
			window[instruction[1]] = +instruction[2];
		}
	}
	if (meth == "mul"){
		if(window.hasOwnProperty(instruction[2])){
			window[instruction[1]] = window[instruction[1]] * window[instruction[2]];
		}else{
			window[instruction[1]] = window[instruction[1]] * instruction[2];
		}
	}
	if (meth == "add"){
		if(window.hasOwnProperty(instruction[2])){
			window[instruction[1]] += window[instruction[2]];
		}else{
			window[instruction[1]] += +instruction[2];
		}
	}
	if (meth == "mod"){
		if(window.hasOwnProperty(instruction[2])){
			window[instruction[1]] = window[instruction[1]] % window[instruction[2]];
		}else{
			window[instruction[1]] = window[instruction[1]] % instruction[2];
		}
	}
	if (meth == "snd"){
			sent = window[instruction[1]];
	}
	if (meth == "rcv"){
		if(window.hasOwnProperty(instruction[1])){
			if (window[instruction[1]] != 0){
				console.log("rcv: " + sent);
				break;
			}
		}else{
			if(instruction[1] != 0){
				console.log("rcv: " + sent);
				break;
			}
		}
	}
	if (meth == "jgz"){
		if(window.hasOwnProperty(instruction[1])){
			if (window[instruction[1]] > 0){
				if(window.hasOwnProperty(instruction[2])){
					count += +window[instruction[2]] -1;
				}else{
						count += +instruction[2] - 1;
				}
			}
		}else{
			if(instruction[1] > 0){
				if(window.hasOwnProperty(instruction[2])){
					count += +window[instruction[2]] -1;
				}else{
						count += +instruction[2] - 1;
				}
			}
		}
	}
}
