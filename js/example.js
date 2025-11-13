function detail(){	
	fetch('json/index.json')
	.then((response) => response.json())
    .then((json) =>{
		var output = '';
		var carbrand = '';
		var bodyType = '';
		for(i in json){
		    output += '<div class="col-2"><a href="" class="car-anchor ms-4"> <img class="mt-4" src="'+json[i].image+'" height="50px" width="100px"/> <p class="text-center ms-sm-4">'+json[i].name+'</p> </a></div>'; 

			carbrand += '<div class="col-lg-2 col-md-3 mt-3 col-6 mb-0 makes"><a href="" id="outp"><img src="'+json[i].brand_icon+'"/><p class="ms-3">'+json[i].brand_name+'</p></a></div>';
			
			bodyType += '<div class="col-lg-2 col-md-3 mt-3 col-6 mb-3 bodytype text-center"><a href=""><img src="'+json[i].bodytype_img+'"/><p class="mt-3">'+json[i].bodytype_text+'</p></a></div>';
		}
			document.getElementById('carType').innerHTML = output;
			document.getElementById('carBrand').innerHTML = carbrand;
			document.getElementById('bodyType').innerHTML = bodyType;
	});
}

detail();

function budget(){
	fetch('json/budget.json')
	.then((response) => response.json())
	.then((json) =>{
			var budget = '';
			for(i in json){
				budget += '<div class="col-sm-3 col-6"><div class="card budget-items mb-md-3"><a class="text-decoration-none" href=""><p class=" mb-0 text-muted">'+json[i].budget+'</p></a></div></div>';
			}	
				document.getElementById('carBudget').innerHTML = budget;

	});
}

budget();

function model(){
	fetch('json/model.json')
	.then((response) => response.json())
	.then((json) =>{
			var model = '';
			for(i in json){
				model += '<div class="col-lg-4 col-md-4 col-6"><a class="text-decoration-none model-data" href=""><h5 class=" mb-0 text-muted">'+json[i].model+'</h5></a></div>';
			}	
				document.getElementById('carModel').innerHTML = model;

	});
}

model();

let chavronIcon = "<i class='fa fa-chevron-right mt-3'></i>";

function exploreProducts(){	
	fetch('json/explore.json')
	.then((response) => response.json())
    .then((json) =>{
		var output = '';
		var out = '';
		for(i in json){
		    output += '<div class="col-sm-3 col-6 px-2 mb-3 text-decoration-none text-dark"><div class=" offer-1"><a href="'+json[i].link+'" class="text-decoration-none text-dark"><img src="'+json[i].image+'" height="100px" width="auto"><div class="d-flex justify-content-between my-2 mt-4"><div class="d-flex flex-column"><h4 class="text-start ms-3">'+json[i].card_text+'</h4></div><span>'+chavronIcon+'</span></div></a></div></div>';  
		}
			document.getElementById('exploreProducts').innerHTML = output;
	});
}

exploreProducts();

function city(){	
	fetch('json/city.json')
	.then((response) => response.json())
    .then((json) =>{
		var City = '';
		for(i in json){
		    City += '<div class="col-lg-2 col-md-3 mt-3 col-6 mb-3 bodytype "><a href=""><img src="'+json[i].city_img+'"/><p class="mt-3">'+json[i].city_text+'</p></a></div>';  
		}
			document.getElementById('exploreCity').innerHTML = City;
	});
}

city();