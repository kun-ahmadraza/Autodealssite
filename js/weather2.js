const el = document.getElementById('nav-time');

function updateClock() {
   var now = new Date();
   var time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(); 
        
   el.innerHTML = time;    
}

setInterval(updateClock, 1);