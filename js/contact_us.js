function sendEmail(){
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;	
let phonenumber = document.getElementById('phoneNumber').value;	
let subject = document.getElementById('subject').value;
let message = document.getElementById('message').value;	
	
let body = "Name:" + name + " " + "Email:" + email + " " + "Phone Number:" + phonenumber + " " + "Subject:" + subject + " " + "Message:" + message;
	
	Email.send({
		SecureToken : "3bf51f62-1fe5-416c-8e36-0b62db7c92f5",
		To : 'ahmadraza222gb@gmail.com',
		From : email,
		Subject : "This is the subject",
		Body : body
	}).then(
  message => alert(message)
);
}