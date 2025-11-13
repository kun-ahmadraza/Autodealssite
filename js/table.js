 var output = '';
	
var t = 2;
	for(let i = 1; i<=10; i++){
	
	output += "$(t) x $(i) = $(t * i) <br />";
	document.getElementById('table').innerHTML = output;
	}