var factorA = 16807,
	factorB = 48271,
	divisor = 2147483647,
	valA = 679,
	valB = 771,
	matches = 0;
	
	
for (i = 0; i < 40000000; i++){
	valA = (valA * factorA) % divisor;
	
	valB = (valB * factorB) % divisor;
	
	if(valA % 65536 === valB % 65536){	//2^16
		matches += 1;
	}
}
console.log(matches);