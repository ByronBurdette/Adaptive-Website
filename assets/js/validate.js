

function validateEmail()
{
    var x = document.accountForm.email.value;
    
    // gigantic email validation regex taken directly from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return emailPattern.test(x);
}

function matchPassword()
{
    var x = document.accountForm.password.value;
    var y = document.accountForm.vPassword.value;
    
    return x == y;
}


function validatePassword()
{
    x = document.accountForm.password.value;
    
    return /((?=.*\d)|(?=.*\W+))(?=.*[A-Z])(?=.*[a-z]).*$/.test(x);
      
}


function validateCity()
{
    x = document.accountForm.city.value;
    
    return /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(x);
}




function validateFormCompletion()
{
    var fields = ["name", "email", "password", "vPassword", "city", "state", "gender", "signature"];
    var filled = true;
    
    for (var i = 0; i < fields.length; i++)
        if (!document.forms["accountForm"][fields[i]].value)
            filled = false;
        
    return filled;
}


function validateForm()
{
    var errorCode = 0;
    
    if (!validateEmail())
        errorCode = 1;
    if (!matchPassword())
        errorCode = 2;
    if (!validatePassword())
        errorCode = 3;
    if (!validateCity())
        errorCode = 4;
    if (!validateFormCompletion())
        errorCode = 5;
    
    switch (errorCode)
    {
        case 1:
            alert("Please enter a valid email address");
            return false;
        case 2:
            alert("Your passwords must match");
            return false;
        case 3:
            alert("Your password must contain uppercase letters, lowercase letters, special characters and numbers");
            return false;
        case 4:
            alert("City names can only contain letters");
            return false;
        case 5:
            alert("Please correctly fill in all required fields");
            return false;
        case 0:
            return true;
    }
}