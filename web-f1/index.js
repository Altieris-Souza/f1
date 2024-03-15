// import drivers from "./drivers";

const selectedPilots = JSON.parse(localStorage.getItem('selectedPilots'));
let saldo = parseInt(localStorage.getItem('saldo'));

const pilotOne = document.getElementById("pilotOne"); 
pilotOne.src = selectedPilots[0].car;

const pilotTwo = document.getElementById("pilotTwo"); 
pilotTwo.src = selectedPilots[1].car;

const pilotThree = document.getElementById("pilotThree"); 
pilotThree.src = selectedPilots[2].car;

const pilotFour = document.getElementById("pilotFour"); 
pilotFour.src = selectedPilots[3].car;

const pilotFive = document.getElementById("pilotFive"); 
pilotFive.src = selectedPilots[4].car;

const money = document.getElementById("money")
money.textContent = "Saldo atual: R$" + saldo + ",00";

// const checkPilotOne = document.getElementById("checkPilotOne")
// console.log(checkPilotOne)

// const checkPilotTwo = document.getElementById("checkPilotTwo")
// console.log(checkPilotTwo)

// const checkPilotThree = document.getElementById("checkPilotThree")
// console.log(checkPilotThree)

// const checkPilotFour = document.getElementById("checkPilotFour")
// console.log(checkPilotFour)

// const checkPilotFive = document.getElementById("checkPilotFive")
// console.log(checkPilotFive)

setInterval(() => {

}, 500)