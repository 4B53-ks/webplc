document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const messageDiv = document.getElementById('form-message');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      messageDiv.textContent = 'Thank you for contacting us! We will get back to you soon.';
      form.reset();
    });
  }
}); 