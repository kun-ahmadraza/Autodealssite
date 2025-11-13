function getURLId() {
	let url = window.location.search;
	let urlParams = new URLSearchParams(url);
	let id = urlParams.get('id');
	return id;	
}


function findCarById(jsonObject, id) {
	return jsonObject.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];
}


function carImages(data){
	var output = "";
	var carImage = '';
	for (d in data) {
		output += '<div class="item"><img class="thumdnails" src="'+data[d]+'"></div>' ;
		carImage += '<div class="item"><img src="'+data[d]+'"></div>';
	}
	document.getElementById('sync1').innerHTML = carImage;
	document.getElementById('sync2').innerHTML = output;
	enableCarImageSlider();
}

function detail(){	
	fetch('json/cars.json')
	.then((response) => response.json())
    .then((json) =>{
		let id = getURLId();
		var data = findCarById(json, id);;
		carImages(data['images']);

		
                         
	});
}

detail();


var sync1 = $("#sync1");
var sync2 = $("#sync2");
var slidesPerPage = 4;
var syncedSecondary = true;

function enableCarImageSlider() {
	sync1.owlCarousel({
		items: 1,
		slideSpeed: 2000,
		nav: true,
		autoplay: false, 
		dots: false,
		loop: true,
		responsiveRefreshRate: 200,
		navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
	}).on('changed.owl.carousel', syncPosition);

	sync2
		.on('initialized.owl.carousel', function() {
			sync2.find(".owl-item").eq(0).addClass("current");
		})
		.owlCarousel({
			items: slidesPerPage,
			dots: false,
			nav: false,
			slideBy: slidesPerPage,
			responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
		
	function syncPosition(el) {
		//if you set loop to false, you have to restore this next line
		//var current = el.item.index;

		//if you disable loop you have to comment this block
		var count = el.item.count - 1;
		var current = Math.round(el.item.index - (el.item.count / 2) - .5);

		if (current < 0) {
			current = count;
		}
		if (current > count) {
			current = 0;
		}

		//end block

		sync2
			.find(".owl-item")
			.removeClass("current")
			.eq(current)
			.addClass("current");
		var onscreen = sync2.find('.owl-item.active').length - 1;
		var start = sync2.find('.owl-item.active').first().index();
		var end = sync2.find('.owl-item.active').last().index();

		if (current > end) {
			sync2.data('owl.carousel').to(current, 100, true);
		}
		if (current < start) {
			sync2.data('owl.carousel').to(current - onscreen, 100, true);
		}
	}

	function syncPosition2(el) {
		if (syncedSecondary) {
			var number = el.item.index;
			sync1.data('owl.carousel').to(number, 100, true);
		}
	}

	sync2.on("click", ".owl-item", function(e) {
		e.preventDefault();
		var number = $(this).index();
		sync1.data('owl.carousel').to(number, 300, true);
	});
}


function featuredtable(){
	fetch('json/cars.json')
	.then((response) => response.json())
    .then((json) =>{
		var output = "";
		for(i in json) {
			output += '<div class="items-main"><div class="flex items"><div class="d-flex"><p class="align-self-center mb-0"><img src="file:///D:/Tranning%20Exercises/Exe%201/images/svgviewer-output.svg" height= "15px"></p><p class="align-self-center mb-0">Engine Type</p></div><p class="align-self-center mb-0 text-dark">'+json[i].engine_type+'</p></div></div><div class="items-main"><div class="flex items"><div class="d-flex"><p class="align-self-center mb-0"><i class="fa fa-building-o" aria-hidden="true" height= "15px"></i></p><p class="align-self-center mb-0">Assembly</p></div><p class="align-self-center mb-0">'+json[i].assembly+'</p></div></div><div class="items-main"><div class="flex items"><div class="d-flex"><p class="align-self-center mb-0"><i class="fa fa-building-o" aria-hidden="true" height= "15px"></i></p><p class="align-self-center mb-0">Assembly</p></div><p class="align-self-center mb-0">'+json[i].assembly+'</p></div></div>';
		}
		console.log(output);
		document.getElementById('featuredtable').innerHTML = output;
	});
}


featuredtable();