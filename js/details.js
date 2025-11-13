function featuredCars(){
	fetch('json/cars.json')
	.then((response) => response.json())
    .then((json) =>{
		var output = "";
		for(i in json) {
			output += '<div class="d-flex flex-column overflow"><img class="thumdnails" src="'+json[i].images[0]+'"><img class="thumdnails" src="'+json[i].images[1]+'"><img class="thumdnails" src="'+json[i].images[2]+'"><img class="thumdnails" src="'+json[i].images[3]+'"><img class="thumdnails" src="'+json[i].images[4]+'"></div>';
		}
		document.getElementById('carImages').innerHTML = output;
	});
}