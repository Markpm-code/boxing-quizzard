/**welcome div onclick learnt from stack  overflow */
var button = document.getElementById("start-btn");

button.onclick = function() {
    var div = document.getElementById("intro");
    if (div.style.display !== "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
}



