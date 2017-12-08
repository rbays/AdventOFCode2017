//day 1.2
var b = document.body.children[0].innerText.trim();

sumB = 0;
for(i = 0; i < b.length; i++){
	if(b[i] == b[(i+(b.length/2))%b.length]){
		sumB += +b[i];
	}
}
console.log(sumB);
