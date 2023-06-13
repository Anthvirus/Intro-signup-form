const errorIcon1 = document.getElementById("errorIconFName");
const errorIcon2 = document.getElementById("errorIconLName");
const errorIcon3 = document.getElementById("errorIconEMail");
const errorIcon4 = document.getElementById("errorIconPWord");
const errorFName = document.getElementById("errorFName");
const errorLName = document.getElementById("errorLName");
const errorPWord = document.getElementById("errorPWord");
const errorEmail = document.getElementById("errorEMail");
const fName = document.getElementById("firstName");
const lName = document.getElementById("lastName");
const email = document.getElementById("eMail");
const passWord = document.getElementById("passWord");
const submit = document.getElementById("btn");
submit.addEventListener("click", () => {
  validateFName();
  validateLName();
  validatePassword();
  validateMail();
});
function validateFName() {
  if (fName.value == "") {
    fName.style.border = "1px solid hsl(0, 100%, 74%)";
    errorFName.style.display = "block";
    errorIcon1.style.display = "block";
  } else {
    fName.style.border = "1px solid hsl(249, 10%, 26%)";
    errorFName.style.display = "none";
    errorIcon1.style.display = "none";
  }
}
function validateLName() {
  if (lName.value == "") {
    lName.style.border = "1px solid hsl(0, 100%, 74%)";
    errorIcon2.style.display = "block";
    errorLName.style.display = "block";
  } else {
    lName.style.border = "1px solid hsl(249, 10%, 26%)";
    errorLName.style.display = "none";
    errorIcon2.style.display = "none";
  }
}
function validatePassword() {
  if (passWord.value == "") {
    passWord.style.border = "1px solid hsl(0, 100%, 74%)";
    errorIcon4.style.display = "block";
    errorPWord.style.display = "block";
  } else {
    passWord.style.border = "1px solid hsl(249, 10%, 26%)";
    errorPWord.style.display = "none";
    errorIcon4.style.display = "none";
  }
}
function validateMail() {
  var mail = document.getElementById("eMail").value;

  var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)([.])([a-z]+)(.[a-z]+)?$/;

  if(regx.test(mail)){
    email.style.border = "1px solid hsl(249, 10%, 26%)";
    errorEmail.style.display = "none"
    errorIcon3.style.display = "none";
  }else{
    email.style.border = "1px solid hsl(0, 100%, 74%)";
    errorIcon3.style.display = "block";
    errorEmail.style.display = "block";
  }
}
