//day 1.1
var a = document.body.children[0].innerText.trim();

sumA = 0;
for(i = 0; i < a.length; i++){
	if(a[i] == a[(i+1)%a.length]){
		sumA += +a[i]
	}
}
console.log(sumA);
