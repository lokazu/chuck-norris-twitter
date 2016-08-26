$(document).ready(function () {
  getRandomJoke()
})

function getRandomJoke() {
  $.ajax({
    url: 'http://api.icndb.com/jokes/random/'
  })
  .done(function (data) {
    $('#joke').text(data.value.joke)
  })
}
