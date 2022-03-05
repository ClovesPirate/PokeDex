const form = document.querySelector("#contact-form");
const yourName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const messageContainer = document.querySelector(".message-container")

const nameError = document.querySelector("#name-error");
const subjectError = document.querySelector("#subject-error");
const emailError = document.querySelector("#email-error");
const addressError = document.querySelector("#address-error");


function validateForm(event) { // form validation
  event.preventDefault();

  messageContainer.innerHTML = "Please fill out the form";

  if (checkLength(yourName.value, 0)) { //change the value of second argument to adjust input requirement.
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, 9)) { //change the value of second argument to adjust input requirement.
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(address.value, 24)) { //change the value of second argument to adjust input requirement.
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  passValidation();
  
}

form.addEventListener("submit", validateForm);


function checkLength(value, len) { // checking length of value passed in.
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
};

function validateEmail(email) { // validate email
  const regEx= /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
};

function passValidation() { //function for successful submission of form.
  if (checkLength(yourName.value, 0) && checkLength (subject.value, 9) && checkLength(address.value, 24) && validateEmail(email.value)) {
    messageContainer.innerHTML = `<div class="success">Your submission was successful!</div>`;
    form.reset();
  }
};