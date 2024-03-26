var nameerror = document.getElementById("name-error");
var emailerror = document.getElementById("email-error");
var phoneerror = document.getElementById("phone-error");
var msgerror = document.getElementById("msg-error");
var smterror = document.getElementById("smt-error");

function validateName() {
  var name = document.getElementById("userName").value.trim();
  if (name.length == 0) {
    nameerror.innerHTML = "Name is required";
    nameerror.className = "e";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameerror.innerHTML = "Write Full Name";
    nameerror.className = "e";
    return false;
  }

  nameerror.innerHTML = `<i class="fa-solid  fa-circle-check"></i>`;
  return true;
}

function validatePhone() {
  var Phone = document.getElementById("userPhone").value.trim();

  if (Phone.length == 0) {
    phoneerror.innerHTML = "Number is requred";
    phoneerror.className = "e";
    return false;
  }
  if (Phone.length !== 10) {
    phoneerror.innerHTML = "Phone number should be 10 digits";
    phoneerror.className = "e";
    return false;
  }

  if (!Phone.match(/^[0-9]{10}$/)) {
    phoneerror.innerHTML = "only digits please";
    phoneerror.className = "e";
    return false;
  }
  phoneerror.innerHTML = `<i class="fa-solid  fa-circle-check"></i>`;

  return true;
}

function validateEmail() {
  var email = document.getElementById("userEmail").value.trim();
  // console.log(email);
  if (email === "" || !isValidEmail(email)) {
    emailerror.innerHTML = "Email is required and must be valid";
    emailerror.className = "e";
    return false;
  }
  emailerror.innerHTML = `<i class="fa-solid  fa-circle-check"></i>`;
  return true;
}

function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function validateMsg() {
  var msg = document.getElementById("userMsg").value.trim();
  var required = 30;
  var left = required - msg.length;
  if (left > 0) {
    msgerror.innerHTML = left + "more characters  required";
    msgerror.className = "e";
    return false;
  }
  msgerror.innerHTML = `<i class="fa-solid  fa-circle-check"></i>`;
  return true;
}

function validateForm(e) {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMsg()
  ) {
    var smterror = document.getElementById("smt-error");
    smterror.style.display = "block";
    smterror.innerText = "Please fixed error";
    setTimeout(function () {
      smterror.style.display = "none";
    }, 3000);
    smterror.className = "e";
    return false;
  }
}
