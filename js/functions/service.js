function submitForm() {
  var form = document.getElementById('form-service')
  var elements = form.elements

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].type !== 'submit' && elements[i].value.trim() === '') {
      elements[i].classList.add('error')
      document.getElementById(elements[i].id + 'Error').innerText = 'Please complete this required field.'
      elements[i].style.borderColor = '#ef6b51'
    } else {
      elements[i].classList.remove('error')
      document.getElementById(elements[i].id + 'Error').innerText = ''
      elements[i].style.borderColor = 'inherit'
      var errorElement = document.getElementById(elements[i].id + 'Error')
      window.location.href = '/home.html'

      if (errorElement) {
        if (elements[i].type === 'email' && !isValidEmail(elements[i].value)) {
          elements[i].classList.add('error')
          document.getElementById(elements[i].id + 'Error').innerText = 'Email must be formatted correctly.'
          elements[i].style.borderColor = '#ef6b51'
        }
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var inputElements = document.querySelectorAll('#yourMail, #firstName, #lastName, #message')

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
    input.style.borderColor = '#ef6b51'
  } else {
    input.classList.remove('error')
    errorMessage.innerText = ''
    input.style.borderColor = 'inherit'

    if (input.type === 'email' && !isValidEmail(input.value)) {
      input.classList.add('error')
      errorMessage.innerText = 'Email must be formatted correctly.'
      input.style.borderColor = '#ef6b51'
    }
  }
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
