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
async function fetchPiPrice(){

let response = await fetch(
"https://api.coingecko.com/api/v3/simple/price?ids=pi-network&vs_currencies=usd,inr,eur,gbp,jpy"
);

let data = await response.json();

piPrices = data["pi-network"];

updatePriceInput();

}
function updatePriceInput(){

let currency = document.getElementById("currency").value;

let priceInput = document.getElementById("price");

switch(currency){

case "$":
priceInput.value = piPrices.usd;
break;

case "₹":
priceInput.value = piPrices.inr;
break;

case "€":
priceInput.value = piPrices.eur;
break;

case "£":
priceInput.value = piPrices.gbp;
break;

case "¥":
priceInput.value = piPrices.jpy;
break;

}

}
let priceChart;

async function loadPriceHistory(){

let response = await fetch(
"https://api.coingecko.com/api/v3/coins/pi-network/market_chart?vs_currency=usd&days=30"
);

let data = await response.json();

let prices = data.prices;

let labels = [];
let values = [];

prices.forEach(item => {

let date = new Date(item[0]);

labels.push(date.toLocaleDateString());

values.push(item[1]);

});

let ctx = document.getElementById('priceHistoryChart').getContext('2d');

if(priceChart){
priceChart.destroy();
}

priceChart = new Chart(ctx,{
type:'line',
data:{
labels:labels,
datasets:[{
label:'Pi Price (USD)',
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
labels:{color:'white'}
}
},
scales:{
x:{ticks:{color:'white'}},
y:{ticks:{color:'white'}}
}
}
});

}
window.onload = function(){
    fetchPiPrice();
    loadPriceHistory();
}