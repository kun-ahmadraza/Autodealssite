let engineIcon = "<img src='icon/4.png' class='pump-icon'/>";
let cityIcon = "<img src='icon/city.png' class='pump-icon'/>";
let regcityIcon = "<i class='fa fa-map-marker me-1'></i>";
let checkIcon = "<i class='fa fa-check text-success'></i>";
let crossIcon = "<i class='fa fa-times text-error'></i>";
let locationIcon = "<i class='fa fa-map-marker location-icon me-1'></i>";
let phoneIcon = "<i class='fa fa-phone'></i>";
let whatsappIcon = "<i class='fa fa-whatsapp text-success'></i>";
let messageIcon = "<i class='fa fa-comment-o me-2'></i>";
let verifyIcon = "<i class='fa fa-check checked-icon'></i>";
let none = '';
let Auctionbtn = "<button class='btn btnn auction-sheet mt-5'>Verify Auction Sheet</button>";

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
		var data = findCarById(json, id);
		carImages(data['images']);
		
		document.getElementById('carSpecs').innerHTML = '<div class="col-12 p-0"><div class="table-responsive ps-3 pe-3"><table class="table "><tr><td> '+engineIcon+' Engine Type</td><td>'+data['engine_type']+'</td><td>'+cityIcon+' Assembly</td><td>'+data['assembly']+'</td></tr><tr><td>Year</td><td>'+data['year']+'</td><td>KMs Driven</td><td>'+data['kms_driven']+'</td></tr><tr><td>Color</td><td>'+data['color']+'</td><td>Transmission</td><td>'+data['transmission']+'</td></tr><tr><td>'+regcityIcon+'Reg City</td><td>'+data['reg_city']+'</td><td>Battery Capacity</td><td>'+data['battery_capacity']+'</td></tr><tr><td>Seller Type</td><td>'+data['seller_type']+'</td></tr></table></div></div>';
		
		document.getElementById('aboutCar').innerHTML = '<h3 class="car-tittle">'+data['brand']+' '+data['model']+' '+data['year']+'</h3><h5 class="mt-md-3 car-price">Price On Call</h5><h4 class="mt-5">'+locationIcon+' '+data['location']+'</h4><div class="cards" style="	padding: 0 !important;"><div class="d-flex mb-2"><a class="owner-contact" onclick="showNumber(this)" data-id="'+data['contact_no']+'" id="showNumber">'+phoneIcon+' Show Number</a><a class="owner-contact-whatsapp" href="'+data['whatsapp_no']+'" data-action="share/whatsapp/share" target="_blank">'+whatsappIcon+' WhatsApp</a></div><a class="btn desc-msg-1 bg-white shadow w-100 mt-n1 border-top"">'+messageIcon+'Message</a></div>';
			
		document.getElementById('description').innerHTML = '<p>'+data['description']+'</p>';
		
		let verifyPhone;
		if (data['verifyPhone']){
			verifyPhone = verifyIcon;
		}else{
			verifyPhone = none;
		}
		document.getElementById('verifyNumber').innerHTML = verifyPhone;	
		
		let verifyAuction;
		if (data['auction_sheet']){
			verifyAuction = Auctionbtn;
		}else{
			verifyAuction = none;
		}
		document.getElementById('verifyAuctionSheet').innerHTML = verifyAuction;	
		
		let auction	= (data['contact_no']);
		var air_bags = (!data['air_bags']) ? crossIcon : checkIcon;
		var alloy_wheels = (!data['alloy_wheels']) ? crossIcon : checkIcon;
		var air_condition = (!data['air_conditioner']) ? crossIcon : checkIcon;
		var cup_hiolders = (!data['cup_hiolders']) ? crossIcon : checkIcon;
		var immobilizer = (!data['immobilizer']) ? crossIcon : checkIcon;
		var power_steering = (!data['power_steering']) ? crossIcon : checkIcon;
		var power_mirrors = (!data['power_mirrors']) ? crossIcon : checkIcon;
		var front_speakers = (!data['front_speakers']) ? crossIcon : checkIcon;
		var arm_rest = (!data['arm_rest']) ? crossIcon : checkIcon;
		var am_fm_radio = (!data['am_fm_radio']) ? crossIcon : checkIcon;
		var front_fog_lights = (!data['front_fog_lights']) ? crossIcon : checkIcon;
		var power_door_locks = (!data['power_door_locks']) ? crossIcon : checkIcon;
		var power_windows = (!data['power_windows']) ? crossIcon : checkIcon;
		var child_lock = (!data['child_lock']) ? crossIcon : checkIcon;
		var defogger = (!data['defogger']) ? crossIcon : checkIcon;
		var anti_lock_braking_system = (!data['anti_lock_braking_system']) ? crossIcon : checkIcon;
		var cool_box = (!data['cool_box']) ? crossIcon : checkIcon;
		var climate_controls = (!data['climate_controls']) ? crossIcon : checkIcon;
		var rear_wiper = (!data['rear_wiper']) ? crossIcon : checkIcon;
		var rear_camera = (!data['rear_camera']) ? crossIcon : checkIcon;
		var folding_rear_seat = (!data['folding_rear_seat']) ? crossIcon : checkIcon;
		var multi_info = (!data['multi_info']) ? crossIcon : checkIcon;
		var sun_roof = (!data['sun_roof']) ? crossIcon : checkIcon;
		var adjustable_headlights = (!data['adjustable_headlights']) ? crossIcon : checkIcon;
		var steering_adjustment = (!data['steering_adjustment']) ? crossIcon : checkIcon;
		var navigation = (!data['navigation']) ? crossIcon : checkIcon;
		var lcd = (!data['lcd']) ? crossIcon : checkIcon;
		var retractable_mirror = (!data['retractable_mirror']) ? crossIcon : checkIcon;
		var rear_speakers = (!data['rear_speakers']) ? crossIcon : checkIcon;
		
		document.getElementById('carFeature').innerHTML = '<div class="col-12 p-0"><div class="table-responsive ps-3 pe-3"><table class="table "><tr><td class=""> Air Bags</td><td class="text-end">'+air_bags+'</td><td> Air Conditioner</td><td class="text-end">'+air_condition+'</td><tr><td> Alloy Wheels</td><td class="text-end">'+alloy_wheels+'</td><td> Anti-Lock Braking System</td><td class="text-end">'+anti_lock_braking_system+'</td></tr><tr><td> Cool Box</td><td class="text-end">'+cool_box+'</td><td> Cup Holders</td><td class="text-end">'+cup_hiolders+'</td></tr><tr><td> Folding Rear-Seat</td><td class="text-end">'+folding_rear_seat+'</td><td> Immobilizer</td><td class="text-end">'+immobilizer+'</td></tr><tr><td> Power Door Locks</td><td class="text-end">'+power_door_locks+'</td><td> Power Steering</td><td class="text-end">'+power_steering+'</td></tr><tr><td> Power Windows</td><td class="text-end">'+power_windows+'</td><td> Power Mirrors</td><td class="text-end">'+power_mirrors+'</td></tr><tr><td> Rear Wiper</td><td class="text-end">'+rear_wiper+'</td><td> LCD</td><td class="text-end">'+lcd+'</td></tr><tr><td> Rear Camera</td><td class="text-end">'+rear_camera+'</td><td> Climate Control</td><td class="text-end">'+climate_controls+'</td></tr><tr><td> Multi Info</td><td class="text-end">'+multi_info+'</td><td> Front Speakers</td><td class="text-end">'+front_speakers+'</td></tr><tr><td> Rear speakers</td><td class="text-end">'+rear_speakers+'</td><td>Arm Rest</td><td class="text-end">'+arm_rest+'</td></tr><tr><td> Child Lock</td><td class="text-end">'+child_lock+'</td><td>AM/FM Radio</td><td class="text-end">'+am_fm_radio+'</td></tr><tr><td> Defogger</td><td class="text-end">'+defogger+'</td><td>Retractable Mirror</td><td class="text-end">'+retractable_mirror+'</td></tr><tr><td> Front Fog Lights</td><td class="text-end">'+front_fog_lights+'</td><td>Leather Seats</td><td class="text-end">'+checkIcon+'</td></tr><tr><td>Navigation</td><td class="text-end">'+navigation+'</td><td>Steering Adjustment</td><td class="text-end">'+steering_adjustment+'</td></tr><tr><td> Sun Roof</td><td class="text-end">'+sun_roof+'</td><td>Adjustable Headlights</td><td class="text-end">'+adjustable_headlights+'</td></tr></table></div></div>';
                         
	});
}

detail();


function showNumber(target){
	var is_displayed;
	let contact_no	= $(target).attr('data-id');
	var phoneIcon = "<i class='fa fa-phone'></i>";
	if (!is_displayed) {
		document.getElementById('showNumber').innerHTML = phoneIcon + contact_no;
	}else {
		document.getElementById('showNumber').innerHTML = "Show Number";
	}
}

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

