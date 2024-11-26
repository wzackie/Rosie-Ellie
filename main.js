let form = document.getElementById('form');
let email = document.getElementById('email');
let firstName = document.getElementById('firstName');
let lastname = document.getElementById('lastname');
let textarea = document.getElementById('textarea');
let firstNameError = document.getElementById('firstNameError');
let lastNameError = document.getElementById('lastNameError');
let inputerror = document.getElementById('inputerror');
let emailerror = document.getElementById('emailerror');

form.addEventListener('submit',function(event){

     let hasError = false ;

     firstNameError.innerHTML  = "";
     inputerror.innerHTML  = "";
     lastNameError.innerHTML  = "";
     emailerror.innerHTML  = "";

     if (firstName.value.trim() === ""){
         hasError = true ;
         firstNameError.innerHTML  = "please enter the name";
     }

     if (lastname.value.trim() === ""){
         hasError = true ;
         lastNameError.innerHTML  = "please enter the last name";
     }

     if (email.value.trim() === ""){
         hasError = true ;
         emailerror.innerHTML  = "please enter the email";
     }
     else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
         hasError = true ;
         inputerror.innerHTML = "Please enter a valid email.";
     }

     if (textarea.value.trim() === ""){
         hasError = true ;
         inputerror.innerHTML = "please enter the textarea";
     }

     if (hasError) {
         event.preventDefault();
    }

}
)

