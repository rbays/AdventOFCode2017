var inputs = document.body.children[0].innerText.trim().split('\n');
var survivors = {};
var positions = [];
var velocities = [];
var accelerations = [];

//prep
for (i = 0; i < inputs.length; i++){

	let pos = inputs[i].split('<')[1].split('>')[0].split(',');
	let vel = inputs[i].split('<')[2].split('>')[0].split(',');
	let acc = inputs[i].split('<')[3].split('>')[0].split(',');
	survivors[i] = true;
	positions.push(pos);
	velocities.push(vel);
	accelerations.push(acc);
}

var checkCount = 0;
while (checkCount < 1000){
	for (i = 0; i < inputs.length; i++){
		if(survivors[i]){
			
			//check for collisions
			let crashes = [];
			for (j = i+1; j < inputs.length; j++){
				if (survivors[i] && survivors[j] && positions[i][0] == positions[j][0] && positions[i][1] == positions[j][1] && positions[i][2] == positions[j][2]){
					crashes.push(i);
					crashes.push(j);
				}
			}
			for (j = 0; j < crashes.length; j++){
				survivors[crashes[j]] = false;
			}			
			if(crashes.length > 0){console.log("boom!");continue;}
			
			let acc = accelerations[i];
			let vel = velocities[i];
			let pos = positions[i];
			
			//increase velocity
			vel[0] = +vel[0] + +acc[0];
			vel[1] = +vel[1] + +acc[1];
			vel[2] = +vel[2] + +acc[2];
			
			//increase positions
			pos[0] = +pos[0] + +vel[0];
			pos[1] = +pos[1] + +vel[1];
			pos[2] = +pos[2] + +vel[2];
			
			velocities[i] = vel;
			positions[i] = pos;
		}
	}
	checkCount ++;
}

var finalSurv = 0;
for (i = 0; i < inputs.length; i++){
	if (survivors[i]){finalSurv += 1;}
}
console.log(finalSurv);

