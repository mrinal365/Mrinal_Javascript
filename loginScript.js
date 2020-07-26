function loginValidation(){
    var emails = document.getElementById('InputEmail').value;
    var pass = document.getElementById('InputPassword').value;
    console.log(emails);
    console.log(pass.length);
    
   
    if (emails == "") {
        document.getElementById('emailids').innerHTML = " Fill email id to proceed";
        return false;
    }
    
    if (emails.indexOf('@') <= 0) {
        document.getElementById('emailids').innerHTML = "  Invalid Email,check again!";
        return false;
    }

    if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
        document.getElementById('emailids').innerHTML = " Invalid Email,check again!";
        return false;
    }

    if (pass == "") {
        document.getElementById('passw').innerHTML = " Fill Password to proceed";
        return false;
    }
    if ((pass.length <= 7) || (pass.length > 25)) {
        document.getElementById('passw').innerHTML = " Password length between 7 and 25 allowed.";
        return false;
    }

}