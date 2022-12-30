'use strict';
(function () {
  const formEl = document.querySelector('.forms');
  const emailEl = document.querySelector('#email');
  const confirmEmailEl = document.querySelector('#confirmemail');
  const emailInvalidEl = document.querySelector('#emailerror');
  const confirmEmailInvalidEl = document.querySelector('#confirmdemail-error');
  const modalEl = document.querySelector('.modal');
  const openEl = document.querySelectorAll('.open');
  const closeEl = document.querySelector('.close');

  openEl.forEach(btn => {
    btn.addEventListener('click', () => {
        modalEl.showModal();
    })
  })
//   openEl.forEach('click', () =>{
//     modalEl.showModal();
//   });
  closeEl.addEventListener('click', () =>{
    modalEl.closest();
  })

  formEl.addEventListener('submit', (event) => {
    let isInvalid = false;
    console.log("sbdi")
    formEl.classList.remove('invalid-name');
    emailInvalidEl.innerText = '';
    confirmEmailInvalidEl.innerText = '';

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