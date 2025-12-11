   let userid=document.getElementById('userid');
    let usernameDiv=document.getElementById("username")
    let passWordDiv=document.getElementById("password")
    let userError=document.getElementById("usererror");
    userid.addEventListener('click', (e)=>{
      let usernameInput=document.getElementById("uservalue").value;
      let getLocalStorageValue=localStorage.getItem("username");
      if(usernameInput!=getLocalStorageValue){
        userError.style.display="contents";
        return;
      }
      usernameDiv.style.display="none"
      passWordDiv.style.display="contents";
      console.log("username is correct.");
    })

    
    const regexCheck=(v)=>{
      return /(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}/.test(v)
    }
    
    let passButton=document.getElementById("passid")
  passButton.addEventListener("click", (e)=>{
    console.log("password is clickedk");

    let passInput=document.getElementById("passvalue").value;
    let passerror=document.getElementById("passerror")
    if(regexCheck(passInput)==false){
      passerror.innerText="Please Enter in Correct Password Format.";
      passerror.style.display="contents";
      return; 
    }
    localStorage.setItem("password", passInput);
    console.log("Done.");
    passerror.style.display="none"

    let selectDis=document.getElementById("success")
    selectDis.innerText="success"
    selectDis.style.display="contents"
    location.href="../Login/index.html"
  })