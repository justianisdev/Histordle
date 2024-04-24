let bone = document.getElementById("b1")  
let btwo = document.getElementById("b2")  
let bthree = document.getElementById("b3")
let bfour = document.getElementById("b4")
let bfive = document.getElementById("b5")
let bsix = document.getElementById("b6")
let answertype = document.getElementById('textbox')
let count = 0
let answer = 1919
let threshold = 200
//

let clicker = document.querySelector('#clicker')
let popup = document.querySelector('#container5')
let exit = document.querySelector('#close')
popup.style.display = "none"
//
document.getElementById("submit").onclick = function(){
if (answertype.value < 200){
  window.alert('Too Small')
 return;
}

if (answertype.value > 2024){
 window.alert('Too Large')
return;
}

////////////////////////////////////////////////////////
 if (answertype.value == answer){
  document.getElementById("submit"). disabled = true;
  document.getElementById("textbox"). disabled = true;
 document.getElementById('answer').textContent = "You Are Correct"

 }
 if (answertype.value < answer){
  window.alert('you are below')
  count = count + 1
 }
if (answertype.value > answer){
 window.alert('you are above')
 count = count + 1
}
////////////////////////////////////////////////////////

function right(){
 document.getElementById('answer').textContent = "You Are Correct"
 }
 function wrong(){
   document.getElementById('wronganswer').textContent = "The Year Is: 1919"
 }

////////////////////////////////////////////////////////
if (count == 1){
 bone.textContent = document.getElementById("textbox").value;
}
if (count == 2){
 btwo.textContent = document.getElementById("textbox").value;
 window.alert('between 1400-2000')
}
if (count == 3){
 bthree.textContent = document.getElementById("textbox").value;
 window.alert('between 1600-1800')
}
if (count == 4){
 bfour.textContent = document.getElementById("textbox").value;
 window.alert('after 1700s')
}
if (count == 5){
 bfive.textContent = document.getElementById("textbox").value;
 window.alert('mid early 1700s')
}
if (count == 6){
 bsix.textContent = document.getElementById("textbox").value;
 document.getElementById("submit"). disabled = true;
 document.getElementById("textbox"). disabled = true;
wrong()
}


answertype.value = ""


 
   



console.log(count)
};








exit.onclick = function (){
  popup.style.display = "none"
}

clicker.onclick = function (){
  popup.style.display = "flex"
}
