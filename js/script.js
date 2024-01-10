const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})


function validateLoginForm() {
    var name = document.getElementById("logName").value;
    var password = document.getElementById("logPassword").value;
  
    if (name == "" || password == "") {
      document.getElementById("errorMsg").innerHTML =
        "Please fill the required fields";
      return false;
    } else if (password.length < 8) {
      document.getElementById("errorMsg").innerHTML =
        "Your password must include atleast 8 characters";
      return false;
    } else {
      alert("Successfully logged in");
      return true;
    }
  }
  function validateSignupForm() {
    var mail = document.getElementById("signEmail").value;
    // var name = document.getElementById("signName").value;
    var password = document.getElementById("signPassword").value;
  
    if (mail == "" || password == "") {
      document.getElementById("errorMsg").innerHTML =
        "Please fill the required fields";
      return false;
    } else if (password.length < 8) {
      document.getElementById("errorMsg").innerHTML =
        "Your password must include atleast 8 characters";
      return false;
    } else {
      alert("Successfully signed up");
      return true;
    }
  }