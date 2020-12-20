require('./style.css')




let suits = ["heart", "spades", "club", "diamond"];
let value = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]

window.onload = function() {
    let symbol = document.querySelector(".card");
    symbol.classList.add(suits[Math.floor(Math.random()*suits.length)]);
    let number = document.createElement("P")                                                   // Create a <h1> element
    let number2 = document.createTextNode(value[Math.floor(Math.random()*value.length)]);     // Create a text node
    number.style.fontSize = "100px";

    number.appendChild(number2);                                                             // Append the text to <h1> 
    symbol.appendChild(number);

}