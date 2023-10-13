const loginform=document.querySelector(".login-page").querySelector(".form").querySelector(".login-form")
const  username=loginform.querySelector(".username")
const  passsword=loginform.querySelector(".password")

loginform.addEventListener("submit",(e)=>{
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");
  
  // Password conditions: At least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character
  var passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
  
  if (password.match(passwordPattern)) {
    // Redirect to another page (replace 'target-page.html' with your desired page)
    window.location.href = "Coding_tutorials.html";
  } else {
    errorMessage.textContent = "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.";
    
  }
  
  e.preventDefault()
})