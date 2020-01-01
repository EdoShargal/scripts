const RANDOM_QOUTE_API_URL = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
const qouteDisplay = document.getElementById("quoteDisplay")
const qouteInput = document.getElementById("quoteInput")

// Adding the event listener to the textarea element on input 
document.addEventListener("input", function(){
  console.log(qouteInput.value)
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
  console.log(qoute)
  qoute.split("").forEach(char => {
    // qouteDisplay.innerText = ""
    let charSpan = document.createElement("span")
    charSpan.innerText = char
    qouteDisplay.appendChild(charSpan)
  })
}



getNextQoute()



