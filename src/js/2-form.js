let formData = { email: "", message: "" };

document.querySelector('.feedback-form').addEventListener('input', function(e) {
  if (e.target.type === 'email') {
    formData.email = e.target.value;
  } else if (e.target.tagName === 'TEXTAREA') {
    formData.message = e.target.value;
  }
  
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

window.addEventListener('DOMContentLoaded', function() {
  const formDataFromLocalStorage = localStorage.getItem('feedback-form-state');

  if (formDataFromLocalStorage) {
    formData = JSON.parse(formDataFromLocalStorage);
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
});

document.querySelector('.feedback-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
  }
});