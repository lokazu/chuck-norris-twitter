$(document).ready(function () {
  getRandomJoke()
  $('#get-new-joke-btn').on('click', function (e) {
    e.preventDefault()
    getRandomJoke()
  })

  $('#tweet-joke-btn').on('click', function (e) {
    e.preventDefault()
    tweetJoke()
  })
})

function getRandomJoke() {
  $.ajax({
    url: 'http://api.icndb.com/jokes/random/'
  })
  .done(function (data) {
    $('#joke').text(data.value.joke)
  })
}

function tweetJoke() {
  $.ajax({
    url: '/tweets',
    method: 'POST',
    data: {
      joke: $('#joke').text()
    }
  })
  .done(function (data) {
    getRandomJoke()
  })
}
