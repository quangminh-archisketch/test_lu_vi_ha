function submitForm() {
  var form = document.getElementById('form-contact')
  var elements = form.elements

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].type !== 'submit' && elements[i].value.trim() === '') {
      elements[i].classList.add('error')
      elements[i].style.borderColor = '#ef6b51'

      var errorElement = document.getElementById(elements[i].id + 'Error')
      if (errorElement) {
        errorElement.innerText = 'Please complete this required field.'
      }
    } else {
      elements[i].classList.remove('error')
      elements[i].style.borderColor = ''

      var errorElement = document.getElementById(elements[i].id + 'Error')
      window.location.href = '/'

      if (errorElement) {
        errorElement.innerText = ''

        if (elements[i].type === 'email' && !isValidEmail(elements[i].value)) {
          elements[i].classList.add('error')
          errorElement.innerText = 'Email must be formatted correctly.'
          elements[i].style.borderColor = '#ef6b51'
        }

        if (elements[i].type === 'tel' && !isValidPhone(elements[i].value)) {
          elements[i].classList.add('error')
          errorElement.innerText = 'Invalid phone number'
          elements[i].style.borderColor = '#ef6b51'
        }
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var inputElements = document.querySelectorAll('#firstName, #yourMail, #phoneNo, #company, #message')

  inputElements.forEach(function (input) {
    input.addEventListener('input', function () {
      handleInputChange(this)
    })
  })
})

function handleInputChange(input) {
  var errorMessageId = input.id + 'Error'
  var errorMessage = document.getElementById(errorMessageId)

  if (input.value.trim() === '') {
    input.classList.add('error')
    errorMessage.innerText = 'Please complete this required field.'
    input.style.borderColor = 'red'
  } else {
    input.classList.remove('error')
    errorMessage.innerText = ''
    input.style.borderColor = 'inherit'
    if (input.type === 'email' && !isValidEmail(input.value)) {
      input.classList.add('error')
      errorMessage.innerText = 'Email must be formatted correctly.'
      input.style.borderColor = 'red'
    }
    if (input.type === 'tel' && !isValidPhone(input.value)) {
      input.classList.add('error')
      errorMessage.innerText = 'Invalid phone number'
      input.style.borderColor = 'red'
    }
  }
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function isValidPhone(phone) {
  var phoneRegex = /^[0-9]+$/
  return phoneRegex.test(phone)
}
