const RANDOM_QOUTE_API_URL = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
const qouteDisplay = document.getElementById("quoteDisplay")
const qouteInput = document.getElementById("quoteInput")

// Adding the event listener to the textarea element on input 
qouteInput.addEventListener('input', () => {
  const arrayQuote = qouteDisplay.querySelectorAll('span')
  const arrayValue = qouteInput.value.split('')

  let correct = true
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index]
    if (character == null) {
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      correct = false
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
    } else {
      characterSpan.classList.remove('correct')
      characterSpan.classList.add('incorrect')
      correct = false
    }
  })

  if (correct) renderNewQuote()
})

//Getting qoute from api
async function getRandomQoute(){
  const res = await fetch(RANDOM_QOUTE_API_URL)
  const data = await res.json()
  return data.message
}

//Update new to qoute to DOM
async function getNextQoute(){
  const qoute = await getRandomQoute()
  //console.log(qoute)
  qoute.split("").forEach(char => {
    // qouteDisplay.innerText = ""
    let charSpan = document.createElement("span")
    charSpan.innerText = char
    qouteDisplay.appendChild(charSpan)
  })
}

let startTime
function startTimer() {
  timerElement.innerText = 0
  startTime = new Date()
  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 1000)
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000)
}



getNextQoute()


//import { Observable } from 'rxjs';
const Rx = require('rx')

// listen for data from the observables
var resize = Rx.Observable.create((o) => {

  // listen for window resize and pass height and width
  window.addEventListener("resize", () => {
    var height = window.innerHeight;
    var width = window.innerWidth;
    o.next({height, width});
  });
});