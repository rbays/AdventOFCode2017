var factorA = 16807,
	factorB = 48271,
	divisor = 2147483647,
	valA = 679,
	valB = 771,
	matches = 0;
	
	
for (i = 0; i < 5000000; i++){
	do{
	valA = (valA * factorA) % divisor;
	}while(valA % 4 != 0)
	
	do{
	valB = (valB * factorB) % divisor;
	}while(valB % 8 != 0)

	if(valA % 65536 === valB % 65536){	//2^16
		matches += 1;
	}
}
console.log(matches);