function showLoading() {
  var loadingContainer = document.getElementById('Loading')
  loadingContainer.style.display = 'flex'
  setTimeout(function () {
    loadingContainer.style.display = 'none'
  }, 2000)
}

document.addEventListener('DOMContentLoaded', function () {
  var menuItemsNav = document.querySelectorAll('#transfer_page')

  menuItemsNav.forEach(function (menuItem) {
    menuItem.addEventListener('click', function (event) {
      event.preventDefault()

      showLoading()

      var targetPage = this.getAttribute('href')

      setTimeout(function () {
        window.location.href = targetPage
      }, 2000)
    })
  })
})
