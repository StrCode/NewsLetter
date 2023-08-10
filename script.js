"use strict";

const emailEl = document.querySelector("#email");
const buttonEl = document.querySelector(".form-button");
const successButtonEl = document.querySelector(".success-button");
const sucessMsgEl = document.querySelector(".message");
const successContainer = document.querySelector(".success-container");
const newsletterContainer = document.querySelector(".newsletter-container");
const emailErrorEl = document.querySelector(".email-error");
const userEmail = document.querySelector(".user-email");
const form = document.querySelector("form");

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

emailErrorEl.style.display = "none";

buttonEl.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(emailEl.value);
    if (emailEl.value === "" || !emailEl.value || !validateInput(emailEl)) {
        emailEl.classList.add("placeHolderTextError", "error-message");
        emailErrorEl.style.display = "block";
        return;
    }
    newsletterContainer.style.display = "none";
    successContainer.style.display = "flex";
    userEmail.textContent = emailEl.value.toLowerCase();
    form.reset();
});

successButtonEl.addEventListener("click", function (e) {
    e.preventDefault();
    // emailEl.classList.add("placeHolderTextError", "error-message");
    newsletterContainer.style.display = "flex";
    successContainer.style.display = "none";
});

emailEl.addEventListener("focus", function (e) {
    emailEl.classList.remove("error-message", "placeHolderTextError");
    emailEl.classList.add("placeHolderText");
    emailErrorEl.style.display = "none";
});

function validateInput(inputValue) {
    var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (inputValue.value.match(validRegex)) return true;

    return false;
}
