document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('application-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const organizationInput = document.getElementById('organization');
    const planInputs = document.querySelectorAll('input[name="plan"]');
    const messageInput = document.getElementById('message');
    const confirmationCheckbox = document.getElementById('confirmation-checkbox');
    const submitButton = document.getElementById('submit-button');
  
    // Add event listeners to plan checkboxes
    for (const planInput of planInputs) {
      planInput.addEventListener('change', validateForm);
    }
  
    function validateForm() {
      let isValid = true;
  
      // Clear previous error messages
      clearErrorMessages();
  
      if (nameInput.value.length < 8) {
        displayErrorMessage(nameInput, 'name-error', 'Name must be at least 8 characters long.');
        isValid = false;
      }
  
      if (!emailRegex.test(emailInput.value)) {
        displayErrorMessage(emailInput, 'email-error', 'Invalid email address.');
        isValid = false;
      }
  
      if (!phoneRegex.test(phoneInput.value)) {
        displayErrorMessage(phoneInput, 'phone-error', 'Invalid phone number. Must be a 10-digit number.');
        isValid = false;
      }
  
      if (organizationInput.value.length < 8) {
        displayErrorMessage(organizationInput, 'organization-error', 'Organization must be at least 8 characters long.');
        isValid = false;
      }
  
      let isPlanSelected = false;
      for (const planInput of planInputs) {
        if (planInput.checked) {
          isPlanSelected = true;
          break;
        }
      }
      if (!isPlanSelected) {
        displayErrorMessage(planInputs[0], 'plan-error', 'Please select at least one plan.');
        isValid = false;
      }
  
      if (messageInput.value.length === 0) {
        displayErrorMessage(messageInput, 'message-error', 'Message cannot be empty.');
        isValid = false;
      }
  
      if (!confirmationCheckbox.checked) {
        displayErrorMessage(confirmationCheckbox, 'confirmation-error', 'Please agree to send an email with the form contents.');
        isValid = false;
      }
  
      submitButton.disabled = !isValid;
    }
  
    function clearErrorMessages() {
      const errorMessages = form.getElementsByClassName('error-message');
      for (const errorMessage of errorMessages) {
        errorMessage.textContent = '';
      }
    }
  
    function displayErrorMessage(inputElement, errorElementId, errorMessage) {
      const errorElement = document.getElementById(errorElementId);
      errorElement.textContent = errorMessage;
      inputElement.classList
      function displayErrorMessage(inputElement, errorElementId, errorMessage) {
        const errorElement = document.getElementById(errorElementId);
        errorElement.textContent = errorMessage;
        inputElement.classList.add('error');
    }

    function clearErrorMessages() {
        const errorMessages = form.getElementsByClassName('error-message');
        for (const errorMessage of errorMessages) {
            errorMessage.textContent = '';
        }
        const inputElements = form.getElementsByClassName('error');
        for (const inputElement of inputElements) {
            inputElement.classList.remove('error');
        }
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Additional validation or submission logic can be added here
    });

    // Initial form validation
    validateForm();
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('application-form');
    const planCheckboxes = form.querySelectorAll('input[name="plan"]');
    const submitButton = document.getElementById('submit-button');
  
    function validateForm() {
      let isPlanSelected = false;
      for (const checkbox of planCheckboxes) {
        if (checkbox.checked) {
          isPlanSelected = true;
          break;
        }
      }
  
      if (isPlanSelected) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    }
  
    function handleCheckboxChange() {
      validateForm();
    }
  
    // Add event listeners to checkboxes
    for (const checkbox of planCheckboxes) {
      checkbox.addEventListener('change', handleCheckboxChange);
    }
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!submitButton.disabled) {
        // Form submission logic can be added here
        console.log('Form submitted!');
      }
    });
  
    // Initial form validation
    validateForm();
  });
  