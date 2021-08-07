const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    validate();
})

// //More Email Validation---
let isEmail=(emailVal)=>{
    let atSymbol=emailVal.indexOf("@");
    if(atSymbol<1)
    return false;
    let dot =emailVal.lastIndexOf(".");
    if(dot<=atSymbol+2)
    return false;
    if(dot===emailVal.length-1)return false;
    return true;
}


const validate=()=>{
const usernameVal=username.value.trim();
const emailVal=email.value.trim();
const phoneVal=phone.value.trim();
const passwordVal=password.value.trim();
const cpasswordVal=cpassword.value.trim();

//Validating user name
if(usernameVal===""){
    setErrormsg(username,'Username cannot be blank');
}
else if(usernameVal.length<=2){
    setErrormsg(username,'User minimum three Character');  
} 
else
{
    setSuccessmsg(username);

}

//Validating Email
if(emailVal===""){
    setErrormsg(email,'Email cannot be blank');
}
else if(!isEmail(emailVal)){
    setErrormsg(email,"Not a valid Email");
}
else
{
    setSuccessmsg(email);

}

//Validating Mobile Number

if(phoneVal===""){
    setErrormsg(phone,'Mobile Number cannot be blank');
}
else if(phoneVal.length!=10){
    setErrormsg(phone, 'Mobile no must be 10 digit');
}
else
{
    setSuccessmsg(phone)
}

//Validating Password

if(passwordVal===""){
    setErrormsg(password,'Password cannot be blank');
}
else if(passwordVal.length<=5){
    setErrormsg(password, 'Password must be 6 digit');
}
else
{
    setSuccessmsg(password);
}

//Validating confirm Password

if(cpasswordVal===""){
    setErrormsg(cpassword,'Password cannot be blank');
}
else if(passwordVal!=cpasswordVal){
    setErrormsg(cpassword, 'Password are not Matching');
}
else
{
    setSuccessmsg(cpassword);
}

}
function setErrormsg(input, errormsg){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    formControl.className='form-control error';
    small.innerText=errormsg;
}
function setSuccessmsg(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';

}