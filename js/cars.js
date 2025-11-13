function findCarById(jsonObject, id) {
	return jsonObject.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];
}

function featuredCars(){	
	fetch('json/cars.json')
	.then((response) => response.json())
    .then((json) =>{
		var output = '';
		var out = '';
		for(i in json){
			output += '<div class="item"><div class="card-s new-cars-card"><div class="text-on-image"><img  src="'+json[i].images[0]+'" class="main-image" /><div class="product-label-featured"><label><i class="fa fa-star-o" aria-hidden="true"></i><span >Feature</span></label></div></div><div class="card-body"><h5>'+json[i].title+'</h5><div class="locations"><p class="mb-md-2"><i class="fa fa-map-marker pe-2"></i>Lahore</p><p class="mb-md-2"><i class="fa fa-heart-o"  aria-hidden="true"></i></p></div><hr><div class="row d-flex mb-1 specs"><div class="col-md-4 col-6"><p class="d-flex my-1"><img class="custom-img-listing" src="icon/1.png"><span class="text-dark">Automatic</span></p></div><div class="col-md-4 col-6"><p class="d-flex my-1"><img class="custom-img-listing" src="icon/2.png"><span class="text-dark">Petrol</span></p></div><div class="col-md-4 col-6"><p class="d-flex my-1"><img class="custom-img-listing" src="icon/3.png"><span class="text-dark">998cc</span></p></div></div><div class="locations"><h6 class="card-price">'+json[i].price+'<small class="pkr">PKR</small></h6><a href="'+json[i].link+'"><button class="btn btnn">Details</button></a></div></div></div> </div>';
			
		}
		document.getElementById('featuredCars').innerHTML = output;
		owl_prod_slider('owl-carousel');
	});
}

function owl_prod_slider(target){
	$('.'+target).owlCarousel({
		dots: false,
		loop:false,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});
}

featuredCars();