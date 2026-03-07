function calculatePi(){

let coins = document.getElementById("coins").value || 0;
let price = document.getElementById("price").value || 0;
let currency = document.getElementById("currency").value;

let total = coins * price;

document.getElementById("result").innerText =
"Estimated Value: " + currency + total.toLocaleString();

}
function scrollToCalculator(){
document.getElementById("pi-calculator").scrollIntoView({
behavior:"smooth"
});
}
