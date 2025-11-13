if(json[i].conditiontext == 'Mist'){
    icon += '<img src="'+json[i].conditionicon+'" style="height: 184px;margin-top: -30px;" alt="weather condition"/>';
    document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17V2i1Zak0xWSgNuC8ydl7IbQO0EFdu3-Hzg-dIeiwrrBmo6HmXZIuijxJaVe8H5Tr_A&usqp=CAU';
    
    document.getElementById('sun-icon').innerHTML = icon;
}else if(json[i].temp_c >= 30){
    cloud = '<h4>SKY Condition : <small>'+json[i].condition.text+'</small></h4><hr><h4>Clouds : '+json[i].cloud+' '+' %</h4>';
    document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(https://www.wkbn.com/wp-content/uploads/sites/48/2021/03/clouds-cloudy-sky-spring-summer-fall-winter-weather-generic-8-1.jpg?w=1280)';

    document.getElementById('cloud-ptc').innerHTML = cloud;
    document.getElementById('sun-icon').innerHTML = icon;
}else if(json[i].temp_c >= 20){
    cloud = '<h4>SKY Condition : <small>'+json[i].condition.text+'</small></h4><hr><h4>Clouds : '+json[i].cloud+' '+' %</h4>';
    icon += '<img src="'+json[i].condition.icon+'" style="height: 184px;margin-top: -30px;" alt="weather condition"/>';
    document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(https://wpcdn.us-east-1.vip.tn-cloud.net/www.klkntv.com/content/uploads/2020/04/cloud1.jpg)';

    document.getElementById('cloud-ptc').innerHTML = cloud;
    document.getElementById('sun-icon').innerHTML = icon;
}else if(json[i].temp_c >= 10){
    cloud += '<h4>SKY Condition : <small>'+json[i].condition.text+'</small></h4><hr><h4>Clouds : '+json[i].cloud+' '+' %</h4>';
    icon += '<img src="https://img.icons8.com/emoji/512/cloud-emoji.png" style="height: 184px;margin-top: -30px;" alt="weather condition"/>';
    document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(https://www.shutterstock.com/image-photo/photo-cloudy-clouds-sky-very-260nw-2121112247.jpg)';

    document.getElementById('cloud-ptc').innerHTML = cloud;
    document.getElementById('sun-icon').innerHTML = icon;
}else if(json[i].temp_c <= 10){
    cloud += '<h4>SKY Condition : <small>'+json[i].condition.text+'</small></h4><hr><h4>Clouds : '+json[i].cloud+' '+' %</h4>';
    icon += '<img src="https://img.icons8.com/fluency/512/downpour.png" style="height: 184px;margin-top: -30px;" alt="weather condition"/>';
    document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(http://cdn.shopify.com/s/files/1/1102/3318/articles/selective-focus-photo-of-obalte-green-leafed-plants-during-1463530_72dd75c5-61d8-4379-993b-217d73ce1c23.jpg?v=1573674139)';

    document.getElementById('cloud-ptc').innerHTML = cloud;
    document.getElementById('sun-icon').innerHTML = icon;
}else if(json[i].temp_c <= -1){
    cloud += '<h4>SKY Condition : <small>'+json[i].condition.text+'</small></h4><hr><h4>Clouds : '+json[i].cloud+' '+' %</h4>';
    icon += '<img src="https://img.icons8.com/fluency/512/downpour.png" style="height: 184px;margin-top: -30px;" alt="weather condition"/>';
    document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(https://stantonhouseinn.com/wp-content/uploads/2020/11/winter-in-connecticut-farm.jpg)';

    document.getElementById('cloud-ptc').innerHTML = cloud;
    document.getElementById('sun-icon').innerHTML = icon;
} 






let condition = JSON.parse(json);
        if(json[i].condition.text = 'Overcast'){
            if(hours > 18){
                document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(https://upload.wikimedia.org/wikipedia/commons/5/58/Sunset_2007-1.jpg)';
            }else if(hours <= 18){
                document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(https://media.istockphoto.com/id/1046851238/photo/sun-shining-on-blue-sky-background.jpg?b=1&s=170667a&w=0&k=20&c=N9eqdWeJuNRzOhpkG6O54uIzhg9Nv_8MPoIqI35ficI=)';
            }
        }else if(json[i].condition.text = 'Light snow'){
            if(hours <= 18){
                document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c25vd3xlbnwwfHwwfHw%3D&w=1000&q=80)';
            }else if(hours > 18){
                document.body.style.backgroundImage = 'linear-gradient(rgba(29,84,107,.0),rgba(2,48,41,.9)),url(https://i.pinimg.com/originals/15/26/96/152696cda1905afef90e9437b5fe40f9.jpg)';
            }
        }