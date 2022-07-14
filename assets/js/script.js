/**welcome div onclick learnt from stack  overflow */
let startButton = document.getElementById("start-btn");
let welcome = document.getElementById("intro");
let firstQuestion = document.getElementById("unhide");

startButton.onclick = function() {
    welcome = document.getElementById("intro");
    if (welcome.style.display !== "none") {
        welcome.style.display = "none";
    }
    else {
        welcome.style.display = "none"
    }
}
startButton.onclick = function() {
    let firstQuestion = document.getElementById("unhide");
   
   if (firstQuestion.style.display !=="none") {
       firstQuestion.style.display = "none";

   }else {
       firstQuestion.style.display = "block";
   }

   }

