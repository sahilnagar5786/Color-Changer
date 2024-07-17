const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button) {
  button.addEventListener('click', function (changecolor) {
    if (changecolor.target.id == 'grey') {
      body.style.backgroundColor = changecolor.target.id
    }
    if (changecolor.target.id == 'white') {
      body.style.backgroundColor = changecolor.target.id
    }
    if (changecolor.target.id == 'blue') {
      body.style.backgroundColor = changecolor.target.id
    }
    if (changecolor.target.id == 'yellow') {
      body.style.backgroundColor = changecolor.target.id
    }
    if (changecolor.target.id == 'purple') {
      body.style.backgroundColor = changecolor.target.id
    }
  })
})