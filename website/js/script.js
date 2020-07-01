const selectSingle = document.querySelector('.select');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

const 
      link = document.querySelector(".contacts__button"),
      linkBottom = document.querySelector(".services-button"),
      success = document.querySelector(".success-popup"),
      popup = document.querySelector(".enroll_popup"),
      name = popup.querySelector("[name=name]"),
      phone = popup.querySelector("[name=phone]"),
      storage = localStorage.getItem("name");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("enroll_popup__show");
  if (storage) {
    name.value = storage;
    phone.focus();
  } else {
    name.focus();
  }
});

linkBottom.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("enroll_popup__show");
  if (storage) {
    name.value = storage;
    phone.focus();
  } else {
    name.focus();
  }
});

let close = document.querySelector(".close-enroll-popup");
let closeSuccess = document.querySelector(".close-success-popup");

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("enroll_popup__show");
})
closeSuccess.addEventListener("click", function(event) {
  event.preventDefault();
  success.classList.remove("success-popup__show");
})

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("enroll_popup__show")) {
      popup.classList.remove("enroll_popup__show");
    } else if (success.classList.contains("success-popup__show")) {
      success.classList.remove("success-popup__show")
    }
  }
})

let formButton = popup.querySelector(".form__button");

formButton.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("enroll_popup__show");
  success.classlist.add("success-popup__show");
})