function calculatePi(){

let coins = document.getElementById("coins").value || 0;
let price = document.getElementById("price").value || 0;
let currency = document.getElementById("currency").value;

let total = coins * price;
document.getElementById("result").innerText =
"Estimated Value: " + currency + total.toLocaleString();

}
function updateCurrency(){

let currency = document.getElementById("currency").value;

document.getElementById("price").placeholder =
"Price per Pi (" + currency + ")";

}
function scrollToCalculator(){
document.getElementById("pi-calculator").scrollIntoView({
behavior:"smooth"
});
}
let chart;

function calculateProjection(){

let coins = document.getElementById("yearCoins").value || 0;
let price = document.getElementById("startPrice").value || 0;
let growth = document.getElementById("growth").value || 0;

let years = [];
let values = [];

for(let i = 1; i <= 5; i++){

price = price * (1 + growth/100);

years.push(2026 + i);
values.push((coins * price).toFixed(2));

}

let ctx = document.getElementById('projectionChart').getContext('2d');

if(chart){
chart.destroy();
}

chart = new Chart(ctx,{
type:'line',
data:{
labels:years,
datasets:[{
label:'Projected Value',
data:values,
borderColor:'#60a5fa',
backgroundColor:'rgba(96,165,250,0.2)',
fill:true,
tension:0.3
}]
},
options:{
plugins:{
legend:{
labels:{
color:'white'
}
}
},
scales:{
x:{
ticks:{color:'white'}
},
y:{
ticks:{color:'white'}
}
}
}
});

}