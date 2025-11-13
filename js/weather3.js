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
        document.getElementById('city').innerHTML = '<i class="fa fa-map-marker me-2" aria-hidden="true"></i>' + input;        
        getWeatherDetail();
        return false;
    }
};

function getWeatherDetail(){
    var city = document.getElementById('city').value;
    if(city !== ''){
        document.getElementById('currentyCity').innerHTML = '<i class="fa fa-map-marker me-2" aria-hidden="true"></i>' + city; 
    };
    if (!city){
        city="Faisalabad"
    }
    const apikey = '4B+i0l/mSIYMfOPKFpCqqQ==ow4fSFA8TSByErvv';
    fetch('https://api.api-ninjas.com/v1/weather?city='+city,{
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
        var cloud = "";
        var windspeed = "";
        var icon = "";
        if (json.error) {
            alert(json.error);
        }
        console.log(json);
        temprature += '<h1 class="text-light ms-3" style="font-size:90px;">'+json.temp+'<small class="ms-2"><sup>o</sup>C</small></h1>';
        output += '<h4>Temprature : '+json.temp+'<small ><sup class="ms-2">o</sup>C</small></h4>';
        windspeed += '<h4>Wind Speed : '+json.wind_speed+'<small> km/h</small></h4>';
        if(json.temp >= 40){
            cloud += "<h4>SKY Condition : <small>Extremly Hot</small></h4>";
            icon += '<img src="https://img.icons8.com/emoji/512/sun-emoji.png" style="height: 184px;margin-top: -30px;" alt="weather condition"/>';
            document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17V2i1Zak0xWSgNuC8ydl7IbQO0EFdu3-Hzg-dIeiwrrBmo6HmXZIuijxJaVe8H5Tr_A&usqp=CAU';
            
            document.getElementById('cloud-ptc').innerHTML = cloud;
            document.getElementById('sun-icon').innerHTML = icon;
        }else if(json.temp >= 30){
            cloud += "<h4>SKY Condition : <small>Mostly Sunny</small></h4>";
            icon += '<img src="https://img.icons8.com/fluency/512/weather.png" style="height: 184px;margin-top: -30px;" alt="weather condition"/>';
            document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(https://www.wkbn.com/wp-content/uploads/sites/48/2021/03/clouds-cloudy-sky-spring-summer-fall-winter-weather-generic-8-1.jpg?w=1280)';

            document.getElementById('cloud-ptc').innerHTML = cloud;
            document.getElementById('sun-icon').innerHTML = icon;
        }else if(json.temp >= 20){
            cloud += "<h4>SKY Condition : <small>Partly CLoudy</small></h4>";
            icon += '<img src="https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-cloudy-weather-flaticons-flat-flat-icons-2.png" style="height: 184px;margin-top: -30px;" alt="weather condition"/>';
            document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(https://wpcdn.us-east-1.vip.tn-cloud.net/www.klkntv.com/content/uploads/2020/04/cloud1.jpg)';

            document.getElementById('cloud-ptc').innerHTML = cloud;
            document.getElementById('sun-icon').innerHTML = icon;
        }else if(json.temp >= 10){
            cloud += "<h4>SKY Condition : <small>Cloudy sky</small></h4>";
            icon += '<img src="https://img.icons8.com/emoji/512/cloud-emoji.png" style="height: 184px;margin-top: -30px;" alt="weather condition"/>';
            document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(https://www.shutterstock.com/image-photo/photo-cloudy-clouds-sky-very-260nw-2121112247.jpg)';

            document.getElementById('cloud-ptc').innerHTML = cloud;
            document.getElementById('sun-icon').innerHTML = icon;
        } else if(json.temp <= 10){
            cloud += "<h4>SKY Condition : <small>Raining</small></h4>";
            icon += '<img src="https://img.icons8.com/fluency/512/downpour.png" style="height: 184px;margin-top: -30px;" alt="weather condition"/>';
            document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(http://cdn.shopify.com/s/files/1/1102/3318/articles/selective-focus-photo-of-obalte-green-leafed-plants-during-1463530_72dd75c5-61d8-4379-993b-217d73ce1c23.jpg?v=1573674139)';

            document.getElementById('cloud-ptc').innerHTML = cloud;
            document.getElementById('sun-icon').innerHTML = icon;
        }
		document.getElementById('temprature').innerHTML = temprature;
        document.getElementById('max_temp').innerHTML = output;
        document.getElementById('wind_speed').innerHTML = windspeed;
    });
}

getWeatherDetail();