let clicker = document.querySelector('#clicker')
let popup = document.querySelector('#container5')
let exit = document.querySelector('#close')
popup.style.display = "none"

let inputbox1 = document.querySelector('#box1')
let inputbox2 = document.querySelector('#box2')
let inputbox3 = document.querySelector('#box3')
let inputbox4 = document.querySelector('#box4')
let inputbox5 = document.querySelector('#box5')
let inputbox6 = document.querySelector('#box6')
let submit = document.querySelector('#subbox');
let textbox = document.querySelector('#textbox');
let change = document.querySelector('#change')
let answer = "no mans land"
let count = 0
const jsConfetti = new JSConfetti()

submit.onclick = function(){
 if(textbox.value == answer){
  correct()
 }
 else {
  count = count + 1
 }
 ////////////////////////////////////////////////////////////////
function correct(){
 change.textContent = "Congrats, You've Guessed Correct!"
 textbox.disabled = true
 submit.disabled = true
 change.style.color = "greenyellow"
 jsConfetti.addConfetti({
  emojiSize: 100,
  confettiNumber: 1500,
  confettiRadius: 8,
 });
}
function wrong(){
 change.textContent = "You Lost, Answer: No Mans Land"
 change.style.color = "red"
 textbox.disabled = true
 submit.disabled = true
}
////////////////////////////////////////////////////////////////

if (count == 1){
inputbox1.textContent = textbox.value
}
if (count == 2){
 inputbox2.textContent = textbox.value
}
if (count == 3){
 inputbox3.textContent = textbox.value
  window.alert('')
}
if (count == 4){
 inputbox4.textContent = textbox.value
  window.alert('')
}
if (count == 5){
 inputbox5.textContent = textbox.value
  window.alert('')
}
if (count == 6){
 inputbox6.textContent = textbox.value
 
 wrong()
}
textbox.value = ""
}



exit.onclick = function (){
 popup.style.display = "none"
}

clicker.onclick = function (){
 popup.style.display = "flex"
}


