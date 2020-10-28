function validation(){
        var company= document.getElementById("name").value;
        var subject= document.getElementById("subject").value;
        var phone= document.getElementById("phone").value;
        var email= document.getElementById("email").value;
        var message= document.getElementById("message").value;
        var error_message= document.getElementById("error_message");
        var text;
        error_message.style.padding= "10px";

        if(company.length <5){
          text= "enter valid name";
          error_message.innerHTML = text;
          return false;
        }

        if(subject.length <5){
          text= "enter subject";
          error_message.innerHTML= text;
          return false;
        }

        if(isNaN(phone) || phone.length !=10){
          text= "enter valid phone number";
          error_message.innerHTML=text;
          return false;
        }

        if(email.indexOf("@") == -1 || email.length <6){
          text= "enter valid email address";
          error_message.innerHTML=text;
          return false;
        }

                if(message.length <1){
                  text= "please enter a message.";
                  error_message.innerHTML= text;
                  return false;
                }

        alert("Form Submitted Successfully")
        return true;
}
