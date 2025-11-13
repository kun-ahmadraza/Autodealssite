class Users {
    login(){

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phoneNumber').value;
        let message = document.getElementById('message').value;
        let city = document.getElementById('city').value;
        let validation = document.getElementById("validation");
        let phoneValidate = document.getElementById("phoneValidate");
        let emailValidate = document.getElementById("emailValidate");
        let cityValidate = document.getElementById("cityValidate");
        let body = "Name:" + ' ' + name + " " + "Email:" + ' ' + email + " " + "Phone Number:" + ' ' + phone + " " + "City:" + ' ' + city + " " + "Message:" + message;

        if(name == "") {
            let list = document.getElementById("name").classList;
            list.add("myStyle");
            validation.style.display = 'block';
            validation.innerHTML = "Name cannot be left empty";
        }else {
            validation.innerHTML = "";
            validation.style.display = 'none';  
        };   
        if(isNaN(phone)) {
            let list = document.getElementById("phoneNumber").classList;
            list.add("myStyle");
            phoneValidate.style.display = 'block';
            phoneValidate.innerHTML = "Enter Numeric Value here.";

        }else if(phone == "") {
            let list = document.getElementById("phoneNumber").classList;
            list.add("myStyle");
            phoneValidate.style.display = 'block';
            phoneValidate.innerHTML = "Please, Enter the Phone number";

         }else if(phone.length < 7) {
            let list = document.getElementById("phoneNumber").classList;
            list.add("myStyle");
            phoneValidate.style.display = 'block';
            phoneValidate.innerHTML = "Phone Number should be at least 7 Numbers";

         }else if(phone.length > 11) {
            let list = document.getElementById("phoneNumber").classList;
            list.add("myStyle");
            phoneValidate.style.display = 'block';
            phoneValidate.innerHTML = "Phone Number should be at best 11 Numbers";

         }else {
            phoneValidate.innerHTML = "";
            phoneValidate.style.display = 'none';  
         };
         if(email == "") {
            let list = document.getElementById("email").classList;
            list.add("myStyle");
            emailValidate.style.display = 'block';
            emailValidate.innerHTML = "Please, enter email address";
         } else {
            emailValidate.innerHTML = "";
            emailValidate.style.display = 'none';  
        };
        if(city == "Select City") {
            let list = document.getElementById("city").classList;
            list.add("myStyle");
            cityValidate.style.display = 'block';
            cityValidate.innerHTML = "Please, enter Your city";
         } else {
            cityValidate.innerHTML = "";
            cityValidate.style.display = 'none';  
        };
      
      console.log(body)
     }
  }
  
      
  const user = new Users();
  let login = user.login;