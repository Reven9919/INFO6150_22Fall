'use strict';
(function () {
  const formEl = document.querySelector('.forms');
  const nameEl = document.querySelector('#name');
  const emailEl = document.querySelector('#email');
  const confirmEmailEl = document.querySelector('#confirmemail');
  const emailInvalidEl = document.querySelector('#emailerror');
  const confirmEmailInvalidEl = document.querySelector('#confirmdemail-error');

  formEl.addEventListener('submit', (event) => {
    let isInvalid = false;
    console.log("sbdi")
    formEl.classList.remove('invalid-name');
    emailInvalidEl.innerText = '';
    confirmEmailInvalidEl.innerText = '';

    if (!nameEl.value) {
        emailInvalidEl.innerText = 'Name is required';
        isInvalid = true;
      }

    if (!emailEl.value) {
      emailInvalidEl.innerText = 'Email is required';
      isInvalid = true;
    }

    if (confirmEmailEl.value || confirmEmailEl.value !== emailEl.value) {
      confirmEmailInvalidEl.innerText = 'Confirm Email must match the Email';
      isInvalid = true;
    }

    if (isInvalid) {
      event.preventDefault();
    }
  });
})();
