function calculatePi(){

let coins = document.getElementById("coins").value || 0;
let price = document.getElementById("price").value || 0;

let total = coins * price;

document.getElementById("result").innerText =
"Estimated value: $" + total.toLocaleString();

}
function scrollToCalculator(){
document.getElementById("pi-calculator").scrollIntoView({
behavior:"smooth"
});
}
