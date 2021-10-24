"use strict";
/* Add your JavaScript to this file */
window.onload =function(){
    var submit = document.getElementsByClassName("btn");
    var form = document.getElementById("email");
    var msg = document.getElementsByClassName("message")
    
    submit[1].addEventListener('click', function(event){
        event.preventDefault();

        if (form.value != '' && form.value.includes("@")){
            msg[0].innerHTML = "Thank you!  Your email address " + form.value + " has been added"
        }
        else{
            msg[0].innerHTML = "Please enter a valid email address"
        }
    })
    
}