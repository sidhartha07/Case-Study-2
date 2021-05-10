// const { name } = require("ejs");

let name = document.getElementById("name");
let ph = document.getElementById("ph");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");
let strength = document.getElementById("strength");

function validate(){
    let regnam = /^([A-Za-z\s]+)$/
    let regexp = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    let regphn =/^\(?([0-9]{3})\)?[\-. ]?([0-9]{3})[\-. ]?([0-9]{4})$/
    let regpas =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{7,}$/

    if((regexp.test(email.value))&&(regphn.test(phn.value))&&(regnam.test(name.value))&&(regpas.test(pwd.value))){
        error.innerHTML = "VALID";
        error.style.color = "green";
        return true;
    }
    else{
        error.innerHTML = "INVALID";
        error.style.color = "red";
        return false;
    }
}

function checkpass(){
    let regpas =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{7,}$/
    if((pwd.value.length>=0)&&(pwd.value.length<2)){
        strength.innerHTML = "WEAK";
        strength.style.color = "red";
    }
    if((pwd.value.length>2)&&(pwd.value.length<=4)){
        strength.innerHTML = "MEDIUM";
        strength.style.color = "orange";
    }
    if(regpas.test(pwd.value)){
        strength.innerHTML = "STRONG";
        strength.style.color = "green";
    }
}