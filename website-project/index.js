function onSubmit(){
    //todo: capture emailId
    var email=document.getElementById("emailId").value;
    document.getElementById("emailId").setAttribute("disabled","true");
    alert(email);

}