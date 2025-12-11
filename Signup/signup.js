  
      let error=document.getElementById("error")
      let storeValues=[];

      const checkCorrectName=(e)=>{
        return /^[a-zA-Z]{2,30}( [A-Za-z]{2,30})+$/.test(e);
      }
      
      let checkCorrectUsername=u=>{
        return /^[a-z][a-z0-9]{3,19}$/.test(u);
      }


      let checkCorrectEmail=e=>{
        return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e);
      }

      let checkCorrectPassword=p=>{
        // return /[A-Z]{1,}[a-z]{1,}[0-9]{1,}{8,}/.test(p)
        return /(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}/.test(p)
      }

      let showError=(s)=>{
        if(s=="Confirm"){
            error.innerText="Please enter the Correct Confirm Password."
        }
       else if(s=="Password"){
          console.log("if condition enter of the show error.");
          error.innerText="Please Enter the Correct Password with following Condition: (1 UpperCase/LowerCase/Numbers, 8 Min Chars.)"
        }
        else{
          error.innerText=`${s} doesn't match please try again`;
          console.log("Else condition enter of the show error.");
        }
        error.style.color="red"
      }


      let passWordConfirmationCheck=(password, confirmPassword)=>{
        if(password!=confirmPassword){
          error.style.innerText="Please Confirm Correct Password"
          error.style.color="red";
          return false;
        }
        error.style.innerText="Success";
        error.style.color="green"
        return true;
      }
      


      const doAllOperationIfSuccess=(name, username, email, password, confirmpassword)=>{
        console.log("Successfully we've done all operation.");
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        location.href="../Home/index.html";
      }
      


      let button=document.querySelector("button").addEventListener("click", (e)=>{
        e.preventDefault()
        let name=document.getElementById("fname").value
        let username=document.getElementById('username').value
        let email=document.getElementById('email').value
        let password=document.getElementById('password').value
        let confirmPassword=document.getElementById("confirm-password").value
        
        let storeName=checkCorrectName(name)
        let checkUser=checkCorrectUsername(username)
        let checkEmail=checkCorrectEmail(email)
        let checkPassword=checkCorrectPassword(password)
        let checkConPass=checkCorrectPassword(confirmPassword)

        if(storeName==false) return showError("Name");
        if(checkUser==false) return showError("Username");
        if(checkEmail==false) return showError("Email");
        if(checkPassword==false) return showError("Password");
       if(passWordConfirmationCheck(password, confirmPassword)==false) return showError("Confirm");


        error.innerText="Success";
        error.style.color="green";

        
        if(storeName==true && checkUser==true && checkEmail==true && checkPassword==true && checkConPass==true && checkConPass==true){
          doAllOperationIfSuccess(name, username, email, password, confirmPassword)
        }
      })