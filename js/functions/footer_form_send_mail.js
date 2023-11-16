function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email)
}

function submitSendEmail() {
  var emailInput = document.getElementById('email')
  var emailValue = emailInput.value
  var errorMessage = document.getElementById('errorMessage')

  // Clear previous error message and reset border color
  errorMessage.textContent = ''
  emailInput.style.borderColor = ''

  // Simple email validation
  if (!emailValue) {
    errorMessage.textContent = 'Please complete this required field.'
    emailInput.style.borderColor = '#ef6b51'
    return
  }

  if (!validateEmail(emailValue)) {
    errorMessage.textContent = 'Email must be formatted correctly.'
    emailInput.style.borderColor = '#ef6b51'
    return
  }

  // Hide elements on successful submission
  emailInput.style.display = 'none'
  document.querySelector('.footer_button_input_sendMail').style.display = 'none'
  errorMessage.style.display = 'none'

  // Create and append success message
  var successMessage = document.createElement('div')
  successMessage.className = 'submitted-message hs-main-font-element'
  successMessage.textContent = 'Thanks for submitting the form.'

  var formTarget = document.getElementById('hs_form_target_footer_footer_subscribe_form')
  formTarget.appendChild(successMessage)
}

document.addEventListener('DOMContentLoaded', function () {
  function validateEmailOnChange(input) {
    var errorMessageId = 'errorMessage'
    var errorMessage = document.getElementById(errorMessageId)

    if (input.value.trim() === '') {
      input.classList.add('error')
      errorMessage.innerText = 'Please complete this required field.'
      input.style.borderColor = '#ef6b51'
    } else {
      if (input.type === 'email' && !validateEmail(input.value)) {
        input.classList.add('error')
        errorMessage.innerText = 'Email must be formatted correctly.'
        input.style.borderColor = '#ef6b51'
      } else {
        input.classList.remove('error')
        errorMessage.innerText = ''
        input.style.borderColor = 'inherit'
      }
    }
  }

  document.getElementById('email')?.addEventListener('input', function () {
    validateEmailOnChange(this)
  })
})
