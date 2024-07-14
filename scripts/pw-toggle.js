let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = ()=> {
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "images/opened-eye.png";
    }
    else{
        password.type = "password";
        eyeicon.src = "images/hide-eye-img.jpg";
    }
}