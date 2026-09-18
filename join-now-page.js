
function valid() {
  const form = document.forms.form1;
  const name = form.elements.Name.value.trim();
  const email = form.elements.Emailid.value.trim();
  const contact = form.elements.contactmobi.value.trim();
  const password = form.elements.psw.value;
  const confirmPassword = form.elements.cfpsw.value;
  const zipCode = form.elements.zipy.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;

  if (!name) {
    alert("Name can't be blank");
    return false;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }
  if (!phonePattern.test(contact)) {
    alert("Please enter a valid 10-digit mobile number");
    return false;
  }
  if (confirmPassword !== password) {
    alert("Confirm password does not match");
    return false;
  }
  if (zipCode.length < 5) {
    alert("Please enter a valid ZIP code");
    return false;
  }
  return true;
}
    
   /* var regEmail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  

    var regPhone=/^\d{10}$/;                       
   
    var regName = /^[A-Za-z]+$/;  
                var name=document.forms["form1"]["Name"].value;
            
                var  Email=document.forms["form1"]["Emailid"];
                var Contact=document.forms["form1"]["contactmobi"].value
                var password =document.forms["form1"]["psw"].value;
                var cnf_password=document.forms["form1"]["cfpsw"].value;
var zipy=document.forms["form1"]["zipy"].value
                if(name==''){
                    alert("Please enter name")
                }
                else if(!regName==name){
                    alert("Enter username properly")
                }
                if(Email.value==''){
                    alert("Please enter email address")
                }
                if(Email.value.indexOf("@",0)<0 || Email.value.indexOf(".",0)<0){
                alert("Please enter valid email address")}
                else if(!regEmail.test(Email)){
                    alert("Invalid email format please enter valid email id.")
                }

                if(password=='' || password.length<6){
                    alert("Password should be atleast 6 character long")
                }
                if(!password==cnf_password){
                    alert("Passwords not matching")
                }
                if(Contact=="" || !regPhone.test(Contact)){
                    window.alert("Please enter valid mobile number")
                
                }
                if(zipy==''){
                    alert("Enter zip code")}
else if(!zipy==6){
    alert("Enter valid zip code")
}     */           

                
                
    
    //alert msg
   /* var input=document.getElementById("invalidCheck3");
    input.addEventListener("keypress",function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            document.getElementById("datasend").click()
        }
        var x= document
    })*/
   

