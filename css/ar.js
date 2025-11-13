function cars(target) {
  document.getElementById("cars").style.display = 'block';
  document.getElementById("bikes").style.display = 'none';
  document.getElementById("parts").style.display = 'none';
  document.getElementById("auction").style.display = 'none';
  document.getElementById("bikes_heading").innerHTML = "New & Used Cars Available"
  document.getElementById("bikes_line").innerHTML = "Thousand of used and new Cars for sale in Pakistan"; 

  setActiveTab(target);
}

function bikes(target) {
  document.getElementById("bikes").style.display = 'block';
  document.getElementById("cars").style.display = 'none';
  document.getElementById("parts").style.display = 'none';
  document.getElementById("auction").style.display = 'none';
  document.getElementById("bikes_heading").innerHTML = "New & Used Bikes Available";
  document.getElementById("bikes_line").innerHTML = "Thousand of used and new Bikes for sale in Pakistan";
  
  setActiveTab(target);
}

function parts(target) {
  document.getElementById("parts").style.display = 'block';
  document.getElementById("cars").style.display = 'none';
  document.getElementById("bikes").style.display = 'none';
  document.getElementById("auction").style.display = 'none';
  document.getElementById("bikes_heading").innerHTML = "New & Used Parts Available";
  document.getElementById("bikes_line").innerHTML = "Thousand of used and new parts for sale in Pakistan";
  
  setActiveTab(target);
}

function auction(target) {
  document.getElementById("auction").style.display = 'block';
  document.getElementById("cars").style.display = 'none';
  document.getElementById("bikes").style.display = 'none';
  document.getElementById("parts").style.display = 'none';
  document.getElementById("bikes_heading").innerHTML = "Auction Sheet Verification";
  document.getElementById("bikes_line").innerHTML = "Japan’s first auction sheet provider with 100% authenticity.";
  
  setActiveTab(target);
}

function setActiveTab(target) {
  var elems = target.closest('ul').querySelectorAll('li');
  [].forEach.call(elems, function(el) {
    el.querySelector('a').classList.remove("active");
  });
  target.classList.add('active');
}

// browse cars code
function category(target) {
  document.getElementById("category").style.display = 'block';
  document.getElementById("budget").style.display = 'none';
  document.getElementById("model").style.display = 'none';
  document.getElementById("make").style.display = 'none';
  document.getElementById("body").style.display = 'none';
  document.getElementById("city").style.display = 'none';
  
  setActiveTab2(target);
}

function budget(target) {
  document.getElementById("budget").style.display = 'block';
  document.getElementById("category").style.display = 'none';
  document.getElementById("model").style.display = 'none';
  document.getElementById("make").style.display = 'none';
  document.getElementById("body").style.display = 'none';
  document.getElementById("city").style.display = 'none';

  setActiveTab2(target);
}

function model(target) {
  document.getElementById("model").style.display = 'block';
  document.getElementById("category").style.display = 'none';
  document.getElementById("budget").style.display = 'none';
  document.getElementById("make").style.display = 'none';
  document.getElementById("body").style.display = 'none';
  document.getElementById("city").style.display = 'none';

  setActiveTab2(target);
}

function make(target) {
  document.getElementById("make").style.display = 'block';
  document.getElementById("category").style.display = 'none';
  document.getElementById("budget").style.display = 'none';
  document.getElementById("model").style.display = 'none';
  document.getElementById("body").style.display = 'none';
  document.getElementById("city").style.display = 'none';

  setActiveTab2(target);
}

function bodytype(target) {
  document.getElementById("body").style.display = 'block';
  document.getElementById("category").style.display = 'none';
  document.getElementById("budget").style.display = 'none';
  document.getElementById("model").style.display = 'none';
  document.getElementById("make").style.display = 'none';
  document.getElementById("city").style.display = 'none';

  setActiveTab2(target);
}

function city(target) {
  document.getElementById("city").style.display = 'block';
  document.getElementById("category").style.display = 'none';
  document.getElementById("budget").style.display = 'none';
  document.getElementById("model").style.display = 'none';
  document.getElementById("make").style.display = 'none';
  document.getElementById("body").style.display = 'none';

  setActiveTab2(target);
}

function setActiveTab2(target) {
  var elems = target.closest('ul').querySelectorAll('li');
  [].forEach.call(elems, function(el) {
    el.classList.remove("active");
  });
  target.classList.add('active');
}


function getCities(){
	fetch('json/cities.json')
	.then((response) => response.json())
    .then((json) =>{
		var output = '';
		for (i in json) {
			output += '<option value="'+json[i].id+'">'+json[i].name+'</option>';
		}
		 document.getElementById('cities').innerHTML = "<option value=''>Select City</option>" + output;
		 document.getElementById('citie').innerHTML = "<option value=''>Select City</option>" + output;
	});
}

getCities();
