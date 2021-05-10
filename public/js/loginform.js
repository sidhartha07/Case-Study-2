let email = document.getElementById("email");
let pwd = document.getElementById('pwd');
let error = document.getElementById("error");

let regexp = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
let regpas =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{7,}$/

if((regexp.test(email.value))&&(pwd.value.length>=8)&&(regpas.test(pwd.value))){
    error.innerHTML = "Valid!!"; 
    error.style.css = "green";
    return true;
}
else{
    error.innerHTML = "Invalid!!";
    error.style.css = "red";
    return false;
}