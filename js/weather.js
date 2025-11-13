var cityName = 'Karachi';

function setTime(){
    var text2 = document.getElementById("time");
    var timemediam = document.getElementById("medium");
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var dn = "PM";
    if (hours<12)
    dn="AM";
    if (hours>12)
    hours=hours-12;
    if (hours==0)
    hours=12;
    if (minutes<=9)
    minutes="0"+minutes;

    text2.innerHTML = + hours + ':' +  minutes;
    timemediam.innerHTML = dn;

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let date = now.getDate();
    let year = now.getFullYear();
    let month = months[now.getMonth()];
    let day = weekday[now.getUTCDay()];
    if (date<=9)
    date="0"+date;
    document.getElementById("day").innerHTML = day + " , " + " " + date + " " + month + " " + year;
 }
 
 setInterval(setTime, 1000);

function searchCityWeather(){
    var city = document.getElementById('city').value;
    if(event.keyCode == 13 && city !== '') {
        document.getElementById('currentyCity').innerHTML = '<i class="fa fa-map-marker me-2" aria-hidden="true"></i>' + city;        
        getWeatherDetail();
        return false;
    }
};

function getWeatherDetail(let='', long=''){
    var now = new Date();
    var hours = now.getHours();
    var city = document.getElementById('city').value;
    if(city !== ''){
        document.getElementById('currentyCity').innerHTML = '<i class="fa fa-map-marker me-2" aria-hidden="true"></i>' + city; 
        cityName = city;
    }
    
try{
    const apikey = 'aae2bbdf041f4a0eacc130030230603';
    fetch('http://api.weatherapi.com/v1/current.json?key=aae2bbdf041f4a0eacc130030230603&q='+cityName+'&aqi=n/no'
        ,{
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apikey
          },
    })
    .then(response => response.json())
    .then(json =>{
        var output = "";
        var temprature = "";
        var windspeed = "";
        var feels = "";
        if (json.error) {
            alert(json.error);
        }
        console.log(json);
        for(i in json){
        temprature = '<h1 style="font-size: 90px;">'+json[i].temp_c+'<small class="ms-2"><sup>o</sup>C</small></h1>';
        output = '<h4>Temprature : '+json[i].temp_c+'<small ><sup class="ms-2">o</sup>C</small></h4><hr><h4>Humidity : '+json[i].humidity+'<small ><sup class="ms-2">o</sup>C</small></h4>';
        windspeed = '<h4>Wind Speed : '+json[i].wind_kph+'<small> kp/h</small></h4><hr><h4>Wind Degree : '+json[i].wind_degree+'<sup>o</sup></h4>';
        feels = '<p>Feels-Like : '+json[i].feelslike_c+'<small class="ms-2"><sup>o</sup>C</small></p>';

    };
        document.getElementById('temprature').innerHTML = temprature;
        document.getElementById('cloud-ptc').innerHTML = '<h4>SKY Condition : <small>'+json[i].condition.text+'</small></h4><hr><h4>Clouds : '+json[i].cloud+' '+' %</h4>';
        document.getElementById('feels').innerHTML = feels;
        document.getElementById('max_temp').innerHTML = output;
        document.getElementById('wind_speed').innerHTML = windspeed;
        document.getElementById('sun-icon').innerHTML = '<img src="'+json[i].condition.icon+'" style="height: 184px;margin-top: -30px;" alt="weather condition"/>';
    });
 }catch(error){
        alert(error.message);
 };
};


function setbgimg(){
    var now = new Date();
    var hours = now.getHours();
    if(hours >= 17){
        document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/sun/sunset-creating-a-red-sky.jpg)';
    }
}

function position(target) {
    // $.ajax({
    //     url: "https://api.bigdatacloud.net/data/reverse-geocode-client",
    //     type: "GET",
    //     data: {"latitude":position.coords.latitude, "longitude": position.coords.longitude, "localityLanguage":"en"},
    //     success: function(response) {
    //         console.log(response);
    //     }
    // })
    const apikey = "bdc_e7d9f0035471419c834eed6c293475c7";
    fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude'+target.coords.latitude+'&longitude='+target.coords.longitude+'&localityLanguage=en',{
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apikey
          },
    })
    .then(response => response.json())
    .then(json =>{
        console.log(json);
        cityName = json.locality.replace('Tehsil', '').replace('Samundari', 'Samundri');
        document.getElementById('currentyCity').innerHTML = '<h3 class="text-light"><i class="fa fa-map-marker me-2" aria-hidden="true"></i>'+cityName+'</h3>';
        getWeatherDetail();
    })
}

function findmylocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position); 
    }
}

findmylocation();

let online = navigator.onLine;
    if(!online){
	    alert('SORRY, Network not available');
    };

