let usernameError=document.getElementById("username-error")
      let passwordError=document.getElementById("password-error")
      
      let err=document.getElementById("error")
      
      let correctUsername=(val)=>{
      let store=localStorage.getItem("username")
      if(val!=store){
        usernameError.style.display="contents";
        usernameError.style.color="red";
        usernameError.innerText="UserName Doesn't Exist."
        return false;
      }
      usernameError.innerText="Success";
      usernameError.style.color="green";
      return true;
    }


    
    let correctPassword=(passwordval)=>{
      let getPassword=localStorage.getItem("password")
        if(getPassword!=passwordval){
          passwordError.innerText="Please Check Your Password."
          passwordError.style.display="contents";
          passwordError.style.color="red";
          err.style.display="none";
          return false;
        }
        else{
          passwordError.innerText="Success"
          passwordError.style.color="green"
          err.innerText="Success"
          err.style.color="green"
          return true;
      }
    }
    
    let login=document.getElementById('login').addEventListener('click', (e)=>{
      if(e.target.tagName=="BUTTON"){
        let selectUsername=document.getElementById("user-name")
        let selectPassword=document.getElementById("password")

        let checkUser=correctUsername(selectUsername.value)
        if(checkUser==false){
          return;
        }
        let checkPass=correctPassword(selectPassword.value)

        if(checkUser==true && checkPass==true){
            location.href="../Home/index.html";
        }
      }
    })
