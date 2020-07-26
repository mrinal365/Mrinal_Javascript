function registerValidation() {
   
    var user = document.getElementById('InputUser').value;
    var name = document.getElementById('InputName').value;
    var mobile = document.getElementById('InputPhone').value;
    var emails = document.getElementById('InputEmail').value;
    var pass = document.getElementById('InputPassword').value;
    var cmpass = document.getElementById('InputConfirmPassword').value
 
    if (user.trim() == "") {
        document.getElementById('checkUser').innerHTML = " Please fill the user nafunction registerValidation() {
   
    var user = document.getElementById('InputUser').value;
    var name = document.getElementById('InputName').value;
    var mobile = document.getElementById('InputPhone').value;
    var emails = document.getElementById('InputEmail').value;
    var pass = document.getElementById('InputPassword').value;
    var cmpass = document.getElementById('InputConfirmPassword').value
 
    if (user.trim() == "") {
        document.getElementById('checkUser').innerHTML = " Enter First name";
        return false;
    }


    if (name.trim() == "") {
        document.getElementById('checkName').innerHTML = " Enter First name";
        return false;
    }
    if (!isNaN(name)) {
        document.getElementById('checkName').innerHTML = " Only characters allowed";
        return false;
    }

    if (mobile.trim() == "") {
        document.getElementById('checkPhone').innerHTML = " Fill the mobile number";
        return false;
    }
    if (isNaN(mobile)) {
        document.getElementById('checkPhone').innerHTML = "  Only Digits allowed";
        return false;
    }
    if (mobile.length != 10) {
        document.getElementById('checkPhone').innerHTML = "  Mobile Number must be 10 digits only";
        return false;
    }


    if (emails.trim() == "") {
        document.getElementById('emailids').innerHTML = "  Fill the email id ";
        return false;
    }
    if (emails.indexOf('@') <= 0) {
        document.getElementById('emailids').innerHTML = " Invalid Email!";
        return false;
    }

    if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
        document.getElementById('emailids').innerHTML = " Invalid Email! ";
        return false;
    }

    if (pass.trim() == "") {
        document.getElementById('passw').innerHTML = " Fill the password field";
        return false;
    }
    if ((pass.length <= 7) || (pass.length > 25)) {
        document.getElementById('passw').innerHTML = " Password length must be between  7 and 25";
        return false;
    }

    if (cmpass.trim() == "") {
        document.getElementById('checkConfirm').innerHTML = " Fill the confirm password field";
        return false;
    }
    if (pass != cmpass) {
        document.getElementById('checkConfirm').innerHTML = "  Password does not match!!";
        return false;
    }



   

}e";
        return false;
    }


    if (name.trim() == "") {
        document.getElementById('checkName').innerHTML = " ** Please fill the full name";
        return false;
    }
    if (!isNaN(name)) {
        document.getElementById('checkName').innerHTML = " ** You must write only characters";
        return false;
    }

    if (mobile.trim() == "") {
        document.getElementById('checkPhone').innerHTML = " ** Please fill the mobile number";
        return false;
    }
    if (isNaN(mobile)) {
        document.getElementById('checkPhone').innerHTML = " ** user must write digits only not characters";
        return false;
    }
    if (mobile.length != 10) {
        document.getElementById('checkPhone').innerHTML = " ** Mobile Number must be 10 digits only";
        return false;
    }


    if (emails.trim() == "") {
        document.getElementById('emailids').innerHTML = " ** Please fill the email id field";
        return false;
    }
    if (emails.indexOf('@') <= 0) {
        document.getElementById('emailids').innerHTML = " ** @ Invalid Position";
        return false;
    }

    if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
        document.getElementById('emailids').innerHTML = " ** . Invalid Position";
        return false;
    }

    if (pass.trim() == "") {
        document.getElementById('passw').innerHTML = " ** Please fill the password field";
        return false;
    }
    if ((pass.length <= 7) || (pass.length > 25)) {
        document.getElementById('passw').innerHTML = " ** Passwords length must be between  5 and 20";
        return false;
    }

    if (cmpass.trim() == "") {
        document.getElementById('checkConfirm').innerHTML = " ** Please fill the confirm password field";
        return false;
    }
    if (pass != cmpass) {
        document.getElementById('checkConfirm').innerHTML = " ** Password does not match the confirm password";
        return false;
    }



   

}