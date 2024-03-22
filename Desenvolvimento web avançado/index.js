const selectedPilots = JSON.parse(localStorage.getItem("selectedPilots"));
let saldo = parseInt(localStorage.getItem("saldo"));

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

const money = document.getElementById("money");

const imgPista = document.querySelector(".pist");
const larguraImgPista = imgPista.clientWidth;

const larguraDaTela = window.innerWidth;

let distCar1 = 0;
let distCar2 = 0;
let distCar3 = 0;
let distCar4 = 0;
let distCar5 = 0;

let chegada = 1600;

function zerarTamanhoDiv() {
  pilotOne.style.marginLeft = "0px";
  pilotTwo.style.marginLeft = "0px";
  pilotThree.style.marginLeft = "0px";
  pilotFour.style.marginLeft = "0px";
  pilotFive.style.marginLeft = "0px";
}

function zerarDistancias() {
  distCar1 = 0;
  distCar2 = 0;
  distCar3 = 0;
  distCar4 = 0;
  distCar5 = 0;
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    checkboxes.forEach((otherCheckbox) => {
      if (otherCheckbox !== checkbox) {
        otherCheckbox.disabled = checkbox.checked;
      }
    });
  });
});

const inputNumero = document.getElementById("numero");

inputNumero.addEventListener("input", () => {
  if (inputNumero.value < 5) {
    inputNumero.value = 5;
  } else if (inputNumero.value > 100) {
    inputNumero.value = 100;
  }
});

let chegou = false;

function andar() {
  if (distCar1 < chegada) {
    distCar1 += Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  } else {
    chegou = true;
  }

  if (distCar2 < chegada) {
    distCar2 += Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  } else {
    chegou = true;
  }

  if (distCar3 < chegada) {
    distCar3 += Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  } else {
    chegou = true;
  }

  if (distCar4 < chegada) {
    distCar4 += Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  } else {
    chegou = true;
  }

  if (distCar5 < chegada) {
    distCar5 += Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  } else {
    chegou = true;
  }

  pilotOne.style.marginLeft = distCar1 + "px";
  pilotTwo.style.marginLeft = distCar2 + "px";
  pilotThree.style.marginLeft = distCar3 + "px";
  pilotFour.style.marginLeft = distCar4 + "px";
  pilotFive.style.marginLeft = distCar5 + "px";
}

const form = document.querySelector("form");

let pilotoVencedor = "";

function apostar() {
  event.preventDefault();

  document.querySelector(".modalVitoria").style.display = "none";
  document.querySelector(".modal-content-vitoria").style.display = "none";
  document.querySelector(".modal").style.display = "none";

  let inputNumero = document.getElementById("numero");
  const valorAposta = parseInt(inputNumero.value);
  let pilotosSelecionado = [];

  if (document.getElementById("check1").checked) {
    pilotosSelecionado.push("Piloto 1");
  }
  if (document.getElementById("check2").checked) {
    pilotosSelecionado.push("Piloto 2");
  }
  if (document.getElementById("check3").checked) {
    pilotosSelecionado.push("Piloto 3");
  }
  if (document.getElementById("check4").checked) {
    pilotosSelecionado.push("Piloto 4");
  }
  if (document.getElementById("check5").checked) {
    pilotosSelecionado.push("Piloto 5");
  }

  const intervalId = setInterval(() => {
    if (chegou != true) {
      andar();
    } else {
      clearInterval(intervalId);

      document.querySelector(".modalVitoria").style.display = "flex";
      document.querySelector(".modal-content-vitoria").style.display = "flex";
      let titulo = document.getElementById("titulo");
      let saldoAtual = document.getElementById("saldoAtual");
      let jogarNov = document.getElementById("jogarNovamente");

      if (
        distCar1 > distCar2 &&
        distCar1 > distCar3 &&
        distCar1 > distCar4 &&
        distCar1 > distCar5
      ) {
        pilotoVencedor = "Piloto 1";
      } else if (
        distCar2 > distCar3 &&
        distCar2 > distCar4 &&
        distCar2 > distCar5
      ) {
        pilotoVencedor = "Piloto 2";
      } else if (distCar3 > distCar4 && distCar3 > distCar5) {
        pilotoVencedor = "Piloto 3";
      } else if (distCar4 > distCar5) {
        pilotoVencedor = "Piloto 4";
      } else {
        pilotoVencedor = "Piloto 5";
      }

      if (pilotoVencedor === pilotosSelecionado[0]) {
        titulo.textContent = "Seu piloto venceu";
        saldo += valorAposta * 2;
        saldoAtual.textContent = "Seu saldo é de: " + saldo;

        jogarNov.addEventListener("click", function () {
          document.querySelector(".modal").style.display = "flex";
          document.querySelector(".modalVitoria").style.display = "none";
          document.querySelector(".modal-content-vitoria").style.display =
            "none";
        });
        console.log(pilotoVencedor);
        console.log(pilotosSelecionado[0]);

        zerarDistancias();
        zerarTamanhoDiv();
        chegou = false;
      } else {
        console.log(pilotosSelecionado[0]);
        console.log(pilotoVencedor);

        titulo.textContent = "Seu piloto perdeu";
        jogarNov.addEventListener("click", function () {
          document.querySelector(".modal").style.display = "flex";
          document.querySelector(".modalVitoria").style.display = "none";
          document.querySelector(".modal-content-vitoria").style.display =
            "none";
        });

        saldo -= valorAposta;
        saldoAtual.textContent = "Seu saldo é de: " + saldo;

        zerarDistancias();
        zerarTamanhoDiv();
        chegou = false;
      }
    }
  }, 50);
}

document.querySelector(".btnApostar").addEventListener("click", apostar);
