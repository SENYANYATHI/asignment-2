const form = document.querySelector('container form')
const email = document.querySelector('container form input[type=email]')

form.addEventListener('submit' ,(e) =>{
    e.preventDefault();
    let emailvalue = email.value;
   
    if(validateEmail(emailvalue )){
    form.classList.remove('error');
     } else{
         form.classList.add('error');
         document.body.innerHTML='<div style="display:flex;align-items:center;justify-content:clearIntervl;"><h1>Thank you!</h1></div>'
    }
});
function validateEmail(email){
var mailformart = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
if (email.value(mailformart))
{
    alert("valid email!");
    document.forms.item;
    return true;
}
}
