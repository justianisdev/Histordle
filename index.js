let qone = document.getElementById("q1")  
let qtwo = document.getElementById("q2")  
let qthree = document.getElementById("q3")
let qfour = document.getElementById("q4")
let qfive = document.getElementById("q5")
let qsix = document.getElementById("q6")
let infobox = document.getElementById("textbox").value;



let count = 0
let wrong = document.getElementById("wronganswer")
answertype = document.getElementById("textbox")



document.getElementById("submit").onclick = function(){

 if (answertype.value.indexOf("holy roman empire") >-1) { 
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











if (count == 5) {
 wrong.textContent = 'The asnwer is Holy Roman Empire' 
 document.getElementById("submit"). disabled = true;
 document.getElementById("textbox"). disabled = true;
}


  }


  // display questions


  document.getElementById("about").onclick = function(){
  console.log("d")
   document.getElementById("popup").classList.toggle = true
  }

