function formValidation()
{
var utit = document.Contactme.title;

var uname = document.Contactme.fullname;

var uemail = document.registration.email;

var umessage=document.registration.desc;
 if(title_validation(utit,2,8))
{

if(allLetter(uname))
{



if(ValidateEmail(uemail))
{
    

}
} 
}
 





return false;
}

function title_validation(utit,mx,my)
{
var uid_len = utit.value.length;
if (utit_len == 0 || utit_len >= my || utit_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
utit.focus();
return false;
}
return true;
}
function allLetter(uname)
{
var uname_len = uname.value.length;
if (uname_len == 0 || uname_len < 4 )
{
alert("Name should not be empty and should be at least four characters");
uname.focus();
return false;
}
return true;
}


function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}