let qone = document.getElementById("q1")  
let qtwo = document.getElementById("q2")  
let qthree = document.getElementById("q3")
let qfour = document.getElementById("q4")
let qfive = document.getElementById("q5")
let qsix = document.getElementById("q6")
let infobox = document.getElementById("textbox").value;
let answer = "henry ford"

//

let clicker = document.querySelector('#clicker')
let popup = document.querySelector('#container5')
let exit = document.querySelector('#close')
popup.style.display = "none"
//
let count = 0
let wrong = document.getElementById("wronganswer")
answertype = document.getElementById("textbox")



document.getElementById("submit").onclick = function(){

 if (answertype.value == answer)  {
  document.getElementById("submit"). disabled = true;
  document.getElementById("textbox"). disabled = true;
  document.getElementById("answer").textContent = "You are correct";} 
 
  else {
   count = count + 1
   console.log(count)


  }

  

  if (count == 1) {
   qone.textContent = document.getElementById("textbox").value;
  }

  if (count == 2) {
   qtwo.textContent = document.getElementById("textbox").value;
  }

  if (count == 3) {
   qthree.textContent = document.getElementById("textbox").value;
  }

  if (count == 4) {
   qfour.textContent = document.getElementById("textbox").value;
  }

  if (count == 5) {
   qfive.textContent = document.getElementById("textbox").value;
  }



answertype.value = ""







if (count == 5) {
 wrong.textContent = 'The asnwer is Henry Ford'
 document.getElementById("submit"). disabled = true;
 document.getElementById("textbox"). disabled = true;
}


  }


  // display questions




exit.onclick = function (){
  popup.style.display = "none"
}

clicker.onclick = function (){
  popup.style.display = "flex"
}
