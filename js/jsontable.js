const profile = document.getElementById('profile');


    const extension = profile.split('.').pop();

    const allowedExtensions = ['jpg', 'jpeg', 'png'];

    if (allowedExtensions.includes(extension)) {
        // Upload file to the server

    } else {
        // Handle error
        alert(`Please upload ${allowedExtensions.join(', ')} files`);
    };
	
var	profile = document.getElementById('uploadfile');