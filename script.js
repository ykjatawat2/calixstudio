function calculatePi(){

let coins = document.getElementById("coins").value;

let price = document.getElementById("price").value;

let total = coins * price;

document.getElementById("result").innerText =
"Estimated value: $" + total;

}
